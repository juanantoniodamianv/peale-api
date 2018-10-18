/**
 * User.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
var bcrypt = require("bcrypt");
var mandrill = require('mandrill-api/mandrill');
var mandrill_client = new mandrill.Mandrill(process.env.API_KEY_MANDRILL);

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

    favorites: {
      collection: "favorite",
      via: "user"
    },

    viewedSermons: {
      collection: "viewed",
      via: "user"
    },

    comment: {
      collection: "comment",
      via: "author"
    },

    // tags: {}

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

  sendEmailForgotPassword: (user, hashPassword) => {
    let receiveName = user.firstName || user.lastName || user.username;
    var message = {
      "html": "<div><p>Dear " + receiveName + "</p><p>Hi! We recently had a request to reset your account password at Peale Foundation App.</p><p>If you see that the above information is not correct, contact us at support@ballastlane.com</p></div><div><p>To reset your password account, click on the following link </p></div>",
      "subject": "Forgot password?",
      "from_email": "support@ballastlane.com",
      "from_name": "Ballast Lane Support",
      "to": [{
        "email": user.username,
        "name": user.lastName + ', ' + user.firstName,
        "type": "to"
      }],
      "important": true,
      "tags": [
        "password-resets"
      ],
    }
    var async = false;
    mandrill_client.messages.send({"message": message, "async": async}, (result) => {
      console.log(result);
    }, (e) => {
      console.log('A mandrill error occurred: ' + e.name + ' - ' + e.message);
    });

  },
  
};

