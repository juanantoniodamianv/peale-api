/**
 * User.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
var bcrypt = require("bcrypt");

module.exports = {

  attributes: {

    username: {
      type: 'string',
      required: true,
      unique: true,
      isEmail: true,
      maxLength: 200,
      example: 'carol.reyna@microsoft.com'
    },

    password: {
      type: "string",
      minLength: 6,
      required: true,
      columnName: "encryptedPassword",
      description: 'Securely hashed representation of the user\'s login password.', 
      example: '2$28a8eabna301089103-13948134nad'
    },

    firstName: {
      type: "string",
      minLength: 2
    },

    lastName: {
      type: "string",
      minLength: 2
    },

    passwordResetToken: {
      type: "string",
    },

    passwordResetTokenExpiresAt: {
      type: "number"
    },

    /* favorites: {},

    played: {},

    tags: {}
    */
  },

  customToJSON: function() {
    return _.omit(this, 'password');
  },

  beforeCreate: async (values, cb) => {
    bcrypt.hash(values.password, 10, function (err, hash) {
      if (err) return cb(err);
      values.password = hash;
      cb();
    });
  },

  beforeUpdate: function(values, cb){
    if(values.password) {
      bcrypt.hash(values.password, 10, function (err, hash) {
        if (err) return cb(err);
        values.password = hash;
        cb();
      })
    } else {
      cb();
    }
  },
  
};

