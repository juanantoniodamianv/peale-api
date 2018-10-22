var jwt = require('jsonwebtoken');
var jwtSecret = process.env.JWT_SECRET || 'some-secret-jwt';

module.exports = {


  friendlyName: 'Jwt Generate',


  description: 'Generate JSON Web Token.',


  inputs: {
    payload: {
      description: 'Payload.',
      type: 'string',
      required: true
    }
  },


  exits: {

  },


  fn: async function (inputs, exits) {
    var token = await jwt.sign({uid: inputs.payload}, jwtSecret, {expiresIn: '24h'})
    var refreshToken = await jwt.sign({uid: inputs.payload}, jwtSecret)
    
    return exits.success({token, refreshToken});
  }


};

