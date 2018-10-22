module.exports = {


  friendlyName: 'Signup',


  description: 'Sign up for a new user account.',


  extendedDescription:
`This creates a new user record in the database, signs in the requesting user agent
by modifying its [session](https://sailsjs.com/documentation/concepts/sessions), and
(if emailing with Mailgun is enabled) sends an account verification email.

If a verification email is sent, the new user's account is put in an "unconfirmed" state
until they confirm they are using a legitimate email address (by clicking the link in
the account verification message.)`,


  inputs: {

    username: {
      required: true,
      type: 'string',
      isEmail: true,
      description: 'The email address for the new account, e.g. m@example.com.',
      extendedDescription: 'Must be a valid email address.',
    },

    password: {
      required: true,
      type: 'string',
      maxLength: 200,
      minLength: 6,
      example: 'passwordlol',
      description: 'The unencrypted password to use for the new account.'
    },

    confirmPassword: {
      required: true,
      type: 'string',
      maxLength: 200,
      minLength: 6,
      example: 'passwordlol',
      description: 'Password confirm.'
    },

    firstName:  {
      type: 'string',
      example: 'Frida Kahlo de Rivera',
      description: 'The user\'s full name.',
    }, 

    lastName:  {
      type: 'string',
      example: 'Frida Kahlo de Rivera',
      description: 'The user\'s full name.',
    }

  },


  exits: {

    invalid: {
      responseType: 'badRequest',
      description: 'The provided firstName, lastName, password and/or email address are invalid.',
      extendedDescription: 'If this request was sent from a graphical user interface, the request '+
      'parameters should have been validated/coerced _before_ they were sent.'
    },

    emailAlreadyInUse: {
      statusCode: 409,
      description: 'The provided email address is already in use.',
    },

    passwordDoNotMatch: {
      statusCode: 409,
      description: 'The provided passwords do not match.'
    }

  },


  fn: async function (inputs, exits) {

    var newEmailAddress = inputs.username.toLowerCase();

    if (inputs.password !== inputs.confirmPassword) {
      throw { passwordDoNotMatch: 'The provided password do not match.' };
    }

    // Build up data for the new user record and save it to the database.
    // (Also use `fetch` to retrieve the new ID so that we can use it below.)
    var newUserRecord = await User.create(Object.assign({
      username: newEmailAddress,
      password: inputs.password,
      firstName: inputs.firstName,
      lastName: inputs.lastName,
    }))
    .intercept('E_UNIQUE', () => { return exits.emailAlreadyInUse({message: 'There is already an account using that email address!'}); })
    .intercept({name: 'UsageError'}, 'invalid')
    .fetch();

    let newToken = await sails.helpers.jwt.generate(newUserRecord.id);

    var responseData = {
      user: newUserRecord,
      token: newToken.token,
      refreshToken: newToken.refreshToken
    }

    // Store the user's new id in their session.
    this.req.session.userId = newUserRecord.id;

    // Since everything went ok, send our 200 response.
    return exits.success(responseData);

  }

};
