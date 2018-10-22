module.exports = {


  friendlyName: 'Refresh token',


  description: 'Verify token is valid and if it expired, sign new token(with old tokens payload) and response it.',


  inputs: {

  },


  exits: {
    success: {
      statusCode: 200,
      description: 'Token and refresh token are generated successfully.',
    },

    unauthorized: {
      statusCode: 404,
      description: 'You can not perform this action.',
    }
  },


  fn: async function (inputs, exits) {

    var responseData = {
      user: this.req.current_user,
      token: this.req.token,
      refreshToken: this.req.refreshToken,
    }

    return exits.success(responseData);

  }


};
