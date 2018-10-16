/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also do this by creating a hook.
 *
 * For more information on bootstrapping your app, check out:
 * https://sailsjs.com/config/bootstrap
 */
var moment = require('moment');

module.exports.bootstrap = async function(done) {
  /*********** USERS ***********/

  var users = [
    {
      "username": "antonio.vargas@walloom.com",
      "password": "1234567890",
      "firstName": "Juan Antonio Damian",
      "lastName": "Vargas",
    }
  ];

  users.forEach(element => {
    User.findOrCreate({ username: element.username}, {
      username: element.username,
      password: element.password,
      firstName: element.firstName,
      lastName: element.lastName
    })
    .exec(async (err, user, wasCreated) => {
      if (err) { return done(err) }
      if (wasCreated) { 
        sails.log.info(`Created a new user: ${user.username}`)
      } else {
        sails.log.warn(`Found existing user: ${user.username}`)
      }
    })
  });

  /*********** SERMONS ***********/

  var sermons = [
    {
      "fileName": "snippetvideo000.m4v",
      "date": moment().format('MMMM Do YYYY'),
      "title": "Health and Happiness",
      "description": "Of course, everybody wants health and happiness.  In this short snippet, Dr. Peale tells us that the laws of health and happiness are taught better in the church than anywhere else.  And that the true definition of happiness is not pollyannaish sweetness and light, but rather doing the right thing, in the right way and in the right time.",
      "bibleVerse": "",
      "bibleVerseText": "",
      "type": "video",
      "duration": 600,
      "package": "base",
    }
  ];

  sermons.forEach(element => {
    Sermon.findOrCreate({ fileName: element.fileName }, {
      fileName: element.fileName,
      date: element.date,
      title: element.title,
      description: element.description,
      bibleVerse: element.bibleVerse,
      bibleVerseText: element.bibleVerseText,
      type: element.type,
      duration: element.duration,
      package: element.package
    })
    .exec(async (err, sermon, wasCreated) => {
      if (err) { return done(err) }
      if (wasCreated) { 
        sails.log.info(`Created a new sermon: ${sermon.fileName}`)
      } else {
        sails.log.warn(`Found existing sermon: ${sermon.fileName}`)
      }
    })
  });

  return done();

};
