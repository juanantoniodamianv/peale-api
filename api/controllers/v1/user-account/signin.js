//var bcrypt = require("bcrypt");

module.exports = {


  friendlyName: 'SignIn',


  description: 'Sign in using the provided email and password combination.',


  extendedDescription:
`This action attempts to look up the user record in the database with the
specified email address.  Then, if such a user exists, it uses
bcrypt to compare the hashed password from the database with the provided
password attempt.`,


  inputs: {

    username: {
      description: 'The email to try in this attempt, e.g. "irl@example.com".',
      type: 'string',
      required: true
    },

    password: {
      description: 'The unencrypted password to try in this attempt, e.g. "passwordlol".',
      type: 'string',
      required: true
    },

  },


  exits: {

    success: {
      description: 'The requesting user agent has been successfully logged in.',
      extendedDescription:
`Under the covers, this stores the id of the logged-in user in the session
as the \`userId\` key.  The next time this user agent sends a request, assuming
it includes a cookie (like a web browser), Sails will automatically make this
user id available as req.session.userId in the corresponding action.  (Also note
that, thanks to the included "custom" hook, when a relevant request is received
from a logged-in user, that user's entire record from the database will be fetched
and exposed as \`req.me\`.)`
    },

    badCombo: {
      description: `The provided username and password combination does not
      match any user in the database.`,
      responseType: 'unauthorized'
      // ^This uses the custom `unauthorized` response located in `api/responses/unauthorized.js`.
      // To customize the generic "unauthorized" response across this entire app, change that file
      // (see http://sailsjs.com/anatomy/api/responses/unauthorized-js).
      //
      // To customize the response for _only this_ action, replace `responseType` with
      // something else.  For example, you might set `statusCode: 498` and change the
      // implementation below accordingly (see http://sailsjs.com/docs/concepts/controllers).
    },

    unauthorized: {
      statusCode: 404,
      description: 'The username provided are incorrect.',
    },

    incorrectPassword: {
      statusCode: 409,
      description: 'Credentials are incorrect.'
    }

  },


  fn: async function (inputs, exits) {
    // Look up by the email address.
    // (note that we lowercase it to ensure the lookup is always case-insensitive,
    // regardless of which database we're using)
    var userRecord = await User.findOne({
      username: inputs.username.toLowerCase(),
    });

    // If there was no matching user, respond thru the "badCombo" exit.
    if(!userRecord) {
      throw { unauthorized: 'The username provided are incorrect.' };
    }

    // If the password doesn't match, then also exit thru "badCombo".
    /* const match = await bcrypt.compare(inputs.password, userRecord.password);
 
    if (!match) {
      throw { incorrectPassword: 'Credentials are incorrect.' };
    } */

    if (inputs.password !== userRecord.password) {
      throw { incorrectPassword: 'Credentials are incorrect.' };
    }

    let newToken = await sails.helpers.jwt.generate(userRecord.id);

    var responseData = {
      user: userRecord,
      token: newToken.token,
      refreshToken: newToken.refreshToken
    }
    // Modify the active session instance.
    this.req.session.userId = userRecord.id;

    // Send success response (this is where the session actually gets persisted)
    return exits.success(responseData);

  }

};