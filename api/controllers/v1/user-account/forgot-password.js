module.exports = {
  friendlyName: 'Forgot Password',


  description: 'Recovery password for user account, with the email/username.',


  extendedDescription: `This action attempts to recovery password for one user account with the email/username provided.`,


  inputs: {

    username: {
      description: 'The email to try in this attempt, e.g. "irl@example.com".',
      type: 'string',
      required: true
    },

  },


  exits: {

    success: {
      description: 'An email has been sent, please check your inbox to reset you password.',
      extendedDescription: `An email has been sent, please check your inbox to reset you password`
    },

    badCombo: {
      description: `The provided username/email does not
      match any user in the database.`,
      responseType: 'unauthorized'
    },

    unauthorized: {
      statusCode: 404,
      description: 'The provided username/email does not match any user in the database',
    },

  },


  fn: async function (inputs, exits) {
    
    var userRecord = await User.findOne({
      username: inputs.username.toLowerCase(),
    });

    if(!userRecord) {
      throw { unauthorized: 'The provided username/email does not match any user in the database.' };
    }

    User.sendEmailForgotPassword(userRecord, hashPassword);

    return exits.success('An email has been sent, please check your inbox to reset you password.');

  }

};