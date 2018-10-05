var jwt = require('jsonwebtoken');
var jwtSecret = process.env.JWT_SECRET || 'some-secret-jwt';

module.exports = {


  friendlyName: 'JWT Verify',


  description: 'Verify jwt.',


  inputs: {
    token: {
      description: 'Token.',
      type: 'string',
      required: true
    },

    callback: {
      description: 'Callback.',
      type: 'ref',
      required: true
    }
  },


  exits: {

  },


  fn: async function (inputs, exits) {

    var isValid = await jwt.verify(inputs.token, jwtSecret, inputs.callback);
    return exits.success(isValid);

  }


};

