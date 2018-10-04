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

module.exports.bootstrap = async function(done) {

  // By convention, this is a good place to set up fake data during development.
  //
  // For example:
  // ```
  // // Set up fake development data (or if we already have some, avast)
  // if (await User.count() > 0) {
  //   return done();
  // }
  //
  // await User.createEach([
  //   { emailAddress: 'ry@example.com', fullName: 'Ryan Dahl', },
  //   { emailAddress: 'rachael@example.com', fullName: 'Rachael Shaw', },
  //   // etc.
  // ]);
  // ```

  // Don't forget to trigger `done()` when this bootstrap function's logic is finished.
  // (otherwise your server will never lift, since it's waiting on the bootstrap)

  if (await User.count({ username: 'antonio.vargas@walloom.com' }) === 0) {
    await User.createEach([
      { username: 'antonio.vargas@walloom.com', password: '1234567890', firstName: 'Admin', lastName: 'Administrator' }
    ]);
  }

  var sermons = [
    {
      "fileName": "snippetvideo000.m4v",
      "date": "2002-05-30T09:00:00",
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
