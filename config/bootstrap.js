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
      "title": "Health and Happiness",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Of course, everybody wants health and happiness.  In this short snippet, Dr. Peale tells us that the laws of health and happiness are taught better in the church than anywhere else.  And that the true definition of happiness is not pollyannaish sweetness and light, but rather doing the right thing, in the right way and in the right time.",
      "bibleVerse": "",
      "bibleVerseText": "",
      "package": "base",
      "type": "video",
      "duration": 360,
      "tags": {
        "Great Introduction": 10,
        "Humorous": 2,
        "Encouraging": 8,
        "Comforting": 9,
        "Calming": 5,
        "Empowering": 6,
        "Thought Provoking": 2,
        "Enlightening": 3,
        "Useful": 2,
        "Energizing": 6,
        "Informative": 3,
        "Faith Building": 3,
        "Heartening": 5,
        "Joyful": 3,
        "Healing": 1,
        "Fresh": 3,
        "Inspiring": 0,
        "Timeless": 1,
        "Hopeful": 1,
        "Uplifting": 3,
        "Mind Changing": 1,
        "Refreshing": 0
      }
    },
    {
      "fileName": "snippetvideo001.m4v",
      "title": "How Do You Build Up Hope?",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale steers a man having troubles to Psalm 42 verse 11 to find a way to answer his hopelessness.  After reading the Psalms, Matthew, Mark and others, the man called Dr. Peale and said “You gave me the answer to the lack of hope, it's all in the Bible.”",
      "bibleVerse": "Psalm 42:11",
      "bibleVerseText": "Why are you in despair, O my soul? And why have you become disturbed within me? Hope in God, for I shall yet praise Him, The help of my countenance and my God.",
      "package": "base",
      "type": "video",
      "duration": 300,
      "tags": {
        "Great Introduction": 10,
        "Empowering": 5,
        "Energizing": 4,
        "Inspiring": 4,
        "Comforting": 6,
        "Encouraging": 5,
        "Mind Changing": 4,
        "Uplifting": 3,
        "Thought Provoking": 3,
        "Faith Building": 5,
        "Hopeful": 6,
        "Heartening": 4,
        "Humorous": 1,
        "Timeless": 1,
        "Calming": 1,
        "Liberating": 2,
        "Informative": 2,
        "Refreshing": 1,
        "Useful": 2,
        "Healing": 4,
        "Enlightening": 1,
        "Fresh": 1
      }
    },
    {
      "fileName": "snippetvideo002.m4v",
      "title": "Patience",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale says that patience is one of the most powerful words in the English language.  When you let patience power work for you, some wonderful values will come into your experience -- forbearance, toughness, and calmness.  “When you live with God, you get a deep philosophy so can take things as they come.”",
      "bibleVerse": "Psalm 27:14",
      "bibleVerseText": "Do not be impatient! Wait for the Lord, and he will come and save you. Yes, wait and he will help you.",
      "package": "base",
      "type": "video",
      "duration": 360,
      "tags": {
        "Great Introduction": 10,
        "Faith Building": 3,
        "Empowering": 5,
        "Encouraging": 4,
        "Energizing": 2,
        "Liberating": 3,
        "Healing": 2,
        "Refreshing": 2,
        "Heartening": 2,
        "Calming": 1,
        "Timeless": 1,
        "Inspiring": 3,
        "Informative": 1,
        "Enlightening": 2,
        "Thought Provoking": 4,
        "Fresh": 0,
        "Hopeful": 3,
        "Comforting": 1,
        "Mind Changing": 2,
        "Humorous": 3,
        "Uplifting": 1,
        "Useful": 2,
        "Visionary": 1,
        "Joyful": 2
      }
    },
    {
      "fileName": "snippetvideo003.m4v",
      "title": "How to Stop Being Discouraged",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale tells us about Dr. E. Stanley Jones, a missionary to India, who claimed he was “never discouraged one day over the last 25 years.” How is that possible you ask?  Dr. Peale answers “If you give your life to the Lord, He'll take care of you.”",
      "bibleVerse": "",
      "bibleVerseText": "",
      "package": "base",
      "type": "video",
      "duration": 360,
      "tags": {
        "Great Introduction": 10,
        "Faith Building": 5,
        "Inspiring": 2,
        "Thought Provoking": 1,
        "Useful": 2,
        "Mind Changing": 2,
        "Hopeful": 2,
        "Heartening": 4,
        "Healing": 3,
        "Energizing": 3,
        "Encouraging": 7,
        "Fresh": 3,
        "Visionary": 1,
        "Calming": 2,
        "Comforting": 3,
        "Empowering": 2,
        "Liberating": 2,
        "Humorous": 2,
        "Joyful": 2
      }
    },
    {
      "fileName": "snippetvideo004.m4v",
      "title": "Healthy Mindedness",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale says “God gave you a wonderful life, a healthy body and a strong mind.  Do not let fear, hate, resentment and tension siphon off these gifts.” He also shares a funny story about a man from Brokenbow, Nebraska that demonstrates the power of this approach.",
      "bibleVerse": "",
      "bibleVerseText": "",
      "package": "base",
      "type": "video",
      "duration": 360,
      "tags": {
        "Great Introduction": 10,
        "Liberating": 2,
        "Hopeful": 2,
        "Fresh": 5,
        "Refreshing": 2,
        "Enlightening": 5,
        "Calming": 6,
        "Comforting": 7,
        "Energizing": 3,
        "Encouraging": 5,
        "Humorous": 3,
        "Healing": 5,
        "Faith Building": 3,
        "Empowering": 6,
        "Heartening": 3,
        "Inspiring": 3,
        "Visionary": 2,
        "Mind Changing": 1,
        "Thought Provoking": 1,
        "Timeless": 1,
        "Informative": 3,
        "Uplifting": 1,
        "Joyful": 3,
        "Useful": 2
      }
    },
    {
      "fileName": "snippetvideo005.m4v",
      "title": "Integrity",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Get all the air out of your mind and get rightness an truth in.  If you are wrong everything will turn out wrong.  What is wrongness?  Dr. Peale tells us “Wrongness is that which cannot be equated with the spirit of Jesus Christ.”  Dr. Peale shares a story about how this insight changes an acquaintance’s life.",
      "bibleVerse": "",
      "bibleVerseText": "",
      "package": "base",
      "type": "video",
      "duration": 360,
      "tags": {
        "Great Introduction": 10,
        "Encouraging": 4,
        "Healing": 4,
        "Faith Building": 1,
        "Enlightening": 5,
        "Empowering": 2,
        "Fresh": 3,
        "Energizing": 1,
        "Liberating": 1,
        "Mind Changing": 0,
        "Thought Provoking": 1,
        "Heartening": 1,
        "Inspiring": 2,
        "Useful": 2,
        "Comforting": 2,
        "Calming": 2,
        "Hopeful": 2,
        "Joyful": 2,
        "Humorous": 1,
        "Informative": 1,
        "Refreshing": 1,
        "Timeless": 1,
        "Uplifting": 1,
        "Visionary": 1
      }
    },
    {
      "fileName": "snippetvideo006.m4v",
      "title": "Faith",
      "date": moment().format('MMMM Do YYYY'),
      "description": "“What is a champion?” asks Dr. Peale in this short sermon snippet.  A champion is someone who does something superbly well.  A famous sports figure tells Dr. Peale how to achieve that -- have a goal, make sacrifices, discipline yourself and have faith in yourself made possible by faith in Jesus Christ.",
      "bibleVerse": "",
      "bibleVerseText": "",
      "package": "base",
      "type": "video",
      "duration": 420,
      "tags": {
        "Great Introduction": 10,
        "Comforting": 5,
        "Encouraging": 8,
        "Faith Building": 6,
        "Calming": 5,
        "Empowering": 7,
        "Inspiring": 3,
        "Fresh": 4,
        "Healing": 8,
        "Joyful": 3,
        "Energizing": 6,
        "Enlightening": 3,
        "Liberating": 1,
        "Heartening": 4,
        "Hopeful": 5,
        "Mind Changing": 3,
        "Informative": 2,
        "Humorous": 3,
        "Thought Provoking": 2,
        "Refreshing": 1,
        "Useful": 1,
        "Timeless": 1,
        "Visionary": 1,
        "Uplifting": 1
      }
    },
    {
      "fileName": "snippetvideo007.m4v",
      "title": "How to Keep Enthusiasm Going All Your Life",
      "date": moment().format('MMMM Do YYYY'),
      "description": "There are very few things in life are more important that enthusiasm.  Emerson said “Nothing great has ever been accomplished in this world without enthusiasm.” In this sermon highlight, Dr. Peale tells us “You can have enthusiasm all your life that will not erode or dissipate.”",
      "bibleVerse": "",
      "bibleVerseText": "",
      "package": "base",
      "type": "video",
      "duration": 360,
      "tags": {
        "Great Introduction": 10,
        "Informative": 3,
        "Fresh": 1,
        "Useful": 2,
        "Empowering": 5,
        "Healing": 3,
        "Encouraging": 5,
        "Humorous": 3,
        "Calming": 1,
        "Enlightening": 3,
        "Inspiring": 4,
        "Thought Provoking": 4,
        "Mind Changing": 4,
        "Visionary": 2,
        "Heartening": 2,
        "Uplifting": 2,
        "Timeless": 2,
        "Refreshing": 3,
        "Energizing": 3,
        "Hopeful": 1,
        "Comforting": 3,
        "Faith Building": 2,
        "Joyful": 1,
        "Liberating": 1
      }
    },
    {
      "fileName": "840527.m4v",
      "title": "The Successful Life Principle",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale tells us, that Jesus Christ worked with people. He took the most abject failures and made them into immortals. In the Bible Jesus Christ outlines certain simple principles which taken together form the successful life principle. NVP goes on to illustrate these principles from the lives of several people who used them successfully.",
      "bibleVerse": "Matthew 7:24-27, John 15:12",
      "bibleVerseText": "7:24) Everyone who hears these words of mine and does them is like a wise man who built his house on rock. 25) The rain fell, the flood came, and the winds beat against that house, but it did not collapse because it had been founded on rock. 26) Everyone who hears these words of mine and does not do them is like a foolish man who built his house on sand. 27) The rain fell, the flood came, and the winds beat against that house, and it collapsed; it was utterly destroyed! -- 15:12) My commandment is this: Love each other as I have loved you.",
      "package": "premium",
      "type": "video",
      "duration": 1500,
      "tags": {
        "Fresh": 11,
        "Timeless": 1
      }
    },
    {
      "fileName": "840506.m4v",
      "title": "The True Joy Of Positive Living",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale says that you can have deep within a profound sense of joy despite the pain and trouble that life can bring you. We can all have a wonderful state of well being, mentally, spiritually and physically. How can these wonderful results be brought about? NVP says, “Number one is to develop your faith in –depth. Become a great believer and great things will happen to you.”",
      "bibleVerse": "John 8:12, Mark 9:12, Matthew 9:29, 17:20",
      "bibleVerseText": "8:12) Then Jesus spoke out again, “I am the light of the world. The one who follows me will never walk in darkness, but will have the light of life.” --  9:12) He said to them, “Elijah does indeed come first, and restores all things. And why is it written that the Son of Man must suffer many things and be despised? --  9:29) Then he touched their eyes saying, “Let it be done for you according to your faith.” -- ",
      "package": "base",
      "type": "video",
      "duration": 1500,
      "tags": {
        "Energizing": 11,
        "Uplifting": 2,
        "Faith Building": 3,
        "Encouraging": 3,
        "Liberating": 1,
        "Joyful": 1,
        "Inspiring": 2,
        "Calming": 2,
        "Refreshing": 4,
        "Visionary": 1,
        "Mind Changing": 2,
        "Useful": 0,
        "Humorous": 2,
        "Healing": 1,
        "Heartening": 2,
        "Comforting": 2,
        "Empowering": 1,
        "Enlightening": 2,
        "Hopeful": 2,
        "Fresh": 1,
        "Thought Provoking": 1
      }
    },
    {
      "fileName": "831120.m4v",
      "title": "How To Be Really Happy",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale says that everyone wants health and happiness. He answers a question  put to him by a young woman, “I want to live a long, healthy, happy life. How do I go about doing it?” Dr. Peale says, “The answer to you question is to keep it right in your head. Keep your thoughts good not bad. Keep your thoughts decent not indecent. Keep your thoughts full of faith.” He goes on to illustrate this from the lives of others.",
      "bibleVerse": "Proverbs 16:20, Philippians 2:5",
      "bibleVerseText": "16:20) The one who deals wisely in a matter will find success, and blessed is the one who trusts in the Lord. --  13:17) If you understand these things, you will be blessed if you do them. -- 2:5) You should have the same attitude toward one another that Christ Jesus had,",
      "package": "premium",
      "type": "video",
      "duration": 1500,
      "tags": {
        "Joyful": 11,
        "Healing": 2,
        "Comforting": 1,
        "Mind Changing": 1,
        "Fresh": 1,
        "Thought Provoking": 0,
        "Empowering": 2,
        "Heartening": 1,
        "Inspiring": 1
      }
    },
    {
      "fileName": "830515.m4v",
      "title": "How Positive Thinking Works For You",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale says, if you think yourself up, you will go up because you are what you think. One of the things that happens to a person creatively when they think positively is that they enhance the scope and quality of their life. He goes on to illustrate how he experienced this in a tattoo parlor in Kowloon, China and a hotel in Texas.",
      "bibleVerse": "Mark 9:23",
      "bibleVerseText": "9:23) Then Jesus said to him, “‘If you are able?’ All things are possible for the one who believes.”",
      "package": "premium",
      "type": "video",
      "duration": 1500,
      "tags": {
        "Humorous": 11,
        "Encouraging": 1,
        "Empowering": 1,
        "Hopeful": 1,
        "Energizing": 1,
        "Faith Building": 1,
        "Joyful": 1,
        "Thought Provoking": 1
      }
    },
    {
      "fileName": "820509.m4v",
      "title": "Keep Hope Going Always",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale tells us that the Bible says, “We are saved by hope.” I you can always keep hope going you can realize your fondest dreams. If you can always keep hope going you can reach your cherished goals. If you can always keep hope going you can overcome every problem and rise above every difficulty.",
      "bibleVerse": "Romans 8:24, I Corinthians 13:13",
      "bibleVerseText": "8:24) For in hope we were saved. Now hope that is seen is not hope, because who hopes for what he sees? --  13:13) And now these three remain: faith, hope, and love. But the greatest of these is love.",
      "package": "premium",
      "type": "video",
      "duration": 1500,
      "tags": {
        "Enlivening": 10,
        "Energizing": 2,
        "Encouraging": 2,
        "Empowering": 1,
        "Calming": 1,
        "Enlightening": 1,
        "Comforting": 1,
        "Faith Building": 2,
        "Inspiring": 1,
        "Refreshing": 1,
        "Visionary": 2,
        "Hopeful": 2,
        "Liberating": 1,
        "Heartening": 3,
        "Mind Changing": 1,
        "Joyful": 2,
        "Healing": 1,
        "Thought Provoking": 1,
        "Timeless": 1
      }
    },
    {
      "fileName": "820228.m4v",
      "title": "A Sure Cure For Worry",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale tells us that the presence of God is a reality. Say to yourself in the morning, at noontime, when you go home and before you go to sleep, “The Lord is with me. You will build up within yourself a consciousness and absolute certainty that this is fact. Though illustrations from the lives of several people, Dr. Peale reminds us that faith is stronger than worry. Worry can’t exist in  the same place that is filled with faith.",
      "bibleVerse": "Psalm 34:4, Isaiah 41:13",
      "bibleVerseText": "34:4) I sought the Lord’s help and he answered me; he delivered me from all my fears. --  41:13) For I am the Lord your God, the one who takes hold of your right hand, who says to you, ‘Don’t be afraid, I am helping you.’",
      "package": "premium",
      "type": "video",
      "duration": 1500,
      "tags": {
        "Faith Building": 13,
        "Encouraging": 3,
        "Energizing": 2,
        "Joyful": 2,
        "Empowering": 3,
        "Calming": 5,
        "Enlightening": 1,
        "Informative": 0,
        "Comforting": 4,
        "Fresh": 2,
        "Useful": 0,
        "Hopeful": 1,
        "Heartening": 1,
        "Mind Changing": 2
      }
    },
    {
      "fileName": "810315.m4v",
      "title": "Real Faith Works Wonder",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale says that faith works wonders because he has known people that have really had it tough and their faith held them up. He shares the stories of three whose faith saw then through tough situations to successful living. He reminds us that faith helps people do great things in the world, and that, whatever your problem, apply faith to it..",
      "bibleVerse": "Mark 9:23",
      "bibleVerseText": "9:23) Then Jesus said to him, “‘If you are able?’ All things are possible for the one who believes.”",
      "package": "premium",
      "type": "video",
      "duration": 1500,
      "tags": {
        "Empowering": 10,
        "Faith Building": 1,
        "Heartening": 1,
        "Enlightening": 1,
        "Humorous": 1,
        "Uplifting": 0,
        "Mind Changing": 0,
        "Useful": 1,
        "Calming": 1,
        "Hopeful": 1
      }
    },
    {
      "fileName": "810308.m4v",
      "title": "You Can Cope Successfully With Life",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale gives us eleven magic words from Job, “If you return to the Almighty you will be built up.” NVP says, “Cooperate with life, get in harmony with it, then it will work for you rather than against you. If you handle the blows and difficulties that He has inherently put into the world by being in harmony with His rules, you can cope with life alright.”",
      "bibleVerse": "Joshua 1:9, Job 22.23",
      "bibleVerseText": "1:9) I repeat, be strong and brave! Don’t be afraid and don’t panic, for I, the Lord your God, am with you in all you do.” --  22:23) If you return to the Almighty, you will be built up; if you remove wicked behavior far from your tent,",
      "package": "premium",
      "type": "video",
      "duration": 1500,
      "tags": {
        "Fresh": 10,
        "Inspiring": 1,
        "Calming": 0,
        "Comforting": 0
      }
    },
    {
      "fileName": "810118.m4v",
      "title": "The Secret Of Goal Achieving",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale says success means fullness of personality, to be the best in your soul and to make a constructive contribution to your day in age. You must have a clearly defined goal to focus on so that it becomes the dominating objective in your life. NVP says his father told him how to reach a goal. “State it, pray about it and the go and get it.”",
      "bibleVerse": "Joshua 1:8",
      "bibleVerseText": "1:8) This law scroll must not leave your lips! You must memorize it day and night so you can carefully obey all that is written in it. Then you will prosper and be successful.",
      "package": "premium",
      "type": "video",
      "duration": 1500,
      "tags": {
        "Though Provoking": 10,
        "Faith Building": 1,
        "Refreshing": 0,
        "Thought Provoking": 0
      }
    },
    {
      "fileName": "800928.m4v",
      "title": "Decide To Be Happy",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale says, “Whatever you make up your mind to be, you are going to be.” He shares the stories of several people who have found this true in their lives. He tells us that happiness is not superficial, it is sometimes obtained through peril. Toil and pain. He says, “If you make a decision to go for God and to take Jesus Christ and live with Him, your life can be altogether different.”",
      "bibleVerse": "Proverbs 16:20",
      "bibleVerseText": "16:20) The one who deals wisely in a matter will find success, and blessed is the one who trusts in the Lord.",
      "package": "premium",
      "type": "video",
      "duration": 1500,
      "tags": {
        "Refreshing;": 10,
        "Empowering": 2,
        "Calming": 2,
        "Healing": 1,
        "Comforting": 2,
        "Encouraging": 2,
        "Faith Building": 1,
        "Heartening": 1,
        "Informative": 1,
        "Joyful": 1
      }
    },
    {
      "fileName": "800203.m4v",
      "title": "How To Reach Your Goal",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale believes that anyone can reach their goal. It has been said that in America the way to reach your goal is to work, work, work. Dr. Peale, here, offers a three step program that will help you reach your goal. It is: Having a deep desire and intensity of belief; creative thoughtsmanship and faith all the way. Have faith in God  and believe in yourself and the Lord will take care of you and guide you to your goal.",
      "bibleVerse": "Joshua 1:7-9",
      "bibleVerseText": "1:7) Make sure you are very strong and brave! Carefully obey all the law my servant Moses charged you to keep! Do not swerve from it to the right or to the left, so that you may be successful in all you do. 8) This law scroll must not leave your lips! You must memorize it day and night so you can carefully obey all that is written in it. Then you will prosper and be successful. 9) I repeat, be strong and brave! Don’t be afraid and don’t panic, for I, the Lord your God, am with you in all you do.”",
      "package": "premium",
      "type": "video",
      "duration": 1500,
      "tags": {
        "Uplifting": 10,
        "Encouraging": 1,
        "Hopeful": 1,
        "Inspiring": 1
      }
    },
    {
      "fileName": "791202.m4v",
      "title": "How To Handle A Problem Successfully",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale says that a first step in handling a problem is to be sure that the surface of the mind is undisturbed by anxiety, or fear, or nervousness. These block off insights that rise from the deeper levels of the mind. Therefore quietness is basic to solving a problem. NVP says, “It is most unlikely that the right solution can be found on the basis of emotional reactions. Only by cool dispassionate, prayerful, spiritual thought can the right solutions of problems be obtained.”",
      "bibleVerse": "Proverbs 3:13, Philippians 4:7",
      "bibleVerseText": "3:13) Blessed is the one who finds wisdom, and the one who obtains understanding. --  4:7) And the peace of God that surpasses all understanding will guard your hearts and minds in Christ Jesus.",
      "package": "premium",
      "type": "video",
      "duration": 1500,
      "tags": {
        "Edifying": 10,
        "Faith Building": 1,
        "Empowering": 1,
        "Mind Changing": 1,
        "Inspiring": 2,
        "Healing": 1,
        "Heartening": 2,
        "Thought Provoking": 1,
        "Useful": 1,
        "Uplifting": 3,
        "Joyful": 2,
        "Enlightening": 1,
        "Refreshing": 2,
        "Comforting": 2,
        "Hopeful": 2,
        "Calming": 1,
        "Encouraging": 1,
        "Timeless": 1,
        "Humorous": 1,
        "Visionary": 1
      }
    },
    {
      "fileName": "791111.m4v",
      "title": "No More Stress Or Tension",
      "date": moment().format('MMMM Do YYYY'),
      "description": "We have available to us the greatest scientist in stress reduction the world has ever known. And He once said, “ Peace I leave with you, My peace I give to you, not as the world gives do I give to you. Let not your heart be troubled, neither let it be afraid.” NVP says, “The magic of those words have already created peace in your mind, as you hear them.”",
      "bibleVerse": "John 14:27, 16:33, Philippians 4:7",
      "bibleVerseText": "14:27) Peace I leave with you; my peace I give to you; I do not give it to you as the world does. Do not let your hearts be distressed or lacking in courage.  4:7) And the peace of God that surpasses all understanding will guard your hearts and minds in Christ Jesus.",
      "package": "premium",
      "type": "video",
      "duration": 1500,
      "tags": {
        "Relaxing": 10,
        "Mind Changing": 2,
        "Liberating": 1,
        "Thought Provoking": 1,
        "Empowering": 1,
        "Refreshing": 1,
        "Fresh": 1,
        "Comforting": 2,
        "Calming": 0
      }
    },
    {
      "fileName": "791021.m4v",
      "title": "Stop Worrying And Start Living",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale tells us that there is only one thought that is more powerful than fear and worry and that is faith. The only way you can keep fear out and eliminate worry is to fill your mind with powerful and dynamic faith thoughts. Dr. Peale says that if we will do this, “I guarantee that you will never be disturbed by a worry thought again.”",
      "bibleVerse": "Isaiah 41:13, Psalm 23:4",
      "bibleVerseText": "41:13) For I am the Lord your God, the one who takes hold of your right hand, who says to you, ‘Don’t be afraid, I am helping you.’ --  23:4) Even when I must walk through the darkest valley, I fear no danger, for you are with me; your rod and your staff reassure me.",
      "package": "premium",
      "type": "video",
      "duration": 1500,
      "tags": {
        "Humorous": 10,
        "Encouraging": 1,
        "Hopeful": 0,
        "Useful": 2,
        "Faith Building": 1,
        "Empowering": 1
      }
    },
    {
      "fileName": "790603.m4v",
      "title": "Let Positive Thinking Work For You",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale tells us that one way to do something great with this life is to let positive thinking work for you. Positive thinking is the opposite of negative thinking, but the best way to describe it is to describe a positive thinker. A positive thinker is one who is tough and rugged mentally. They see every difficulty but are never abashed or defeated by them because they know that with the help of the good God they can overcome them all.",
      "bibleVerse": "Romans 8:3, Matthew 18:19-20",
      "bibleVerseText": "8:3) For God achieved what the law could not do because it was weakened through the flesh. By sending his own Son in the likeness of sinful flesh and concerning sin, he condemned sin in the flesh, --  18:19) Again, I tell you the truth, if two of you on earth agree about whatever you ask, my Father in heaven will do it for you. 20) For where two or three are assembled in my name, I am there among them.”",
      "package": "premium",
      "type": "video",
      "duration": 1500,
      "tags": {
        "Empowering": 11,
        "Energizing": 1,
        "Humorous": 0,
        "Faith Building": 1,
        "Enlightening": 2
      }
    },
    {
      "fileName": "790506.m4v",
      "title": "How To Keep Enthusiasm Going",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale quotes Emerson who said, “Nothing great has ever been accomplished without enthusiasm.” NVP tells us that we can keep enthusiasm going all our lives no matter how long our lives may be, provided we have some enthusiasm to begin with. We can have an in depth enthusiasm that will stay with us all our lives and never erode. He shares the stories of some who have found this enthusiasm and how to get it.",
      "bibleVerse": "Ephesians 4:23",
      "bibleVerseText": "4:23) to be renewed in the spirit of your mind,",
      "package": "premium",
      "type": "video",
      "duration": 1500,
      "tags": {
        "Visionary": 1,
        "Useful": 1,
        "Calming": 1,
        "Timeless": 1,
        "Thought Provoking": 1,
        "Refreshing": 1,
        "Healing": 1,
        "Energizing": 11,
        "Uplifting": 1,
        "Humorous": 1,
        "Encouraging": 1,
        "Empowering": 1,
        "Comforting": 2,
        "Faith Building": 1,
        "Enlightening": 2,
        "Fresh": 2,
        "Hopeful": 1,
        "Inspiring": 1
      }
    },
    {
      "fileName": "790401.m4v",
      "title": "How To Live Life And Love It",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale tells us there is one sure thing in this life, you have to live as long as you are alive. So you might as well love life while you live it. That is another fact. But the most exciting fact is this; if you love life, life will love you back.  Here NVP shares stories of people who did just that and gives several suggestions on how we can do the same.",
      "bibleVerse": "John 1:4, Psalm 8: 3-5",
      "bibleVerseText": "1:4) In him was life, and the life was the light of mankind. --  8:3) When I look up at the heavens, which your fingers made, and see the moon and the stars, which you set in place, 4) Of what importance is the human race, that you should notice them? Of what importance is mankind, that you should pay attention to them, 5) and make them a little less than the heavenly beings? You grant mankind honor and majesty;",
      "package": "premium",
      "type": "video",
      "duration": 1500,
      "tags": {
        "Useful": 10,
        "Hopeful": 1,
        "Liberating": 1,
        "Inspiring": 1
      }
    },
    {
      "fileName": "790225.m4v",
      "title": "Drop The Hopeless Idea",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale tells us that all of us have felt hopeless at one time or another. But, he says, “Right away we suggest that it is possible to drop the hopeless idea because it is entirely unnecessary.” We can do this NVP tells us by remembering the words contained in Luke 24:49,“ …be endued with power from on high.” If we do we need never feel hopeless.",
      "bibleVerse": "Luke 24:49",
      "bibleVerseText": "24:49) And look, I am sending you what my Father promised. But stay in the city until you have been clothed with power from on high.”",
      "package": "premium",
      "type": "video",
      "duration": 1500,
      "tags": {
        "Empowering": 10,
        "Humorous": 1,
        "Enlightening": 1,
        "Encouraging": 1,
        "Inspiring": 2,
        "Healing": 0,
        "Hopeful": 1,
        "Energizing": 2,
        "Calming": 1,
        "Heartening": 5,
        "Fresh": 1,
        "Joyful": 1,
        "Thought Provoking": 1
      }
    },
    {
      "fileName": "790128.m4v",
      "title": "Secret Of Self-Confidence",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale tells us, that we can live with self confidence on the basis of Philippians 4:13 which states, “I can do all things through Christ Who strengthens me.” This is one of the greatest statements in the Bible. NVP says, “When you come right down to it, the thing that pulls people out of depression and negativism is the power of God.” Nothing in this world is equal to the power of God when it really gets operating in human beings. Dr. Peale shares several stories, including a personal one that illustrate this fact.",
      "bibleVerse": "Philippians 4:13, Psalm 127:2",
      "bibleVerseText": "4:13) I am able to do all things through the one who strengthens me. --  127:2) It is vain for you to rise early, come home late, and work so hard for your food. Yes, he can provide for those whom he loves even when they sleep.",
      "package": "premium",
      "type": "video",
      "duration": 1500,
      "tags": {
        "Encouraging": 11,
        "Mind Changing": 2,
        "Heartening": 2,
        "Useful": 1,
        "Faith Building": 2,
        "Hopeful": 1,
        "Empowering": 1,
        "Inspiring": 1,
        "Liberating": 1,
        "Visionary": 1,
        "Thought Provoking": 1
      }
    },
    {
      "fileName": "781203.m4v",
      "title": "On Top Of Your Problems",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale says that one of the smartest ways to outwit a problem is to help someone else with their problem because it takes your mind off your own and gives you the satisfaction of knowing you’re helping someone else. When you return to your problem, somehow it doesn’t seem as bad as it was when you started. He says, “Christianity and practical matters go together. Trust the Lord and He will bring it to pass and get you on top of the problem.”",
      "bibleVerse": "Psalm 37:5, I Peter 5:6, I Corinthians 10:13, Psalm 118:24",
      "bibleVerseText": "37:5) Commit your future to the Lord! Trust in him, and he will act on your behalf. --  5:6) And God will exalt you in due time, if you humble yourselves under his mighty hand --  10:13) No trial has overtaken you that is not faced by others. And God is faithful: He will not let you be tried beyond what you are able to bear, but with the trial will also provide a way out so that you may be able to endure it. --  118:24) This is the day the Lord has brought about. We will be happy and rejoice in it.",
      "package": "premium",
      "type": "video",
      "duration": 1500,
      "tags": {
        "Useful": 10,
        "Enlightening": 1
      }
    },
    {
      "fileName": "781022.m4v",
      "title": "Enthusiasm Makes Life Exciting",
      "date": moment().format('MMMM Do YYYY'),
      "description": "John 10:10 says, “I have come that they might have life, life in all its fullness.” Dr. Peale asks, “Do you have life in all its fullness? I you haven’t that’s too bad. But something can happen right now that will make you so enthusiastic and excited that you will have life in all its fullness.” One thing that is important in having a life of this quality is to turn your life over to God and let Him do what He wants with it. NVP shares the stories of those who have done this and found enthusiasm and excitement in life.",
      "bibleVerse": "John 10:10",
      "bibleVerseText": "10:10) The thief comes only to steal and kill and destroy; I have come so that they may have life, and may have it abundantly.",
      "package": "premium",
      "type": "video",
      "duration": 1500,
      "tags": {
        "Uplifting": 1,
        "Fresh": 1,
        "Heartening": 3,
        "Faith Building": 2,
        "Empowering": 0,
        "Encouraging": 0,
        "Enlightening": 1,
        "Energizing": 1,
        "Healing": 2,
        "Refreshing": 1
      }
    },
    {
      "fileName": "780409.m4v",
      "title": "How To Develop Real Self Confidence",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale tells us to develop real self-confidence one must build up a body of faith in one’s mind. Ultimately your mind will always give back what you’ve given it. If you constantly read the Bible and associate with spiritual people, you will build such a power in your mind that no matter what crisis may develop, you will be equal to it.",
      "bibleVerse": "Matthew 25:13, Proverbs 2:7, Psalm 27:3, Genesis 26:24, John 14:27",
      "bibleVerseText": "25:13) Therefore stay alert, because you do not know the day or the hour. --  2:7) He stores up effective counsel for the upright, and is like a shield for those who live with integrity, --  27:3) Even when an army is deployed against me, I do not fear. Even when war is imminent, I remain confident. --  26:24) The Lord appeared to him that night and said, “I am the God of your father Abraham. Do not be afraid, for I am with you. I will bless you and multiply your descendants for the sake of my servant Abraham.” --  14:27) “Peace I leave with you; my peace I give to you; I do not give it to you as the world does. Do not let your hearts be distressed or lacking in courage.",
      "package": "premium",
      "type": "video",
      "duration": 1500,
      "tags": {
        "Timeless": 10,
        "Mind Changing": 1,
        "Heartening": 1,
        "Faith Building": 1,
        "Useful": 1,
        "Hopeful": 1,
        "Empowering": 1
      }
    },
    {
      "fileName": "780129.m4v",
      "title": "The Tremendous Power Of Enthusiasm",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale says there is one thing that everyone wants and that is to live, really live in all of its fullness. Enthusiasm is life and vitality, in fact the Greek has it that its God in us. It will give you what it takes to overcome failure and ay defeat. NVP says the way to get this enthusiasm is revealed in Ephesians 4:23, “Be ye renewed in the spirit of your mind.” He shares some stories of those who have done this,",
      "bibleVerse": "Ephesians 4:23, John 10:10, Romans 6:4, Psalm 118:24, Philippians 4:20, John15:3",
      "bibleVerseText": "4:23) to be renewed in the spirit of your mind, --  10:10) The thief comes only to steal and kill and destroy; I have come so that they may have life, and may have it abundantly. --  6:4) Therefore we have been buried with him through baptism into death, in order that just as Christ was raised from the dead through the glory of the Father, so we too may live a new life. --  118:24) This is the day the Lord has brought about. We will be happy and rejoice in it. --  4:20) May glory be given to God our Father forever and ever. Amen. -- ",
      "package": "premium",
      "type": "video",
      "duration": 1500,
      "tags": {
        "Energizing": 10,
        "Heartening": 1
      }
    },
    {
      "fileName": "771218.m4v",
      "title": "Work Faith And Watch It Work",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale says that Christianity is a science and the church is its laboratory. He thinks that Jesus Christ was the greatest thinker that ever lived. He was a scientist because He laid out formulas that will work when they are worked under appropriate circumstances all the time. Christianity is a workable science. NVP goes on to give us some of those formulas and how to work them.",
      "bibleVerse": "John 15:12, Matthew 17:20",
      "bibleVerseText": "15:12) My commandment is this: Love each other as I have loved you. --  17:20) He told them, “It was because of your little faith. I tell you the truth, if you have faith the size of a mustard seed, you will say to this mountain, ‘Move from here to there,’ and it will move; nothing will be impossible for you.”",
      "package": "premium",
      "type": "video",
      "duration": 1500,
      "tags": {
        "Informative": 10,
        "Empowering": 1,
        "Calming": 1,
        "Comforting": 1,
        "Enlightening": 1,
        "Encouraging": 1,
        "Energizing": 1
      }
    },
    {
      "fileName": "750116.mp3",
      "title": "You Can Have A Wonderful Life",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale explains that to have a wonderful life we must eliminate all antipathy, grudges, jealousy and resentment. We must get a mind and heart full of love and kindness as Jesus had.",
      "bibleVerse": "John 10:10, I Corinthians 13:13",
      "bibleVerseText": "10:10) The thief comes only to steal and kill and destroy; I have come so that they may have life, and may have it abundantly. --  13:13) And now these three remain: faith, hope, and love. But the greatest of these is love.",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Inspirational": 10,
        "Hopeful": 3
      }
    },
    {
      "fileName": "750209.mp3",
      "title": "Seven Words Can Change Your Life",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale shares how he feels that words are alive. He believes that the seven greatest words in the English language are, “I can do all things through Christ…” (Philippians 4:13)",
      "bibleVerse": "Philippians 4:13, Matthew 18:3",
      "bibleVerseText": "4:13) I am able to do all things through the one who strengthens me. --  18:3) and said, “I tell you the truth, unless you turn around and become like little children, you will never enter the kingdom of heaven!",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Empowering": 11,
        "Useful": 1,
        "Calming": 1
      }
    },
    {
      "fileName": "750323.mp3",
      "title": "Victory Over Defeat",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale states that if you go the whole way with Jesus Christ you can develop an inner power that nothing can overcome. A child of God can defeat the world through their faith.",
      "bibleVerse": "I John 5:4, Daniel 5:25",
      "bibleVerseText": "5:4) because everyone who has been fathered by God conquers the world.This is the conquering power that has conquered the world: our faith. --  5:25) This is the writing that was inscribed: MENE, MENE, TEQEL, and PHARSIN.",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Empowering": 10
      }
    },
    {
      "fileName": "750420.mp3",
      "title": "Drop Those Tired Gloomy Thoughts, Come Alive",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale tells that to banish gloom we should practice being “underwhelmed,” we should stop being overwhelmed, which only creates panic. We need to de-emotionalize, keep cool, think and pray.",
      "bibleVerse": "Isaiah 30:15",
      "bibleVerseText": "30:15) For this is what the master, the Lord, the Holy One of Israel says: “If you repented and patiently waited for me, you would be delivered; if you calmly trusted in me you would find strength, but you are unwilling.",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Encouraging": 14,
        "Healing": 1,
        "Faith Building": 3,
        "Heartening": 2,
        "Energizing": 2,
        "Liberating": 3,
        "Useful": 3,
        "Mind Changing": 3,
        "Inspiring": 3,
        "Visionary": 1,
        "Refreshing": 1,
        "Uplifting": 2,
        "Empowering": 1,
        "Thought Provoking": 1
      }
    },
    {
      "fileName": "750427.mp3",
      "title": "Strong Faith Always Wins Over Difficulty",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale shares that one way to a strong faith is by application of organized, scientific Christianity. By scientific Christianity he means that it is filled with procedures and formulas which when followed will work in an astounding manner.",
      "bibleVerse": "Isaiah 58:9, Matthew 18:20",
      "bibleVerseText": "58:9) Then you will call out, and the Lord will respond; you will cry out, and he will reply, ‘Here I am.’ You must remove the burdensome yoke from among you and stop pointing fingers and speaking sinfully. --  18:20) For where two or three are assembled in my name, I am there among them.”",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Faith building": 10,
        "Heartening": 1,
        "Informative": 1,
        "Faith Building": 1,
        "Empowering": 1
      }
    },
    {
      "fileName": "750504.mp3",
      "title": "How To Improve Your Present Situation",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale shares the story of a young man who came to him for help after a speech he had made. He was a tall young man, at least 6’2” but was slumped over, chin on chest, looking sad. Dr. Peale told him to stand up straight and he felt better. Dr. Peale gives the following formula for feeling sad; Stand tall physically. Stand tall mentally. Stand tall spiritually.",
      "bibleVerse": "Job 22:23, Philippians 4:7",
      "bibleVerseText": "22:23) If you return to the Almighty, you will be built up; if you remove wicked behavior far from your tent, --  4:7) And the peace of God that surpasses all understanding will guard your hearts and minds in Christ Jesus.",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Uplifting": 10,
        "Liberating": 1,
        "Encouraging": 1,
        "Faith Building": 1
      }
    },
    {
      "fileName": "750518.mp3",
      "title": "Let The Law Of Supply Work For You",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale says that to have a full and meaningful life, let the Law of Supply work for you. God has given His abundance to the universe; we must think in terms of abundance, rather than limitation. Never think in terms of lack; think abundance.",
      "bibleVerse": "John 10:10, Matthew 21:22",
      "bibleVerseText": "10:10) The thief comes only to steal and kill and destroy; I have come so that they may have life, and may have it abundantly. --  21:22) And whatever you ask in prayer, if you believe, you will receive.”",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Empowering": 11,
        "Inspiring": 2,
        "Humorous": 1,
        "Healing": 1,
        "Fresh": 1,
        "Hopeful": 1,
        "Faith Building": 2,
        "Mind Changing": 1,
        "Timeless": 1,
        "Uplifting": 0,
        "Enlightening": 1
      }
    },
    {
      "fileName": "750525.mp3",
      "title": "Thought Power For Successful Living",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale tells how William James, often considered the father of American psychology said, “The greatest discovery of my generation is that human beings can alter their lives by altering their attitude of mind.” Proverbs 23:7 says that an individual is what he thinks about in their heart. Dr. Peale tells his listeners how great they are, greater than they ever conceived of, they have thought power.",
      "bibleVerse": "Proverbs 23:7, Luke 9:27",
      "bibleVerseText": "23:7) for he is like someone calculating the cost in his mind. “Eat and drink,” he says to you, but his heart is not with you; --  9:27) But I tell you most certainly, there are some standing here who will not experience death before they see the kingdom of God.”",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Inspiring": 10
      }
    },
    {
      "fileName": "750921.mp3",
      "title": "Keep It Going",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale says, you can keep your faith, inspiration, enthusiasm and courage going. Know that you can’t have a difficulty that is too hard for God to handle. People let themselves become overwhelmed by problems, faith in God is the answer.",
      "bibleVerse": "Job 22:29, John 14:12, Matthew 17:20",
      "bibleVerseText": "22:29) When people are brought low and you say ‘Lift them up!’ then he will save the downcast; --  14:12) I tell you the solemn truth, the person who believes in me will perform the miraculous deeds that I am doing, and will perform greater deeds than these, because I am going to the Father. --  17:20) He told them, “It was because of your little faith. I tell you the truth, if you have faith the size of a mustard seed, you will say to this mountain, ‘Move from here to there,’ and it will move; nothing will be impossible for you.”",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Faith building": 10,
        "Enlightening": 2,
        "Inspiring": 1
      }
    },
    {
      "fileName": "751109.mp3",
      "title": "Vibrant New Life Principle",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale tells us that our lives can be fabulous, terrific, if we get the vibrant life principle. One of the Christian faith’s great purposes is to bring people vibrantly alive. Dr. Peale shares the two elements of the vibrant life principle, excitement and adequacy.",
      "bibleVerse": "John 10:10, Romans 6:4",
      "bibleVerseText": "10:10) The thief comes only to steal and kill and destroy; I have come so that they may have life, and may have it abundantly. --  6:4) Therefore we have been buried with him through baptism into death, in order that just as Christ was raised from the dead through the glory of the Father, so we too may live a new life.",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Uplifting": 10
      }
    },
    {
      "fileName": "760208.mp3",
      "title": "Away With Worry and Anxiety",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale tells how to overcome worry and fear by two methods. First by common sense, he tells the story of a man who overcame fear by writing down the anagram for fear; False, Evidence, Appearing, to be Real. Dr. Peale also found that to get rid of worry, you must get rid of tension. Tension can be overcome by meditation.",
      "bibleVerse": "Psalm 34:4, Philippians 4:6",
      "bibleVerseText": "34:4) I sought the Lord’s help and he answered me; he delivered me from all my fears. --  4:6) Do not be anxious about anything. Instead, in every situation, through prayer and petition with thanksgiving, tell your requests to God.",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Comforting": 14,
        "Uplifting": 3,
        "Heartening": 2,
        "Informative": 2,
        "Healing": 2,
        "Encouraging": 4,
        "Energizing": 3,
        "Mind Changing": 4,
        "Hopeful": 2,
        "Thought Provoking": 1,
        "Liberating": 2,
        "Enlightening": 2,
        "Inspiring": 5,
        "Fresh": 2,
        "Joyful": 1,
        "Faith Building": 3,
        "Calming": 3,
        "Humorous": 1,
        "Timeless": 1
      }
    },
    {
      "fileName": "760229.mp3",
      "title": "How To Release Your Greater Potential",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale says that deep within us we have a fund of strength, thought and ability. One great purpose of the Christian religion is to tell us to become what we really are capable of being. Dr. Peale saw a sign on the wall of an office in Hong Kong, from John I 3:2 which said, “Called to become what we are.” To attain our full potential, we need an image of ourselves as what we want to be.",
      "bibleVerse": "I John 3:2, Philippians 4:13",
      "bibleVerseText": "3:2) Dear friends, we are God’s children now, and what we will be has not yet been revealed. We know that whenever it is revealed we will be like him, because we will see him just as he is. --  4:13) I am able to do all things through the one who strengthens me.",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Empowering": 11,
        "Thought Provoking": 1,
        "Healing": 0,
        "Energizing": 1
      }
    },
    {
      "fileName": "760606.mp3",
      "title": "Keep Enthusiasm Going Strong",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale tells us that if we keep enthusiasm going strong, we will keep going strong. He reminds us that Henry David Thoreau said, “None are so old as those who have out grown enthusiasm.” When we were created something great called the “Life Force” was built into us and it is what keeps us moving forward.",
      "bibleVerse": "Ephesians 5:8",
      "bibleVerseText": "5:8) for you were at one time darkness, but now you are light in the Lord. Walk as children of the light ;",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Uplifting": 10,
        "Energizing": 1,
        "Heartening": 1
      }
    },
    {
      "fileName": "760919.mp3",
      "title": "The Positive Principle Today",
      "date": moment().format('MMMM Do YYYY'),
      "description": "The message that Christianity gives us is that we may have power over all situations and ourselves. However people everywhere are overcome by circumstances or difficulties that saps their enthusiasm. When your enthusiasm leaks away and your faith weakens, get closer to God, and you will have more faith in yourself.",
      "bibleVerse": "Acts 1:8, Philippians 4:13",
      "bibleVerseText": "1:8) But you will receive power when the Holy Spirit has come upon you, and you will be my witnesses in Jerusalem, and in all Judea and Samaria, and to the farthest parts of the earth.” --  4:13) I am able to do all things through the one who strengthens me.",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Empowering": 10,
        "Encouraging": 1,
        "Humorous": 1
      }
    },
    {
      "fileName": "761017.mp3",
      "title": "Secret Of Exciting Life Style",
      "date": moment().format('MMMM Do YYYY'),
      "description": "The life that is in Christ is the most exciting life style known to man. Dr. Peale shares that scripture tells us how to have an exciting life style. First, in order to have an exciting life style, practice being excited. Second, learn to walk away from failure and the mistakes of yesterday. Philippians 3:13-14 says, “Forgetting those things which are behind, and reaching forth to those things which are before, I press toward the mark of the prize of the high calling of God in Christ Jesus.” Get excited about life and walk away from your yesterdays. You can have an exciting life style through Christ.",
      "bibleVerse": "Philippians 3:13-14",
      "bibleVerseText": "3:13) Brothers and sisters, I do not consider myself to have attained this. Instead I am single-minded: Forgetting the things that are behind and reaching out for the things that are ahead, 14) with this goal in mind, I strive toward the prize of the upward call of God in Christ Jesus.",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Stimulating": 10,
        "Mind Changing": 1,
        "Empowering": 1,
        "Enlightening": 1
      }
    },
    {
      "fileName": "761024.mp3",
      "title": "Always Good Days Ahead",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale tells us that we will have good days ahead if we will believe, think, image, work and pray for them and walk with the Lord. Christianity is a scientific way of life. The New Testament in filled with formulas. He shares the story of one man that came to Marble Collegiate Church who when he committed his life to Christ felt the wrongness leaving him and rightness taking over. Things started going right for him and he decided to go with “the greatest scientist in living,” whoever taught human beings.",
      "bibleVerse": "Psalm 23:6",
      "bibleVerseText": "23:6) Surely your goodness and faithfulness will pursue me all my days, and I will live in the Lord’s house for the rest of my life.",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Instructional": 10,
        "Visionary": 1,
        "Empowering": 4,
        "Inspiring": 3,
        "Healing": 4,
        "Hopeful": 4,
        "Heartening": 3,
        "Energizing": 4,
        "Encouraging": 7,
        "Faith Building": 6,
        "Humorous": 3,
        "Fresh": 2,
        "Enlightening": 3,
        "Joyful": 3,
        "Useful": 5,
        "Timeless": 2,
        "Informative": 2,
        "Mind Changing": 2,
        "Calming": 4,
        "Comforting": 2,
        "Liberating": 1,
        "Refreshing": 1,
        "Uplifting": 1,
        "Thought Provoking": 1
      }
    },
    {
      "fileName": "761114.mp3",
      "title": "How To Shake Off Discouragement",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale shares that you can shake off depressive thoughts and handle any situation because you are a creation of almighty God. Philippians 4: 13 says, “I can do all things through Christ Who strengthens me.” You can get rid of discouragement unless you want to hang on to it. One way is to be quiet and face it. He quotes Robert Louis Stevenson, “Quiet minds cannot be perplexed or frightened but go on in fortune and misfortune like the ticking of a clock during a thunderstorm.” Never panic, be calm, think. Never dramatize the situation. Affirm quietly that with God’s help you can handle any situation.",
      "bibleVerse": "Philippians 4:13, I Kings 19:12, Isaiah 30:15, Philippians 4:7",
      "bibleVerseText": "4:13) I am able to do all things through the one who strengthens me. --  19:12) After the earthquake, there was a fire, but the Lord was not in the fire. After the fire, there was a soft whisper. --  30:15) For this is what the master, the Lord, the Holy One of Israel says: “If you repented and patiently waited for me, you would be delivered; if you calmly trusted in me you would find strength, but you are unwilling. --  4:7) And the peace of God that surpasses all understanding will guard your hearts and minds in Christ Jesus.",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Soothing": 10,
        "Hopeful": 1,
        "Informative": 1,
        "Uplifting": 2,
        "Encouraging": 2,
        "Timeless": 1,
        "Comforting": 1,
        "Empowering": 1,
        "Joyful": 1,
        "Faith Building": 1,
        "Inspiring": 1,
        "Refreshing": 1
      }
    },
    {
      "fileName": "761107.mp3",
      "title": "Try Prayer Power – It Works",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale tells us, everyone wants wonderful things to happen in life and to have power over difficulties. The church has been called the place of the “solved problem.”   James 5:16 says, “The effectual fervent prayer of a righteous man availeth much.” Prayer is a real and practical scientific methodology by which an individual makes contact with the mind of God, from Whom all power and grace flow.",
      "bibleVerse": "James 5:16",
      "bibleVerseText": "5:16) So confess your sins to one another and pray for one another so that you may be healed. The prayer of a righteous person has great effectiveness.",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Hopeful": 1,
        "Calming": 1,
        "Healing": 1,
        "Empowering": 1,
        "Humorous": 1,
        "Heartening": 11,
        "Comforting": 2,
        "Faith Building": 1
      }
    },
    {
      "fileName": "761205.mp3",
      "title": "Visualize Yourself Reaching Your Goal",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale asks, “Do you have a definite goal in life?’ A life without a goal is like an airplane without a destination. Bot will run out of gas and come to no good end. We become what we image ourselves to be. You’re never to old to have a goal. At a press conference one day a young reporter asked NVP what, at his age, was his goal. The answer was, “To win by whatever process, all the people that I can in my lifetime to accept Jesus Christ, our Lord as their personal Savior.” The young reporter said, “I believe that you’ll do that.”",
      "bibleVerse": "Matthew 10:39",
      "bibleVerseText": "10:39) Whoever finds his life will lose it, and whoever loses his life because of me will find it.",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Illuminating": 10,
        "Inspiring": 1,
        "Timeless": 1,
        "Thought Provoking": 1
      }
    },
    {
      "fileName": "761212.mp3",
      "title": "An Everyday Positive Thinking Program",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale asks, “Have you ever asked yourself how your life is going to come out?”  To make the most of it you should try to handle one day at a time. Dr. Peale shares the words of Horatio Alger Award recipient George Mardikian, “Put good into the day, Speak the good word of it. Believe in it and give it all you have and above all walk everyday with Jesus.” This is a positive think program with power.",
      "bibleVerse": "Psalm 118:24, Psalm 127:2",
      "bibleVerseText": "118:24) This is the day the Lord has brought about. We will be happy and rejoice in it. --  127:2) It is vain for you to rise early, come home late, and work so hard for your food. Yes, he can provide for those whom he loves even when they sleep.",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Enlightening": 1,
        "Faith Building": 7,
        "Empowering": 12,
        "Healing": 1,
        "Encouraging": 2,
        "Calming": 2,
        "Uplifting": 0,
        "Visionary": 0,
        "Energizing": 1,
        "Mind Changing": 1,
        "Refreshing": 1,
        "Hopeful": 0,
        "Comforting": 1
      }
    },
    {
      "fileName": "770123.mp3",
      "title": "Never Bored Always Excited",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale tells us, “You never need to be bored. You can live a life filled with zest and excitement.” Many people collect objects such as statues and snuff boxes, but NVP’s hobby is collecting people. He recalls a businessman who, though retired, is dynamic and filled with life. He gets up early and stays up late because he doesn’t want to miss anything. His explanation of the source of this energy is that Jesus has regenerated him. Romans 6:4 says, “…even so we should walk in newness of life.” Get newness in your heart and mind. People are given a time and way to die, but while living should be excited and unbored.",
      "bibleVerse": "Romans 6:4,Revelation 21:4, Matthew 18:3, John 15:3",
      "bibleVerseText": "6:4) Therefore we have been buried with him through baptism into death, in order that just as Christ was raised from the dead through the glory of the Father, so we too may live a new life. --  21:4) He will wipe away every tear from their eyes, and death will not exist any more ; or mourning, or crying, or pain, for the former things have ceased to exist.” --  18:3) and said, “I tell you the truth, unless you turn around and become like little children, you will never enter the kingdom of heaven! --  15:3) You are clean already because of the word that I have spoken to you.",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Enlivening": 10,
        "Fresh": 1,
        "Encouraging": 1,
        "Hopeful": 1,
        "Healing": 1,
        "Enlightening": 1,
        "Comforting": 1,
        "Energizing": 1,
        "Inspiring": 1
      }
    },
    {
      "fileName": "770206.mp3",
      "title": "Stop Feeling Tired-Start Having Energy",
      "date": moment().format('MMMM Do YYYY'),
      "description": "NVP says that energy is the “IN” word these days. The lack of it in all forms is discussed in the news media. But he isn’t concerned about this lack, he feels peoples ingenuity will find a solution. He is more concerned with the lack of personal energy. God gave people illimitable energy, so if you are running out, it means you’ve been cut off from the source of supply. Isaiah 40:31 says “ They that wait upon the Lord shall renew their strength, they shall mount up with wings as eagles…” Dr. Peale offers a formula for putting this into practice. First think energy, secondly act energy and in the third place draw energy, if you do you will have energy.",
      "bibleVerse": "Isaiah 40:31",
      "bibleVerseText": "40:31) But those who wait for the Lord’s help find renewed strength; they rise up as if they had eagles’ wings, they run without growing weary, they walk without getting tired.",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Invigorating": 10,
        "Energizing": 0,
        "Inspiring": 1,
        "Empowering": 0,
        "Faith Building": 1
      }
    },
    {
      "fileName": "770327.mp3",
      "title": "You Can Break The Worry Habit",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale tells us that worry is a habit we acquire, we aren’t born with it. He says he preaches on worry at least twice a year because it is a pernicious disease which has been called the great modern plague. How do you get rid of the worry habit? Mark 5:36 says, “Be not afraid, only believe.” Substitute worry with faith. If you truly believe that Jesus is with you always, you’re not going to worry or be afraid.",
      "bibleVerse": "Mark 5:36",
      "bibleVerseText": "5:36) But Jesus, paying no attention to what was said, told the synagogue ruler, “Do not be afraid; just believe.”",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Comforting": 10
      }
    },
    {
      "fileName": "770403.mp3",
      "title": "Defeat? No Way, The Word Is Victory",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale tells his listeners at Marble Collegiate Church that whatever their trouble they have come to the chief power center in the world for dealing with trouble, the church of Jesus Christ. Jesus is the greatest scientist, He can enter the complexities of our lives and change them for the better. The Gospel is full of power it tells us that “As many as received Him to them He gave power…”",
      "bibleVerse": "Romans 1:16, John 1:12, Acts 1:8, Matthew 8:20",
      "bibleVerseText": "1:16) For I am not ashamed of the gospel, for it is God’s power for salvation to everyone who believes, to the Jew first and also to the Greek. --  1:12) But to all who have received him ; those who believe in his name ; he has given the right to become God’s children --  1:8) But you will receive power when the Holy Spirit has come upon you, and you will be my witnesses in Jerusalem, and in all Judea and Samaria, and to the farthest parts of the earth.” --  8:20) Jesus said to him, “Foxes have dens, and the birds in the sky have nests, but the Son of Man has no place to lay his head.”",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Timeless": 2,
        "Inspiring": 3,
        "Thought Provoking": 2,
        "Joyful": 1,
        "Liberating": 2,
        "Faith Building": 3,
        "Energizing": 1,
        "Heartening": 1,
        "Encouraging": 3,
        "Healing": 1,
        "Humorous": 1,
        "Mind Changing": 1,
        "Comforting": 2,
        "Calming": 1,
        "Uplifting": 1,
        "Visionary": 1
      }
    },
    {
      "fileName": "770612.mp3",
      "title": "You Can Have A Wonderful Life",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Progress is the law of God and therefore of a wonderful life. Dr. Peale says that, “Progress toward realizing yourself fully, to reach your full potential, peace of mind, serenity of heart and good health are key.” He tells sales conventions he speaks to that, “How you start your day sets the tone for the day. Sing in the shower, shampoo out negative thoughts.”",
      "bibleVerse": "John 10:10",
      "bibleVerseText": "10:10) The thief comes only to steal and kill and destroy; I have come so that they may have life, and may have it abundantly.",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Humorous": 10
      }
    },
    {
      "fileName": "771002.mp3",
      "title": "Formula For Health And Happiness",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale quotes Freud’s words, “The chief duty of a human being is to endure life.” NVP says, “The chief duty of a human being is to master life, to rise above it. I John 5:4 says, “This is the victory that overcomes the world…” and John 10:10 says, “I have come that they might have life and have it more abundantly.” Dr. Peale says, that is the secret of health, happiness and life itself.",
      "bibleVerse": "Leviticus 19:18, I John 5:4, John 10:10",
      "bibleVerseText": "19:18) You must not take vengeance or bear a grudge against the children of your people, but you must love your neighbor as yourself. I am the Lord. --  5:4) because everyone who has been fathered by God conquers the world.This is the conquering power that has conquered the world: our faith. --  10:10) The thief comes only to steal and kill and destroy; I have come so that they may have life, and may have it abundantly.",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Invigorating": 10,
        "Faith Building": 1,
        "Empowering": 3,
        "Uplifting": 1,
        "Encouraging": 2,
        "Energizing": 1
      }
    },
    {
      "fileName": "771009.mp3",
      "title": "The Magic Word That Makes The Difference",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale quotes William James who said, “Belief at the beginning of a doubtful undertaking is the one thing that will guarantee the success of any venture.” A believer is a tremendous person who sweeps everything before him or her because their mental attitude and grasp on life are full of power. The magic word is called, belief!",
      "bibleVerse": "Mark 9:23, Matthew 17:20",
      "bibleVerseText": "9:23) Then Jesus said to him, “‘If you are able?’ All things are possible for the one who believes.” --  17:20) He told them, “It was because of your little faith. I tell you the truth, if you have faith the size of a mustard seed, you will say to this mountain, ‘Move from here to there,’ and it will move; nothing will be impossible for you.”",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Energizing": 10,
        "Useful": 1,
        "Visionary": 1
      }
    },
    {
      "fileName": "771023.mp3",
      "title": "A Wonderful Personal Development Program",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale says when anybody really gets with Jesus Christ it does something to their mind. It makes a brilliant person out of them. If you get your life changed so that you move away from what you are to what you can become, then you enter into a power that is really tremendous. Romans 12:2 says, “Be ye transformed by the renewing of your mind.”",
      "bibleVerse": "Romans 12:2, Philippians 2:5",
      "bibleVerseText": "12:2) Do not be conformed to this present world, but be transformed by the renewing of your mind, so that you may test and approve what is the will of God ; what is good and well-pleasing and perfect. --  2:5) You should have the same attitude toward one another that Christ Jesus had,",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Empowering": 18,
        "Enlightening": 3,
        "Inspiring": 6,
        "Heartening": 4,
        "Energizing": 4,
        "Faith Building": 6,
        "Hopeful": 4,
        "Mind Changing": 4,
        "Encouraging": 6,
        "Uplifting": 2,
        "Healing": 1,
        "Humorous": 2,
        "Useful": 4,
        "Liberating": 2,
        "Thought Provoking": 2,
        "Joyful": 2,
        "Comforting": 2,
        "Fresh": 3,
        "Calming": 0,
        "Refreshing": 1
      }
    },
    {
      "fileName": "771120.mp3",
      "title": "You Can Do Something About Your Future",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale tells the story of a friend of his who was very poor as a child. He walked by the office of a big newspaper and visualized himself as editor one day. NVP says the image was formed then. He is now the editor of a big newspaper. Dr. Peale says take it up with Christ and pray about what you want to be. Get that goal into your life with Jesus and you will achieve your goals. Everyone should be motivated and visualize themselves as they want themselves.",
      "bibleVerse": "II Corinthians 2:14",
      "bibleVerseText": "2:14) But thanks be to God who always leads us in triumphal procession in Christ and who makes known through us the fragrance that consists of the knowledge of him in every place.",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Encouraging": 11,
        "Energizing": 1,
        "Faith Building": 1,
        "Hopeful": 1,
        "Informative": 1,
        "Humorous": 1,
        "Mind Changing": 1,
        "Visionary": 1,
        "Liberating": 1
      }
    },
    {
      "fileName": "771211.mp3",
      "title": "How To Handle Your Problems",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale spoke with a man before giving a speech one night. He claimed to have a life or death problem. NVP gave him three things for advice. 1.) Hang in there. 2.) The prayer-think formula. 3.) Be thankful that God has entrusted you with the responsibility of a great big tough problem. He saw the man later and he told NVP how well his advice had worked, so he made a sermon out of it.",
      "bibleVerse": "Matthew 19:26",
      "bibleVerseText": "19:26) Jesus looked at them and said, “With man this is impossible, but with God all things are possible.”",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Fresh": 1,
        "Energizing": 1,
        "Faith Building": 1,
        "Mind Changing": 0,
        "Encouraging": 1,
        "Uplifting": 1,
        "Inspiring": 1,
        "Informative": 1
      }
    },
    {
      "fileName": "780108.mp3",
      "title": "How To Keep A New Start Going",
      "date": moment().format('MMMM Do YYYY'),
      "description": "It is difficult to keep the motivation and enthusiasm of a new start going. Ezekiel 18:31 says, “Get yourselves a new heart and a new spirit.” With a new heart and a new spirit you get an objective, a purpose. And what ever that spirit is is what you will be. NVP says, “Get and objective, build it into your consciousness, feed motivation, enthusiasm and positive ideas into your  attitude. Don’t teach your consciousness negative lessons.",
      "bibleVerse": "Ezekiel 18:31",
      "bibleVerseText": "18:31) Throw away all your sins you have committed and fashion yourselves a new heart and a new spirit! Why should you die, O house of Israel?",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Enlivening": 10,
        "Healing": 0,
        "Heartening": 1,
        "Thought Provoking": 1
      }
    },
    {
      "fileName": "780115.mp3",
      "title": "Certainly Dreams Come True",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale says that God planted dreams in your heart and God makes dreams come true because He puts His Spirit in you and helps you to live. He says, “Get a goal and believe in it and trust God to help you and never let it go and you’ll attain your goal.”",
      "bibleVerse": "Ezekiel 37:5",
      "bibleVerseText": "37:5) This is what the sovereign Lord says to these bones: Look, I am about to infuse breath into you and you will live.",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Visionary": 11,
        "Energizing": 2,
        "Comforting": 2,
        "Faith Building": 3,
        "Calming": 2,
        "Healing": 4,
        "Empowering": 1,
        "Heartening": 2,
        "Enlightening": 1,
        "Useful": 1,
        "Encouraging": 2,
        "Inspiring": 1,
        "Refreshing": 2,
        "Fresh": 1
      }
    },
    {
      "fileName": "780212.mp3",
      "title": "You Can Change Things For Sure",
      "date": moment().format('MMMM Do YYYY'),
      "description": "NVP says that by the grace of God anything that needs changing can be changed. II Corinthians 5:17 says, “Therefore if anyone be in Christ they are new creature; old things have passed away; behold all things are become new.” When a person becomes new in Christ, old things, old fears, anxieties, complexes, faults and the like are passed away.  On returning to tough old situations that previously defeated one, the situation can be changed because the person is changed.",
      "bibleVerse": "II Corinthians 5:17",
      "bibleVerseText": "5:17) So then, if anyone is in Christ, he is a new creation; what is old has passed away ; look, what is new has come!",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Empowering": 10,
        "Healing": 1,
        "Encouraging": 1
      }
    },
    {
      "fileName": "780319.mp3",
      "title": "The Romance Of Victory",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale says we can stand up to any difficulty. We can stand up to any tragedy or sorrow no matter how great it is. We can reach our goals regardless of opposition and setbacks which face us. We can accomplish anything we want to if we have a mind to. The human mind is a powerful instrument. You can conquer by your mind what you can’t conquer by your body. The human mind is filled with faith and it sends out forces that activate the universe around it and that moves the universe in a positive  and victorious manner. No one should underestimate the power of the mind.",
      "bibleVerse": "I John 5:4",
      "bibleVerseText": "5:4) because everyone who has been fathered by God conquers the world.This is the conquering power that has conquered the world: our faith.",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Thought provoking": 10,
        "Empowering": 1
      }
    },
    {
      "fileName": "780430.mp3",
      "title": "An Exciting New Day Everyday",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale says that if you live to be eighty years of age you will live only 29,220 days. If you live to be ninety years of age you will live only 32,874 days, counting leap years. That is the total span of a person’s life on earth. Every day should be taken in hand and held there as very precious and valuable. NVP can’t believe that anyone could ever get bored with life. If you think bored, you’ll be bored. If you think sick, you’ll be sick. If you think weakness, you’ll be weak. Think excitement! God gave you a mind so you could think excitedly. If you think excitedly you’ll make an exciting life.",
      "bibleVerse": "Psalm 118:24",
      "bibleVerseText": "118:24) This is the day the Lord has brought about. We will be happy and rejoice in it.",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Provocative": 10,
        "Refreshing": 1,
        "Encouraging": 2,
        "Inspiring": 1,
        "Comforting": 1,
        "Faith Building": 2,
        "Heartening": 1,
        "Thought Provoking": 1,
        "Useful": 2,
        "Empowering": 1,
        "Humorous": 1,
        "Hopeful": 1,
        "Calming": 1,
        "Fresh": 1,
        "Joyful": 1
      }
    },
    {
      "fileName": "780618.mp3",
      "title": "What Positive Thinking Can Do For You",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale shares the “Law of Attraction.” Like attracts like, birds of a feather flock together. Thoughts of a kind have a natural affinity, so if you constantly send out negative thoughts, in the very nature of the case you will activate  the world around you negatively and you tend to draw back to yourself negative  thoughts and results. But, if you constantly send out positive thoughts you will activate the world around you positively and draw to yourself positive results.",
      "bibleVerse": "Philippians 4:13, Matthew 17:20",
      "bibleVerseText": "4:13) I am able to do all things through the one who strengthens me. --  17:20) He told them, “It was because of your little faith. I tell you the truth, if you have faith the size of a mustard seed, you will say to this mountain, ‘Move from here to there,’ and it will move; nothing will be impossible for you.”",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Mind changing": 10
      }
    },
    {
      "fileName": "781022.mp3",
      "title": "Enthusiasm Makes Life Exciting",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale says, John 10:10 says, “I have come that they may and that they may have it more abundantly.” A new version of the Bible gives that verse in a different way that may be even better, “ I have come that they may have life, life in all its fullness.” Do you have life in all its fullness? Something can happen to you right now that will make you so enthusiastic and excited that you will have life in all its fullness. The thing in getting a life of this quality is to turn it over to God and let Him do what he wants with it.",
      "bibleVerse": "John 10:10",
      "bibleVerseText": "10:10) The thief comes only to steal and kill and destroy; I have come so that they may have life, and may have it abundantly.",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Stimulating": 10,
        "Thought Provoking": 1,
        "Humorous": 2,
        "Mind Changing": 2,
        "Informative": 1,
        "Calming": 1,
        "Timeless": 1,
        "Uplifting": 1,
        "Useful": 2,
        "Joyful": 2,
        "Fresh": 1,
        "Comforting": 2,
        "Empowering": 3,
        "Faith Building": 2,
        "Energizing": 3,
        "Heartening": 2,
        "Encouraging": 2,
        "Hopeful": 1,
        "Refreshing": 2,
        "Liberating": 3,
        "Healing": 2,
        "Inspiring": 2,
        "Visionary": 1
      }
    },
    {
      "fileName": "781026.mp3",
      "title": "Program Yourself To Successful Living",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale says, you can program yourself for more successful living. And this is what every person should do who wants to live a more successful life. By a more successful life we mean that a person becomes a whole, well organized, well integrated individual, in control of life’s circumstances, doing his or her job with skill and an adequate amount of perfection. Dr. Peale shares a formula by which any person can achieve this level of success in life.",
      "bibleVerse": "Matthew 16:19, Luke 6:38",
      "bibleVerseText": "16:19) I will give you the keys of the kingdom of heaven. Whatever you bind on earth will have been bound in heaven, and whatever you release on earth will have been released in heaven.” --  6:38) Give, and it will be given to you: A good measure, pressed down, shaken together, running over, will be poured into your lap. For the measure you use will be the measure you receive.”",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Informative": 10,
        "Mind Changing": 0,
        "Thought Provoking": 1,
        "Encouraging": 1
      }
    },
    {
      "fileName": "781203.mp3",
      "title": "On Top Of Your Problems",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale says that the smartest way to outwit a problem is to help someone else with their problem because it takes your mind off your own and gives you the satisfaction of helping someone else. When you return to your own problem, somehow it just doesn’t seem as bad as it was when you started. Christianity and practical matters go together. Trust in the Lord and He will bring it to pass and get you on top of your problems.",
      "bibleVerse": "Psalm 37:5, I Corinthians 10:13, Psalm 118:24",
      "bibleVerseText": "37:5) Commit your future to the Lord! Trust in him, and he will act on your behalf. --  10:13) No trial has overtaken you that is not faced by others. And God is faithful: He will not let you be tried beyond what you are able to bear, but with the trial will also provide a way out so that you may be able to endure it. --  118:24) This is the day the Lord has brought about. We will be happy and rejoice in it.",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Useful": 10,
        "Comforting": 1
      }
    },
    {
      "fileName": "781217.mp3",
      "title": "Joy and Peace Always Yours",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale says that inner peace is a component of joy. Without peace there can be no joy. Without joy there can be no peace. The two of them together lead to healing, to greatness, to long life, to worthwhile life. Dr. Peale shares several stories of those who have found that peace which leads to joy. He says, Personally I’ve never been able to find it in any other place than Jesus. It is true that wondrous peace may be found in the world and its beauty. But Jesus explained that the peace of the world, while it possesses wonderful healing power, will not stay with you permanently. ‘Not as the world giveth,’ is His peace.",
      "bibleVerse": "Proverbs 17:22, John 14:27, Psalm 23:1-4",
      "bibleVerseText": "17:22) A cheerful heart brings good healing, but a crushed spirit dries up the bones. --  14:27) Peace I leave with you; my peace I give to you; I do not give it to you as the world does. Do not let your hearts be distressed or lacking in courage. --  23:1) A psalm of David. The Lord is my shepherd, I lack nothing. 2) He takes me to lush pastures, he leads me to refreshing water. 3) He restores my strength. He leads me down the right paths for the sake of his reputation. 4) Even when I must walk through the darkest valley, I fear no danger, for you are with me; your rod and your staff reassure me.",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Calming": 10,
        "Healing": 2,
        "Heartening": 1,
        "Hopeful": 1,
        "Faith Building": 2,
        "Encouraging": 2,
        "Joyful": 1,
        "Thought Provoking": 1,
        "Inspiring": 1,
        "Timeless": 1,
        "Uplifting": 1
      }
    },
    {
      "fileName": "790225.mp3",
      "title": "Drop The Hopeless Idea",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale asks, “Do you ever feel hopeless?” He says, we all must admit to having that problem at times. Even he has felt that way. But right away we suggest that it is possible to drop that hopeless idea because it is entirely unnecessary. You can deal with any situation and the formula is stated clearly and precisely in Luke 24:49, where it says, “…be endued with power from o high.” So never forget that you do not need to feel hopeless ever.",
      "bibleVerse": "Luke 24:49",
      "bibleVerseText": "24:49) And look, I am sending you what my Father promised. But stay in the city until you have been clothed with power from on high.”",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Uplifting": 2,
        "Heartening": 1,
        "Enlightening": 0,
        "Empowering": 1,
        "Fresh": 0,
        "Faith Building": 2,
        "Healing": 1,
        "Encouraging": 3,
        "Comforting": 0,
        "Calming": 0,
        "Joyful": 2,
        "Useful": 1,
        "Hopeful": 1,
        "Inspiring": 1
      }
    },
    {
      "fileName": "790304.mp3",
      "title": "You Can Be Your Best Asset",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale asks, “What kind of thoughts do you think about yourself? Do you really believe in yourself? Do you believe you can make something of yourself in this world?” The answer to all these questions is that you are your own best asset. If you really get with it and let your real self take charge, you are going to live life well. Dr. Peale shares the story of Harland Sanders and others that were their own best asset.",
      "bibleVerse": "Proverbs 8:14",
      "bibleVerseText": "8:14) Counsel and sound wisdom belong to me; I possess understanding and might.",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Encouraging": 10
      }
    },
    {
      "fileName": "790325.mp3",
      "title": "There’s Success Magic In You",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale asks, what is success? It is simply doing better than you now are. You always have room for expansion. All you need to do is bring out the great potential that is in you. Become a practitioner of the magic of believing. Dr. Peale shares the stories of Thomas Edison and others who learned to practice this magic power of belief and so became successful in life.",
      "bibleVerse": "John 1:12",
      "bibleVerseText": "1:12) But to all who have received him ; those who believe in his name ; he has given the right to become God’s children",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Inspiring": 10
      }
    },
    {
      "fileName": "790401.mp3",
      "title": "How To Live Life And Love It",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale says there is one sure thing in this life; you have to live it as long as you’re alive. That is an undisputable fact. So you might as well love life while you live it. But the most exciting fact is this: if you love life, life will love you back. In this talk Dr. Peale shares how some others have learned to love life by loving people, the beauty of the world around us and God. “Life can be great! Life can be wonderful! Life people. Love the world. Love God!”",
      "bibleVerse": "John 1:4, Psalm 8:3-5",
      "bibleVerseText": "1:4) In him was life, and the life was the light of mankind. --  8:3) When I look up at the heavens, which your fingers made, and see the moon and the stars, which you set in place, 4) Of what importance is the human race, that you should notice them? Of what importance is mankind, that you should pay attention to them, 5) and make them a little less than the heavenly beings? You grant mankind honor and majesty;",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Invigorating": 10,
        "Fresh": 1
      }
    },
    {
      "fileName": "790408.mp3",
      "title": "The Victory Road",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale asks, How would you like to find yourself firmly established on the Victory Road? What road are you traveling now? That’s a good question as you view your life. When we become established on the Victory Road we find ourselves. We become organized. We become masters of ourselves. We take control of our lives. Dr. Peale shares several stories about people who have established them selves on the Victory Road and how they did it.",
      "bibleVerse": "I John 5:4",
      "bibleVerseText": "5:4) because everyone who has been fathered by God conquers the world.This is the conquering power that has conquered the world: our faith.",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Energizing": 11,
        "Encouraging": 1,
        "Uplifting": 1
      }
    },
    {
      "fileName": "790415.mp3",
      "title": "Always New Life",
      "date": moment().format('MMMM Do YYYY'),
      "description": "In this Easter message Dr. Peale shares many scriptures that speak about eternal life. He says, “Now life is actually two sides of the same coin. There is life over there and there is life over here, and it is all in eternity. Eternity if you look it up in the dictionary, means always. So we are now in eternity, the mortal side of eternity. Our loved ones that have passed are in the immortal side of eternity.”",
      "bibleVerse": "John 14:19, John 11:25, John 14:27, Matthew 14:2",
      "bibleVerseText": "14:19) In a little while the world will not see me any longer, but you will see me; because I live, you will live too. --  11:25) Jesus said to her, “I am the resurrection and the life. The one who believes in me will live even if he dies, --  14:27) Peace I leave with you; my peace I give to you; I do not give it to you as the world does. Do not let your hearts be distressed or lacking in courage. --  14:2) and he said to his servants, “This is John the Baptist. He has been raised from the dead! And because of this, miraculous powers are at work in him.”",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Inspirational": 10,
        "Uplifting": 2,
        "Comforting": 12,
        "Energizing": 1,
        "Timeless": 1,
        "Inspiring": 2,
        "Useful": 3,
        "Faith Building": 7,
        "Fresh": 0,
        "Humorous": 1,
        "Heartening": 3,
        "Healing": 3,
        "Encouraging": 1,
        "Calming": 0,
        "Hopeful": 1,
        "Refreshing": 1,
        "Empowering": 1
      }
    },
    {
      "fileName": "790520.mp3",
      "title": "Believe You Can and You Can",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale suggests six magic words. Believe you can and you can. When you have a problem first you pray about it, then take your mind and use it. Average person uses about 10% of their mind. There are three components that can deliver power: the insights received from God, your mental power and belief. NVP shares the stories of Dave Thomas (Wendy’s) and others who have used these components to reach their goal.",
      "bibleVerse": "Mark 11:24",
      "bibleVerseText": "11:24) For this reason I tell you, whatever you pray and ask for, believe that you have received it, and it will be yours.",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Encouraging": 10,
        "Energizing": 2,
        "Inspiring": 2,
        "Thought Provoking": 3,
        "Enlightening": 0,
        "Faith Building": 2,
        "Fresh": 1,
        "Empowering": 2,
        "Hopeful": 2,
        "Heartening": 1,
        "Humorous": 1,
        "Timeless": 1,
        "Liberating": 1,
        "Useful": 2,
        "Uplifting": 2,
        "Refreshing": 1,
        "Joyful": 1
      }
    },
    {
      "fileName": "790923.mp3",
      "title": "Exciting Living For Excited People",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale quote W. A. Arnold who said, “The worst bankrupt in the world is the man who has lost his enthusiasm.” NVP says when you are out of enthusiasm you’re out of life its self. One is also bankrupt for whom life is no longer exciting. Life ought to be a perpetual thrill. NVP shares the stories of a flight attendant and Harry DeCamp about how they found and live exciting lives.",
      "bibleVerse": "Acts 17:28, II Corinthians 5:17",
      "bibleVerseText": "17:28) For in him we live and move about and exist, as even some of your own poets have said, ‘For we too are his offspring.’ --  5:17) So then, if anyone is in Christ, he is a new creation; what is old has passed away ; look, what is new has come!",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Invigorating": 10,
        "Encouraging": 2,
        "Energizing": 2,
        "Hopeful": 1,
        "Empowering": 3,
        "Healing": 1,
        "Faith Building": 1
      }
    },
    {
      "fileName": "790930.mp3",
      "title": "Positive Thinking Gets Big Results",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale says that positive thinking is a synonym for faith. All the Gospel citations above say the same thing, that if you have faith, even as a grain of mustard seed, you can move the mountains of difficulty, pain, or hardship that beset you and cast them aside. All things are possible, nothing is impossible, if you put your faith in Jesus Christ and think positively. NVP shares the stories  of several people who illustrate this.",
      "bibleVerse": "Mark 9:23, Mark 11:22-24, Matthew 17:20-21",
      "bibleVerseText": "9:23) Then Jesus said to him, “‘If you are able?’ All things are possible for the one who believes.” --  11:22) Jesus said to them, “Have faith in God. 23) I tell you the truth, if someone says to this mountain, ‘Be lifted up and thrown into the sea,’ and does not doubt in his heart but believes that what he says will happen, it will be done for him. 24) For this reason I tell you, whatever you pray and ask for, believe that you have received it, and it will be yours. --  17:20) He told them, “It was because of your little faith. I tell you the truth, if you have faith the size of a mustard seed, you will say to this mountain, ‘Move from here to there,’ and it will move; nothing will be impossible for you.” 21) [[EMPTY]]",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Encouraging": 10,
        "Mind Changing": 2,
        "Energizing": 0,
        "Empowering": 1,
        "Enlightening": 1
      }
    },
    {
      "fileName": "800309.mp3",
      "title": "You Can Win Over All Defeats",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale says that the way to win over defeat is through Jesus. We all have a load to lift sometimes and we should let the strength and power of God flow into us. NVP shares the stories of several people who have learned to use that power including Paul Anderson, Olympic gold medalist.",
      "bibleVerse": "I John 5:4, Philippians 4:13",
      "bibleVerseText": "5:4) because everyone who has been fathered by God conquers the world.This is the conquering power that has conquered the world: our faith. --  4:13) I am able to do all things through the one who strengthens me.",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Encouraging": 10,
        "Uplifting": 1
      }
    },
    {
      "fileName": "800330.mp3",
      "title": "Believe That You Can And You Can",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale says we are all endowed with the power to overcome. He tells of Mt St Helens, a volcano in the state of Washington that erupted after 123 years. The power in it had building up until it burst. People are like volcanoes, they have the power equal to any circumstances they’ll ever face.",
      "bibleVerse": "I John 5:4, I Thessalonians 5:11",
      "bibleVerseText": "5:4) because everyone who has been fathered by God conquers the world.This is the conquering power that has conquered the world: our faith. --  5:11) Therefore encourage one another and build up each other, just as you are in fact doing.",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Empowering": 13,
        "Energizing": 1,
        "Comforting": 1,
        "Healing": 2,
        "Heartening": 1,
        "Hopeful": 2,
        "Visionary": 1,
        "Uplifting": 1,
        "Inspiring": 1,
        "Useful": 2,
        "Enlightening": 2,
        "Encouraging": 1,
        "Humorous": 1,
        "Liberating": 1,
        "Calming": 1,
        "Faith Building": 1
      }
    },
    {
      "fileName": "800427.mp3",
      "title": "Life Is Good – Real Good",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale says, although some people might say that life is not good, he is here to tell them it is good. In order not to get old and stale you have to get involved in life, become part of it and it will give back in full measure. He uses the example of Jesse Owens and others who have found life is good, real good.",
      "bibleVerse": "Romans 6:4",
      "bibleVerseText": "6:4) Therefore we have been buried with him through baptism into death, in order that just as Christ was raised from the dead through the glory of the Father, so we too may live a new life.",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Invigorating": 10,
        "Humorous": 10,
        "Mind Changing": 2,
        "Empowering": 2,
        "Faith Building": 1,
        "Encouraging": 2,
        "Energizing": 1,
        "Fresh": 1,
        "Hopeful": 1,
        "Heartening": 1,
        "Inspiring": 1,
        "Liberating": 1,
        "Uplifting": 1,
        "Timeless": 1
      }
    },
    {
      "fileName": "800504.mp3",
      "title": "Let That Worry God",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale says that worry and fear are nothing but thought patterns, mental attitudes and mental attitudes can be changed and the Lord is there to help you. Dr. Peale shares the stories of the great painter Howard Chandler Christy, Lord Rank and others who have overcome worry by changing their attitude.",
      "bibleVerse": "Psalm 34:4, Isaiah 41:13, I Corinthians 13:13, Luke 9:1, Matthew 18:3",
      "bibleVerseText": "34:4) I sought the Lord’s help and he answered me; he delivered me from all my fears. --  41:13) For I am the Lord your God, the one who takes hold of your right hand, who says to you, ‘Don’t be afraid, I am helping you.’ --  13:13) And now these three remain: faith, hope, and love. But the greatest of these is love. --  9:1) After Jesus called the twelve together, he gave them power and authority over all demons and to cure diseases, --  18:3) and said, “I tell you the truth, unless you turn around and become like little children, you will never enter the kingdom of heaven!",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Calming": 10,
        "Uplifting": 1,
        "Inspiring": 1,
        "Hopeful": 1,
        "Empowering": 1
      }
    },
    {
      "fileName": "800511.mp3",
      "title": "Believe and Live Enthusiastically",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale says that when bad news comes to us so constantly by radio, television and even our public officials it can be pretty hard to take. But when you come to church you hear the good news. The word Gospel actually means, Good News. So when you come to church you will hear the Good News with which you can go out and do battle with the bad news. Dr. Peale shares several stories where the good overcame the bad as it always does in the end.",
      "bibleVerse": "John 16:33, Romans 8:31, Job 22:21",
      "bibleVerseText": "16:33) I have told you these things so that in me you may have peace. In the world you have trouble and suffering, but take courage ; I have conquered the world.” --  8:31) What then shall we say about these things? If God is for us, who can be against us? --  22:21) Reconcile yourself with God, and be at peace with him; in this way your prosperity will be good.",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Inspirational": 10,
        "Humorous": 1,
        "Informative": 1,
        "Hopeful": 1,
        "Faith Building": 1,
        "Enlightening": 0,
        "Fresh": 1,
        "Timeless": 1,
        "Thought Provoking": 1
      }
    },
    {
      "fileName": "800518.mp3",
      "title": "Positive Thinking And Successful Living",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale tells us that the negative thinker and the positive thinker send out thoughts which activate the world around them according to how they think. The Bible is the greatest positive thinking book ever written. Its full of pain, sorrow, defeat, suffering, woe and sin, but it tells how to overcome these things. By changing your thoughts you can change the way you activate the world around you.",
      "bibleVerse": "John 16:33, Mark 9:14-29, Mark 9:23, Matthew 17:20",
      "bibleVerseText": "16:33) I have told you these things so that in me you may have peace. In the world you have trouble and suffering, but take courage ; I have conquered the world.” --  9:14) When they came to the disciples, they saw a large crowd around them and experts in the law arguing with them. 15) When the whole crowd saw him, they were amazed and ran at once and greeted him. 16) He asked them, “What are you arguing about with them?” 17) A member of the crowd said to him, “Teacher, I brought you my son, who is possessed by a spirit that makes him mute. 18) Whenever it seizes him, it throws him down, and he foams at the mouth, grinds his teeth, and becomes rigid. I asked your disciples to cast it out, but they were not able to do so.” 19) He answered them, “You unbelieving generation! How much longer must I be with you? How much longer must I endure you? Bring him to me.” 20) So they brought the boy to him. When the spirit saw him, it immediately threw the boy into a convulsion. He fell on the ground and rolled around, foaming at the mouth. 21) Jesus asked his father, “How long has this been happening to him?” And he said, “From childhood. 22) It has often thrown him into fire or water to destroy him. But if you are able to do anything, have compassion on us and help us.” 23) Then Jesus said to him, “‘If you are able?’ All things are possible for the one who believes.” 24) Immediately the father of the boy cried out and said, “I believe; help my unbelief!” 25) Now when Jesus saw that a crowd was quickly gathering, he rebuked the unclean spirit, saying to it, “Mute and deaf spirit, I command you, come out of him and never enter him again.” 26) It shrieked, threw him into terrible convulsions, and came out. The boy looked so much like a corpse that many said, “He is dead!” 27) But Jesus gently took his hand and raised him to his feet, and he stood up. 28) Then, after he went into the house, his disciples asked him privately, “Why couldn’t we cast it out?” 29) He told them, “This kind can come out only by prayer.” --  9:23) Then Jesus said to him, “‘If you are able?’ All things are possible for the one who believes.” --  17:20) He told them, “It was because of your little faith. I tell you the truth, if you have faith the size of a mustard seed, you will say to this mountain, ‘Move from here to there,’ and it will move; nothing will be impossible for you.”",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Though provoking": 10,
        "Encouraging": 1,
        "Faith Building": 2,
        "Healing": 1,
        "Informative": 1
      }
    },
    {
      "fileName": "800928.mp3",
      "title": "Decide To Be Happy",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale tells us that whatever we make up our mind to be, we are going to be. Happiness is not superficial, it sometimes is obtained through peril toil and pain. NVP shares stories of Amos Parish, Harry DeCamp and others who have decided to be happy.",
      "bibleVerse": "Proverbs 16:20",
      "bibleVerseText": "16:20) The one who deals wisely in a matter will find success, and blessed is the one who trusts in the Lord.",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Uplifting": 11,
        "Mind Changing": 0,
        "Timeless": 1,
        "Hopeful": 1,
        "Visionary": 2,
        "Calming": 2,
        "Informative": 1,
        "Refreshing": 1,
        "Healing": 1,
        "Joyful": 1,
        "Heartening": 1,
        "Empowering": 1,
        "Inspiring": 0,
        "Humorous": 1
      }
    },
    {
      "fileName": "801019.mp3",
      "title": "Stand Tall And Control Your Life",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale quotes Robert McQuilkin, “If you think you can or if you think you can’t; you’re right.” Dr. Peale met a man on a bus who had read one of his sermons that had convinced him that he could go where anyone else could go as long as he put his faith in God. Dr. Peale shares several stories of those who have taken control of their lives.",
      "bibleVerse": "John 1:12",
      "bibleVerseText": "1:12) But to all who have received him ; those who believe in his name ; he has given the right to become God’s children",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Empowering": 10,
        "Energizing": 1
      }
    },
    {
      "fileName": "801026.mp3",
      "title": "You’ll Never Be The Same Again",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale says Christianity is a deep experience in the soul and in the mind where you become an absolutely different person, where life takes on new meaning like you’ve never known before. So, the experience of coming to be the kind of person who will never be the same again, is to experience Christianity in depth.",
      "bibleVerse": "Psalm 46:1-3, II Corinthians 5:17",
      "bibleVerseText": "46:1) For the music director; by the Korahites; according to the alamoth style; a song. God is our strong refuge; he is truly our helper in times of trouble. 2) For this reason we do not fear when the earth shakes, and the mountains tumble into the depths of the sea, 3) when its waves crash and foam, and the mountains shake before the surging sea. (Selah) --  5:17) So then, if anyone is in Christ, he is a new creation; what is old has passed away ; look, what is new has come!",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Inspiring": 13,
        "Refreshing": 1,
        "Timeless": 2,
        "Comforting": 1,
        "Visionary": 2,
        "Faith Building": 2,
        "Encouraging": 2,
        "Useful": 1,
        "Calming": 0,
        "Thought Provoking": 1,
        "Mind Changing": 2,
        "Empowering": 1,
        "Energizing": 1,
        "Heartening": 1
      }
    },
    {
      "fileName": "801102.mp3",
      "title": "He’s Close Enough To Talk To",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale says we all need to know that amidst the trials of this life, God is very close and we can always talk to Him. NVP shares the story about a light in an old bracket in his house that he had never seen on. So he turned it on and it lit. If you can turn on a light that has been neglected for many years just by turning a screw, you can turn God on in your life by the turning of a thought.",
      "bibleVerse": "Matthew 18:19, Luke 24:32, Hebrews 13:8, Psalm 34:4, Exodus 33:11",
      "bibleVerseText": "18:19) Again, I tell you the truth, if two of you on earth agree about whatever you ask, my Father in heaven will do it for you. --  24:32) They said to each other, “Didn’t our hearts burn within us while he was speaking with us on the road, while he was explaining the scriptures to us?” --  13:8) Jesus Christ is the same yesterday and today and forever! --  34:4) I sought the Lord’s help and he answered me; he delivered me from all my fears. --  33:11) The Lord would speak to Moses face to face, the way a person speaks to a friend. Then Moses would return to the camp, but his servant, Joshua son of Nun, a young man, did not leave the tent.",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Comforting": 11,
        "Uplifting": 1,
        "Mind Changing": 2,
        "Useful": 1,
        "Empowering": 2,
        "Calming": 1,
        "Heartening": 1,
        "Hopeful": 1
      }
    },
    {
      "fileName": "810111.mp3",
      "title": "Don’t Make Big Deals Out Of Molehills",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale says, people who believe in Jesus, who commit their lives and try to live for Him are mountain movers. They face their problems, big mountains, with faith, but small frustrating things are sometimes harder to conquer. If you think and don’t get disturbed emotionally by molehills, you can overcome them all. Dr. Peale shares the story of his friend Colonel Harland Sanders and the founding of Kentucky Fried Chicken and a second story of how he and Mrs. Peale went shopping in London to illustrate this.",
      "bibleVerse": "Matthew 21:21, Philippians 2:5",
      "bibleVerseText": "21:21) Jesus answered them, “I tell you the truth, if you have faith and do not doubt, not only will you do what was done to the fig tree, but even if you say to this mountain, ‘Be lifted up and thrown into the sea,’ it will happen. --  2:5) You should have the same attitude toward one another that Christ Jesus had,",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Inspiring": 12,
        "Informative": 10,
        "Encouraging": 5,
        "Liberating": 1,
        "Faith Building": 3,
        "Empowering": 2,
        "Energizing": 2,
        "Heartening": 1,
        "Visionary": 2,
        "Useful": 1,
        "Healing": 1,
        "Humorous": 1,
        "Fresh": 1
      }
    },
    {
      "fileName": "810118.mp3",
      "title": "The Secret Of Goal Achieving",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale says that success means fullness of personality, to be the best in your soul and to make a constructive contribution to your day and age. You must have a clearly defined goal to focus on so that it becomes the dominating objective in your life.",
      "bibleVerse": "Joshua 1:8",
      "bibleVerseText": "1:8) This law scroll must not leave your lips! You must memorize it day and night so you can carefully obey all that is written in it. Then you will prosper and be successful.",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Empowering": 10
      }
    },
    {
      "fileName": "810125.mp3",
      "title": "You Will Become What You Think",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale says that you can know what your life will be like in the future by what you think about. You can think yourself into anything. He shares the stories of Senator Max Cleland and Robert Johnson to illustrate this truth.",
      "bibleVerse": "Proverbs 23:7, John 10:10",
      "bibleVerseText": "23:7) for he is like someone calculating the cost in his mind. “Eat and drink,” he says to you, but his heart is not with you; --  10:10) The thief comes only to steal and kill and destroy; I have come so that they may have life, and may have it abundantly.",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Stimulating": 10,
        "Empowering": 1,
        "Hopeful": 1,
        "Comforting": 1,
        "Encouraging": 1,
        "Faith Building": 1,
        "Inspiring": 1,
        "Mind Changing": 1,
        "Timeless": 1,
        "Thought Provoking": 1,
        "Useful": 1,
        "Uplifting": 1
      }
    },
    {
      "fileName": "810222.mp3",
      "title": "Open Your Eyes To Opportunity",
      "date": moment().format('MMMM Do YYYY'),
      "description": "NVP says all faces cast in the image of God are beautiful. He wonders what his listeners are thinking about. It would be wise he says to open their eyes to opportunity rather than trouble or despair. He says, “If you open your eyes to opportunity for energy, vigor, fullness of life, He’s there to give it to you because He promises you life and breath and every good thing.”",
      "bibleVerse": "Acts 17:28",
      "bibleVerseText": "17:28) For in him we live and move about and exist, as even some of your own poets have said, ‘For we too are his offspring.’",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Energizing": 12,
        "Visionary": 1,
        "Refreshing": 1,
        "Mind Changing": 1,
        "Fresh": 1,
        "Heartening": 1,
        "Humorous": 1,
        "Hopeful": 1,
        "Inspiring": 1,
        "Uplifting": 1,
        "Encouraging": 1,
        "Empowering": 1
      }
    },
    {
      "fileName": "810315.mp3",
      "title": "Real Faith Works Wonders",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale says that faith works wonders because he has known people who really had it tough and their faith held them up. He shares the stories of several of these people including James Y. Brown, former Governor of Kentucky and Capt. James Cook. He concludes that faith helps people do great things in the world. Dr. Peale says, “Whatever your problem is, apply faith to it.”",
      "bibleVerse": "Mark 9:23",
      "bibleVerseText": "9:23) Then Jesus said to him, “‘If you are able?’ All things are possible for the one who believes.”",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Empowering": 10,
        "Encouraging": 10,
        "Refreshing": 0,
        "Enlightening": 1
      }
    },
    {
      "fileName": "810308.mp3",
      "title": "Stop Worrying And Get On With Your Life",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale says, “You and I were not born to worry, God sent us into the world worry free.” He explains that worry comes from the old Anglo-Saxon word “wingman which means to strangle, worry can strangle us. He explains that to prevent yourself from becoming a worrier, become a greater person of prayer and dedication and commitment to Jesus.",
      "bibleVerse": "II Timothy 1:7, Philippians 2:5",
      "bibleVerseText": "1:7) For God did not give us a Spirit of fear but of power and love and self-control. --  2:5) You should have the same attitude toward one another that Christ Jesus had,",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Faith Building": 0,
        "Hopeful": 1,
        "Humorous": 1,
        "Fresh": 1,
        "Energizing": 1,
        "Timeless": 1
      }
    },
    {
      "fileName": "811018.mp3",
      "title": "Turned On To Power",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale says we have a disease in this country called “The Three L’s,” these are, Lack, Loss and Limitation. People will tell you what they Lack, what they’ve Lost and how Limited their abilities are. But if you have faith in God in your life, nothing can defeat you.",
      "bibleVerse": "Acts 1:8",
      "bibleVerseText": "1:8) But you will receive power when the Holy Spirit has come upon you, and you will be my witnesses in Jerusalem, and in all Judea and Samaria, and to the farthest parts of the earth.”",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Empowering": 10
      }
    },
    {
      "fileName": "811025.mp3",
      "title": "Miracle Of Your Mind Power",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale says you are a miracle. The body is a miracle, every part of it, the hand, the foot, all the parts and especially the mind. He shares the story of a man that was a failure until he heard the scripture, “Let this mind be in you which was also in Christ Jesus.” This man decided he would empty out the thoughts that were not in Jesus’ mind and strive to have in him the quality and kind of character of mind that is in Jesus. Dr. Peale says, “When you have the mind of Christ in your mind, you become a believer, in Jesus, in the Bible, in our country, in yourself.”",
      "bibleVerse": "Philippians 2:5, Matthew 17:20",
      "bibleVerseText": "2:5) You should have the same attitude toward one another that Christ Jesus had, --  17:20) He told them, “It was because of your little faith. I tell you the truth, if you have faith the size of a mustard seed, you will say to this mountain, ‘Move from here to there,’ and it will move; nothing will be impossible for you.”",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Liberating": 10,
        "Visionary": 1,
        "Mind Changing": 1,
        "Refreshing": 1,
        "Energizing": 0,
        "Encouraging": 1,
        "Inspiring": 1
      }
    },
    {
      "fileName": "811108.mp3",
      "title": "Think Positively About Yourself",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale tells us that amazing things can happen to people. People get renewed, they make 180 degree turns and are different people. He shares several stories about people who have done just this, including one about a young fellow who disliked himself. He came to Marble Church and felt the dynamic atmosphere, saw the happy faces. It made his come back until he had an experience of Jesus, which changed his thought process. He came to like himself through Christ.",
      "bibleVerse": "Romans 6:4",
      "bibleVerseText": "6:4) Therefore we have been buried with him through baptism into death, in order that just as Christ was raised from the dead through the glory of the Father, so we too may live a new life.",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Encouraging": 10
      }
    },
    {
      "fileName": "820321.mp3",
      "title": "You Can Be Strong Always",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale tells of an eagle that was shot and injured in Florida. It fluttered to the ground and sat by a highway. God was watching over this eagle because an expert in Florida wildlife passed by and took the eagle and cared for it. One day it will be let go to soar again. Dr. Peale says we have eagles built into us and we suffer through difficulties and disappointments. Then the Lord speaks to us saying, “They that wait upon the Lord shall renew their strength; they shall mount up with wings as eagles.” When we face what we think may be facing the worst thing that could ever happen to us we should say to ourselves, “How can I take this worse thing that’s happening to me and make it the best thing that’s ever happened to me.”",
      "bibleVerse": "Isaiah 40:31, Hebrews 11:33-34",
      "bibleVerseText": "40:31) But those who wait for the Lord’s help find renewed strength; they rise up as if they had eagles’ wings, they run without growing weary, they walk without getting tired. --  11:33) Through faith they conquered kingdoms, administered justice, gained what was promised, shut the mouths of lions, 34) quenched raging fire, escaped the edge of the sword, gained strength in weakness, became mighty in battle, put foreign armies to flight,",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Empowering": 12,
        "Useful": 1,
        "Faith Building": 1,
        "Healing": 1,
        "Heartening": 2
      }
    },
    {
      "fileName": "820328.mp3",
      "title": "Positive Thinking And Successful Living",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale tells us Positive Thinking and successful living fit together like a hand in a glove. It is most difficult to live a successful life thinking negatively. He says, “I define successful living as to be a whole, well organized, well controlled human being.” The Bible tells us that what we are is determined by the brain, in the heart and our essence. Dr. Peale concludes To send out negative thoughts is to do a very dangerous  thing. You activate the world around you negatively. On the contrary, send out positive thoughts and you will activate the world around you positively and you will draw back to yourself positive results.",
      "bibleVerse": "Proverbs 23:7, Romans 12:2",
      "bibleVerseText": "23:7) for he is like someone calculating the cost in his mind. “Eat and drink,” he says to you, but his heart is not with you; --  12:2) Do not be conformed to this present world, but be transformed by the renewing of your mind, so that you may test and approve what is the will of God ; what is good and well-pleasing and perfect.",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Uplifting": 10,
        "Useful": 1,
        "Enlightening": 1,
        "Inspiring": 1,
        "Comforting": 1,
        "Energizing": 1,
        "Calming": 1,
        "Mind Changing": 1
      }
    },
    {
      "fileName": "820502.mp3",
      "title": "Don’t Let Anything Defeat You",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale says if you meticulously, faithfully, lovingly follow Jesus Christ, you need never be defeated by anything, because He will give you sustaining support. Dr. Peale tells the story of meeting a man in a wheel chair. He wore a tee-shirt that read “ Nothing is going to happen to me today that we can’t handle together.” NVP asked, “Who’s we?” The man responded, “It’s my heavenly Father and Jesus Christ. I’ve had it rough, but have never been defeated by anything, because the Father and Son are with me.” Dr. Peale tells us that the most powerful force isn’t just faith, its faith in Jesus, God, the Bible and the Holy Spirit.",
      "bibleVerse": "John 16:33, I John 5:4, I Timothy 6:12, Mark 9:24, Matthew 9:29",
      "bibleVerseText": "16:33) I have told you these things so that in me you may have peace. In the world you have trouble and suffering, but take courage ; I have conquered the world.” --  5:4) because everyone who has been fathered by God conquers the world.This is the conquering power that has conquered the world: our faith. --  6:12) Compete well for the faith and lay hold of that eternal life you were called for and made your good confession for in the presence of many witnesses. --  9:24) Immediately the father of the boy cried out and said, “I believe; help my unbelief!” --  9:29) Then he touched their eyes saying, “Let it be done for you according to your faith.”",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Empowering": 13,
        "Comforting": 1,
        "Encouraging": 3,
        "Inspiring": 1,
        "Faith Building": 2,
        "Energizing": 1,
        "Heartening": 2,
        "Hopeful": 3
      }
    },
    {
      "fileName": "820613.mp3",
      "title": "How To Handle Your Problems",
      "date": moment().format('MMMM Do YYYY'),
      "description": "A problem can be, and usually is, inherently good. When the Good Lord wants to give you the greatest value in this life He inserts the value in the center of a big tough problem. But even so it seems people don’t like problems. The way to handle a problem when it comes along is to think about it, study it, pray about it and then bring God into it as your partner.",
      "bibleVerse": "Philippians 4:13",
      "bibleVerseText": "4:13) I am able to do all things through the one who strengthens me.",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Thought provoking": 10,
        "Faith Building": 1,
        "Inspiring": 1,
        "Empowering": 1,
        "Encouraging": 1,
        "Heartening": 1
      }
    },
    {
      "fileName": "821010.mp3",
      "title": "The Positive Way To Change Your Life",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale tells us, we don’t need to remain as we are. We were created by Almighty God and He never made anything badly. Dr. Peale says, “If you and I haven’t achieved what He had in mind, that’s not His fault. The blame lies with us, but change also is inherent in us, He confers upon you and me authority over all problems.” He reminds us to always look ahead, life has illimitable opportunities. If you take authority from Jesus, there is no limit to what your life can be.",
      "bibleVerse": "Luke 9:1, Acts 1:8",
      "bibleVerseText": "9:1) After Jesus called the twelve together, he gave them power and authority over all demons and to cure diseases, --  1:8) But you will receive power when the Holy Spirit has come upon you, and you will be my witnesses in Jerusalem, and in all Judea and Samaria, and to the farthest parts of the earth.”",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
    },
    {
      "fileName": "821017.mp3",
      "title": "A Wonderful Key To Health",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale says, “I consider it my bound and duty to preach on the relationship between your faith and your health.” He tells us we are all imbued with a marvelous thing called the life force. Almighty God Who creates also recreates, the wonderful key to health is to maintain the life force.",
      "bibleVerse": "III John 2",
      "bibleVerseText": "1:1) From the elder, to Gaius my dear brother, whom I love in truth. 2) Dear friend, I pray that all may go well with you and that you may be in good health, just as it is well with your soul. 3) For I rejoiced greatly when the brothers came and testified to your truth, just as you are living according to the truth. 4) I have no greater joy than this: to hear that my children are living according to the truth. 5) Dear friend, you demonstrate faithfulness by whatever you do for the brothers (even though they are strangers). 6) They have testified to your love before the church. You will do well to send them on their way in a manner worthy of God. 7) For they have gone forth on behalf of “The Name,” accepting nothing from the pagans. 8) Therefore we ought to support such people, so that we become coworkers in cooperation with the truth. 9) I wrote something to the church, but Diotrephes, who loves to be first among them, does not acknowledge us. 10) Therefore, if I come, I will call attention to the deeds he is doing ; the bringing of unjustified charges against us with evil words! And not being content with that, he not only refuses to welcome the brothers himself, but hinders the people who want to do so and throws them out of the church! 11) Dear friend, do not imitate what is bad but what is good. The one who does good is of God; the one who does what is bad has not seen God. 12) Demetrius has been testified to by all, even by the truth itself. We also testify to him, and you know that our testimony is true. 13) I have many things to write to you, but I do not wish to write to you with pen and ink. 14) But I hope to see you right away, and we will speak face to face.  Peace be with you. The friends here greet you. Greet the friends there by name.",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Thoughtful": 10,
        "Humorous": 1,
        "Inspiring": 1,
        "Joyful": 2,
        "Refreshing": 1,
        "Liberating": 1,
        "Timeless": 2,
        "Useful": 3,
        "Empowering": 4,
        "Visionary": 2,
        "Enlightening": 2,
        "Fresh": 3,
        "Energizing": 5,
        "Faith Building": 4,
        "Mind Changing": 3,
        "Encouraging": 2,
        "Calming": 2,
        "Comforting": 1,
        "Healing": 4,
        "Heartening": 1
      }
    },
    {
      "fileName": "821031.mp3",
      "title": "Amazing Prosperity Plan",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Everybody would like to be successful, prosperous and happy. Dr. Peale says you spell success with four letters, GIVE. Some people think you spell it GET, but that is erroneous. If you spell it GIVE, then life will flow to you and you will GET. NVP shares the stories of several people who have discovered this amazing prosperity plan. He asks, “If you are not as successful, prosperous or happy as you ought to be, are you giving enough?”",
      "bibleVerse": "Luke 6:30, Malachi 3:10, John 10:10",
      "bibleVerseText": "6:30) Give to everyone who asks you, and do not ask for your possessions back from the person who takes them away. --  3:10) Bring the entire tithe into the storehouse so that there may be food in my temple. Test me in this matter,” says the Lord who rules over all, “to see if I will not open for you the windows of heaven and pour out for you a blessing until there is no room for it all. --  10:10) The thief comes only to steal and kill and destroy; I have come so that they may have life, and may have it abundantly.",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Calming": 0,
        "Enlightening": 12,
        "Comforting": 1,
        "Energizing": 2,
        "Inspiring": 1,
        "Heartening": 1,
        "Encouraging": 1,
        "Fresh": 1,
        "Healing": 1,
        "Informative": 1,
        "Hopeful": 1,
        "Useful": 2,
        "Faith Building": 1
      }
    },
    {
      "fileName": "821114.mp3",
      "title": "Your Built In Miracle Power",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale says you have the capacity to handle anything you will ever face in this life. He built into you wisdom, comeback power, resiliency and enormous strength. You’ve got a built in miracle power. He shares the stories of those who have used this miracle power to overcome. He says, “Think miracles instead of limitation,  defeat and what you can’t do. Don’t think about failures, think about what, by the grace of God, you can do.”",
      "bibleVerse": "Luke 13:11-13",
      "bibleVerseText": "13:11) and a woman was there who had been disabled by a spirit for eighteen years. She was bent over and could not straighten herself up completely. 12) When Jesus saw her, he called her to him and said, “Woman, you are freed from your infirmity.” 13) Then he placed his hands on her, and immediately she straightened up and praised God.",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Uplifting": 10,
        "Liberating": 1,
        "Empowering": 1,
        "Faith Building": 1,
        "Calming": 1
      }
    },
    {
      "fileName": "821121.mp3",
      "title": "How To Increase Your Self Confidence",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale says, “When you begin to put yourself down, you’re doing a very unchristian thing. Better get a better opinion of yourself.” He quotes William Shakespeare, “What a piece of work is man! How noble in reason! How infinite in faculty! In form, in moving, how express and admirable! In action how like an angel! In apprehension how like a God!” Dr. Peale tells us that the way we get a good opinion of ourselves is through our association with the One who made us.",
      "bibleVerse": "Psalm 27:1-3, Psalm 139:14",
      "bibleVerseText": "27:1) By David. The Lord delivers and vindicates me! I fear no one! The Lord protects my life! I am afraid of no one! 2) When evil men attack me to devour my flesh, when my adversaries and enemies attack me, they stumble and fall. 3) Even when an army is deployed against me, I do not fear. Even when war is imminent, I remain confident. --  139:14) I will give you thanks because your deeds are awesome and amazing. You knew me thoroughly;",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Invigorating": 10,
        "Faith Building": 2,
        "Timeless": 1,
        "Empowering": 1,
        "Energizing": 1,
        "Heartening": 1,
        "Liberating": 1,
        "Mind Changing": 1,
        "Useful": 1
      }
    },
    {
      "fileName": "821212.mp3",
      "title": "Program Your Mind To Be A Winner",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale says all people have to do is turn on the power and program their minds to be a winner. What is a winner? It is the opposite of a loser. To become a winner program your mind with the sword of the Spirit. Dr. Peale shares the stories of several who have done this including a boy from Miami, Florida who at 22 years of age was dying. He stumbled on NVP’s book, The Power Of Positive Thinking. He read it twice and put the principles to work. He accepted Jesus as Savior. He said, “The transition that took place over me that time could only be described in one way, God’s work. I stood up to life and hit it hard.” Dr. Peale says, “Get all error out of your mind, get rightness in.”",
      "bibleVerse": "I Samuel 10:6, Ephesians 6:14-17",
      "bibleVerseText": "10:6) Then the spirit of the Lord will rush upon you and you will prophesy with them. You will be changed into a different person. --  6:14) Stand firm therefore, by fastening the belt of truth around your waist, by putting on the breastplate of righteousness, 15) by fitting your feet with the preparation that comes from the good news of peace, 16) and in all of this, by taking up the shield of faith with which you can extinguish all the flaming arrows of the evil one. 17) And take the helmet of salvation and the sword of the Spirit, which is the word of God.",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Inspiring": 10,
        "Energizing": 1,
        "Thought Provoking": 1
      }
    },
    {
      "fileName": "830109.mp3",
      "title": "Does Positive Thinking Always Work?",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale says it is always an exciting experience to stand before a congregation, because out in front of you is one of the most exciting phenomenon, human faces. He tells us, “Whether I know you personally or not, I know the principle thing about you, hidden in your mind is an awesome power by which you can change your life. Where you have real faith there is a close relationship with mental organization. The more deeply you’re committed to Jesus, the more intelligently your mind functions.",
      "bibleVerse": "Matthew 17:20, Philippians 4:13, Mark 11:24",
      "bibleVerseText": "17:20) He told them, “It was because of your little faith. I tell you the truth, if you have faith the size of a mustard seed, you will say to this mountain, ‘Move from here to there,’ and it will move; nothing will be impossible for you.” --  4:13) I am able to do all things through the one who strengthens me. --  11:24) For this reason I tell you, whatever you pray and ask for, believe that you have received it, and it will be yours.",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Enlightening": 10,
        "Faith Building": 1,
        "Humorous": 2,
        "Heartening": 1,
        "Fresh": 0,
        "Hopeful": 1,
        "Uplifting": 1,
        "Liberating": 1,
        "Energizing": 1,
        "Healing": 0
      }
    },
    {
      "fileName": "830206.mp3",
      "title": "Try Happiness: It Works",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale says that in every human beings life there’s going to be trouble, but you have to have a built in buoyant readjust-ability to ride it out. NVP shares about traveling on the ship QEII. He admires how she handles a “head storm.” Always there’s built into ships something that brings them ever back up. That same thing has been built into you. You have as a gift of God a rebound quality and when you know you can rebound against anything, then you’ve tried happiness and found for sure that it works.",
      "bibleVerse": "Proverbs 17:22, Proverbs 16:20, John 15:11, Isaiah 40:31",
      "bibleVerseText": "17:22) A cheerful heart brings good healing, but a crushed spirit dries up the bones. --  16:20) The one who deals wisely in a matter will find success, and blessed is the one who trusts in the Lord. --  15:11) I have told you these things so that my joy may be in you, and your joy may be complete. --  40:31) But those who wait for the Lord’s help find renewed strength; they rise up as if they had eagles’ wings, they run without growing weary, they walk without getting tired.",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Uplifting": 10
      }
    },
    {
      "fileName": "830227.mp3",
      "title": "The Secret Of Making Things Go Well",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale tells us that if for 15 minutes every day you intensively believe in faith and with prayer together with the application of selected positive thoughts to the thing that is not going well for you, you can make it go well. The most powerful force you have is what you honestly say to God and what you honestly say to yourself and believe.",
      "bibleVerse": "Luke 21:33, John 15:12",
      "bibleVerseText": "21:33) Heaven and earth will pass away, but my words will never pass away. --  15:12) My commandment is this ; to love one another just as I have loved you.",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Informative": 10,
        "Healing": 1,
        "Encouraging": 1
      }
    },
    {
      "fileName": "830403.mp3",
      "title": "Life Is The Message",
      "date": moment().format('MMMM Do YYYY'),
      "description": "In this Easter message Dr. Peale shares the stories of Dwight Eisenhower and Alfred P. Sloane and their faith in eternal life. Dr. Peale says, “Life, vital exciting, enthusiastic, creative, joyous, exciting. That is the message of Easter. Somebody in ancient times described Christianity as the song of skylarks and the babbling of brooks.”",
      "bibleVerse": "John 14:1-3, Isaiah 49:10, Revelation 7:17, I John 5:11-13",
      "bibleVerseText": "14:1) Do not let your hearts be distressed. You believe in God; believe also in me. 2) There are many dwelling places in my Father’s house. Otherwise, I would have told you, because I am going away to make ready a place for you. 3) And if I go and make ready a place for you, I will come again and take you to be with me, so that where I am you may be too. --  49:10) They will not be hungry or thirsty; the sun’s oppressive heat will not beat down on them, for one who has compassion on them will guide them; he will lead them to springs of water. --  7:17) because the Lamb in the middle of the throne will shepherd them and lead them to springs of living water, and God will wipe away every tear from their eyes.” --  5:11) And this is the testimony: God has given us eternal life, and this life is in his Son. 12) The one who has the Son has this eternal life; the one who does not have the Son of God does not have this eternal life. 13) I have written these things to you who believe in the name of the Son of God so that you may know that you have eternal life.",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Inspiring": 10,
        "Enlightening": 1
      }
    },
    {
      "fileName": "830410.mp3",
      "title": "The Hidden Power In You",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Psychologists say the average person uses no more than twenty percent of their brain power.  Dr. Peale says that in our heads we have about three pounds of tissue, the most marvelous instrument ever created, the mind. He says that if he could begin to use twenty-five percent he’d be ranked with the greatest preachers of all time.",
      "bibleVerse": "John 1:12, Acts: 1:18",
      "bibleVerseText": "1:12) But to all who have received him ; those who believe in his name ; he has given the right to become God’s children --  1:18) to preside over the day and the night, and to separate the light from the darkness. God saw that it was good.",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Uplifting": 10,
        "Humorous": 10,
        "Empowering": 1,
        "Encouraging": 1,
        "Faith Building": 1,
        "Liberating": 1,
        "Mind Changing": 1,
        "Visionary": 1
      }
    },
    {
      "fileName": "830508.mp3",
      "title": "How To Have The Winning Spirit",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale spoke to the Louisiana State Bankers Association, where above the platform was a large banner which read, “Have the Winning Spirit.” NVP asked the man at his left what it meant. He said, “It means with God’s help you can attain your goals.” NVP asked the man on his right what it meant. He said, “Be an overcomer.” Dr. Peale reminds us of William James’ words, “The most important thing at the beginning of any enterprise is belief. Believe and you can be an overcomer.",
      "bibleVerse": "I John 5:4",
      "bibleVerseText": "5:4) because everyone who has been fathered by God conquers the world.This is the conquering power that has conquered the world: our faith.",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Uplifting": 10,
        "Timeless": 1,
        "Hopeful": 1,
        "Comforting": 1,
        "Enlightening": 1
      }
    },
    {
      "fileName": "830522.mp3",
      "title": "Happiness Can Be Yours",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Authorities have said that mental depression is a number one symptom and that 60 percent of people are unhappy most of the time. Dr. Peale explains, the Christian religion is the Gospel of happiness. He says, “They leaped for joy, that’s the way they described Christians. And they rejoiced with joy unspeakable and full of glory.” With Jesus you can be happy always.",
      "bibleVerse": "Luke 6:23, I Peter 1:8",
      "bibleVerseText": "6:23) Rejoice in that day, and jump for joy, because your reward is great in heaven. For their ancestors did the same things to the prophets. --  1:8) You have not seen him, but you love him. You do not see him now but you believe in him, and so you rejoice with an indescribable and glorious joy,",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Uplifting": 10,
        "Faith Building": 1,
        "Enlightening": 1
      }
    },
    {
      "fileName": "830605.mp3",
      "title": "Of Course You Can",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale tells us that there are four words that can change your life, they are “of course you can.” Then while you won’t be freed from difficulty, you have the spirit of overcoming. Dr. Peale shares his 10 “Of Course You Can Principles,” by which anyone can change their life and become an overcomer.",
      "bibleVerse": "Philippians 4:13, Mark 9:23, Luke 18:27",
      "bibleVerseText": "4:13) I am able to do all things through the one who strengthens me. --  9:23) Then Jesus said to him, “‘If you are able?’ All things are possible for the one who believes.” --  18:27) He replied, “What is impossible for mere humans is possible for God.”",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Empowering": 12,
        "Mind Changing": 1
      }
    },
    {
      "fileName": "831120.mp3",
      "title": "How To Be Really Happy",
      "date": moment().format('MMMM Do YYYY'),
      "bibleVerse": "Proverbs 16:20, John 13:17, John 15:11, Philippians 2:5",
      "bibleVerseText": "16:20) The one who deals wisely in a matter will find success, and blessed is the one who trusts in the Lord. --  13:17) If you understand these things, you will be blessed if you do them. --  15:11) I have told you these things so that my joy may be in you, and your joy may be complete. --  2:5) You should have the same attitude toward one another that Christ Jesus had,",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Informative": 10
      }
    },
    {
      "fileName": "840115.mp3",
      "title": "How To Add To Your Happiness",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale tells us that there are two ways to add to your happiness. One is to find yourself and the second is to find God. The Bible is the happiest document ever written. NVP says, “Christianity offers healthy mindedness, peace of mind, beautiful human relations, strength to meet crisis.”",
      "bibleVerse": "I Peter 1:8, Philippians 2:5, Philippians 4:4, John 15:11-12, John 14:27, John 11:25, Acts 1:8",
      "bibleVerseText": "1:8) You have not seen him, but you love him. You do not see him now but you believe in him, and so you rejoice with an indescribable and glorious joy, --  2:5) You should have the same attitude toward one another that Christ Jesus had, --  4:4) Rejoice in the Lord always. Again I say, rejoice! --  15:11) I have told you these things so that my joy may be in you, and your joy may be complete. 12) My commandment is this ; to love one another just as I have loved you. --  14:27) Peace I leave with you; my peace I give to you; I do not give it to you as the world does. Do not let your hearts be distressed or lacking in courage. --  11:25) Jesus said to her, “I am the resurrection and the life. The one who believes in me will live even if he dies, --  1:8) But you will receive power when the Holy Spirit has come upon you, and you will be my witnesses in Jerusalem, and in all Judea and Samaria, and to the farthest parts of the earth.”",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Uplifting": 10,
        "Hopeful": 1,
        "Faith Building": 1,
        "Joyful": 0
      }
    },
    {
      "fileName": "840122.mp3",
      "title": "A Good Health Formula That Works",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale tells us the Gospel is full of suggestions on how to be healthy. Psalm 103 says that God heals all our iniquities, then heals our diseases. He restores our youth. The thoughts that a person thinks and their spiritual attitude has a lot to do with their well being.",
      "bibleVerse": "Psalm 103:2-5",
      "bibleVerseText": "103:2) Praise the Lord, O my soul! Do not forget all his kind deeds! 3) He is the one who forgives all your sins, who heals all your diseases, 4) who delivers your life from the Pit, who crowns you with his loyal love and compassion, 5) who satisfies your life with good things, so your youth is renewed like an eagle’s.",
      "package": "base",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Beautiful": 1,
        "Helpful": 1,
        "Funny": 1,
        "Timely": 1,
        "Inspiring": 2,
        "Faith Building": 9,
        "Enlightening": 6,
        "Energizing": 8,
        "Calming": 16,
        "Mind Changing": 8,
        "Healing": 21,
        "Encouraging": 18,
        "Empowering": 15,
        "Refreshing": 3,
        "Fresh": 8,
        "Uplifting": 1,
        "Timeless": 3,
        "Hopeful": 4,
        "Thought Provoking": 5,
        "Comforting": 14,
        "Joyful": 5,
        "Humorous": 2,
        "Visionary": 2,
        "Useful": 4,
        "Heartening": 4,
        "Informative": 3,
        "Liberating": 1
      }
    },
    {
      "fileName": "840212.mp3",
      "title": "You Can Improve Your Self-Confidence",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale gives 20 words which if you take them, believe them, let them permeate your consciousness, you can walk through life and not be afraid. They are’ “I can do all things through Christ Who strengthens me.” And “If God be for us, who can be against us?”",
      "bibleVerse": "Philippians 4:13, Romans 8:31",
      "bibleVerseText": "4:13) I am able to do all things through the one who strengthens me. --  8:31) What then shall we say about these things? If God is for us, who can be against us?",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Empowering": 11,
        "Encouraging": 1,
        "Energizing": 1
      }
    },
    {
      "fileName": "840226.mp3",
      "title": "The Joy Of Life All Your Life",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale shares the stories of several people who found great joy throughout their lives through their relationship with Jesus. He shares that the New Testament in particular is the happiest, most effervescent, effulgent, triumphant book. He says, “If you haven’t got joy in full measure, go back to Jesus.”",
      "bibleVerse": "John 6:63, John 16:10, I Peter 1:8, I Peter 1:6, I Corinthians 7:4, Job 38:7",
      "bibleVerseText": "6:63) The Spirit is the one who gives life; human nature is of no help! The words that I have spoken to you are spirit and are life. --  16:10) concerning righteousness, because I am going to the Father and you will see me no longer; --  1:8) You have not seen him, but you love him. You do not see him now but you believe in him, and so you rejoice with an indescribable and glorious joy, --  1:6) This brings you great joy, although you may have to suffer for a short time in various trials. --  7:4) It is not the wife who has the rights to her own body, but the husband. In the same way, it is not the husband who has the rights to his own body, but the wife. --  38:7) when the morning stars sang in chorus, and all the sons of God shouted for joy?",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Joyful": 10,
        "Faith Building": 0,
        "Energizing": 0,
        "Fresh": 0,
        "Refreshing": 0
      }
    },
    {
      "fileName": "840304.mp3",
      "title": "With Courage You Can Handle It",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale says, “There is one thing needed by everybody and that one thing is courage. To quote an ad used by a credit card company, ‘You should never leave home without it.’” NVP shares two things necessary to have courage. One is to think big, pray big, believe big and act big. The second is to forget yourself.",
      "bibleVerse": "Joshua 1:9",
      "bibleVerseText": "1:9) I repeat, be strong and brave! Don’t be afraid and don’t panic, for I, the Lord your God, am with you in all you do.”",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Empowering": 10,
        "Mind Changing": 2
      }
    },
    {
      "fileName": "840408.mp3",
      "title": "Life Can Get Better Everyday",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale tells us that wonderful things can happen to a human being when that person is truly centered in Jesus Christ. Such a person has a revolutionary process take place in their mind. Dr. Peale shares several incidents from his personal life to illustrate this fact.",
      "bibleVerse": "II Corinthians 5:17",
      "bibleVerseText": "5:17) So then, if anyone is in Christ, he is a new creation; what is old has passed away ; look, what is new has come!",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Humorous": 10,
        "Inspiring": 10,
        "Informative": 1
      }
    },
    {
      "fileName": "840422.mp3",
      "title": "Eternal Life Is Now",
      "date": moment().format('MMMM Do YYYY'),
      "description": "In this Easter sermon Dr. Peale says, “The greatest speech in U.S. history was the Gettysburg Address. And the greatest speech in history was by Jesus, spoken to one person. ‘I am the resurrection and the life; he that believeth in me, though he were dead, yet shall he live: And whoever liveth and believeth in me shall never die.’”",
      "bibleVerse": "John 11:25-26, John 14:2",
      "bibleVerseText": "11:25) Jesus said to her, “I am the resurrection and the life. The one who believes in me will live even if he dies, 26) and the one who lives and believes in me will never die. Do you believe this?” --  14:2) There are many dwelling places in my Father’s house. Otherwise, I would have told you, because I am going away to make ready a place for you.",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Enlivening": 10,
        "Calming": 0,
        "Encouraging": 2,
        "Timeless": 1,
        "Faith Building": 1,
        "Fresh": 1,
        "Comforting": 0,
        "Refreshing": 1,
        "Energizing": 1
      }
    },
    {
      "fileName": "840506.mp3",
      "title": "True Joy Of Positive Living",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale tells us that we can have deep within us a profound and basic joy despite all the pain and trouble that life might bring us. We can have a wonderful state of well being, mentally, spiritually and physically. These wonderful results can be brought to pass by developing faith in depth. Become a great believer and great things will happen to you.",
      "bibleVerse": "John 8:12, Mark 9:12, Matthew 9:29",
      "bibleVerseText": "8:12) Then Jesus spoke out again, “I am the light of the world. The one who follows me will never walk in darkness, but will have the light of life.” --  9:12) He said to them, “Elijah does indeed come first, and restores all things. And why is it written that the Son of Man must suffer many things and be despised? --  9:29) Then he touched their eyes saying, “Let it be done for you according to your faith.”",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Empowering": 10,
        "Faith Building": 1
      }
    },
    {
      "fileName": "840520.mp3",
      "title": "You Can Handle Whatever Happens",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale shares the stories of  four people who handled misfortunes in their lives through faith in God. He says he saw a picture of a young man flooded area who had returned to his home to rescue what he thought most important. Under one are he had a pile of clothes, under the other a large Bible. His head was held high, it gave him the idea for this sermon. With God you can handle whatever happens.",
      "bibleVerse": "Psalm 23:6, Psalm 57:1, Psalm 91:11, Psalm 107:28, I Peter 5:7",
      "bibleVerseText": "23:6) Surely your goodness and faithfulness will pursue me all my days, and I will live in the Lord’s house for the rest of my life. --  57:1) For the music director; according to the al-tashcheth style; a prayer of David, written when he fled from Saul into the cave. Have mercy on me, O God! Have mercy on me! For in you I have taken shelter. In the shadow of your wings I take shelter until trouble passes. --  91:11) For he will order his angels to protect you in all you do. --  107:28) They cried out to the Lord in their distress; he delivered them from their troubles. --  5:7) by casting all your cares on him because he cares for you.",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Empowering": 10,
        "Heartening": 1,
        "Faith Building": 1
      }
    },
    {
      "fileName": "840603.mp3",
      "title": "Your Life Has Wonderful Possibilities",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale says that many people say by their expression, “I haven’t got any possibilities in my life.” He says, “Bring your possibility to the forefront of your mind. Affirm it, believe it, pray it and get out and bring it to pass.” He tells us to become dreamers. If there are no dreams there are no possibilities. Before we were born the Creator took a pinch of dreams and dashed them into our nature. The basic element in releasing our possibilities is to get back to the One Who can extract them from us, because He first put them into us.",
      "bibleVerse": "Philippians 4:13",
      "bibleVerseText": "4:13) I am able to do all things through the one who strengthens me.",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Inspiring": 11,
        "Empowering": 10,
        "Joyful": 2,
        "Uplifting": 1,
        "Heartening": 1,
        "Faith Building": 1,
        "Visionary": 1,
        "Useful": 1
      }
    },
    {
      "fileName": "760314.mp3",
      "title": "Shake Off Stress And Strain",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale reminds us that we are living in a world of stress and strain. It is a mark of a sophisticated individual to maintain an outward facade of calm and peace, but many of us experience inward turmoil. This message tells us how to shake strain and stress and live and work with competent control. NVP says, “Never forget that God, our Father is always there and remember the words of Isaiah, 'Thou will keep him in perfect peace, whose mind is stayed on thee.' This is one of the greatest passages in the Bible. Get your mind off anxieties and concentrate on God.”",
      "bibleVerse": "Isaiah 26:3",
      "bibleVerseText": "26:3) You keep completely safe the people who maintain their faith, for they trust in you.",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Uplifting": 10,
        "Faith Building": 2,
        "Empowering": 2,
        "Healing": 1,
        "Visionary": 1,
        "Comforting": 1
      }
    },
    {
      "fileName": "760404.mp3",
      "title": "Wonderful Thing Called Peace Of Mind",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale recalls a cyclone he saw as a boy in Kansas. It cut a swath of destruction through town with a terrible force that it drew from a calm center. He compares this with people who have great power and have within them a calm center of peace from which they draw energy. NVP says, “If you are going to be what you are capable of being you've got to be a powerhouse and you can't do that without having peace at the center. Remember: “Thou will keep him in perfect peace, whose mind is stayed on thee.”",
      "bibleVerse": "Isaiah 26:3, John 14:27",
      "bibleVerseText": "26:3) You keep completely safe the people who maintain their faith, for they trust in you.  14:27) Peace I leave with you; my peace I give to you; I do not give it to you as the world does. Do not let your hearts be distressed or lacking in courage.",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Empowering": 10
      }
    },
    {
      "fileName": "810301.m4v",
      "title": "Faith Makes Champions",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale shares the stories of several people whose faith helped them become champions in several areas of life. Sports,business and sales are some of the many places where faith can make you a champion. NVP says, “How do you get this faith? You get it out of desire. You want to be more than you seem to be. You want to do all you can do.”",
      "bibleVerse": "Romans 8:37",
      "bibleVerseText": "8:37) No, in all these things we have complete victory through him who loved us!",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Funny": 10,
        "Uplifting": 11,
        "Comforting": 1,
        "Thought Provoking": 1,
        "Healing": 1,
        "Calming": 1,
        "Fresh": 1,
        "Hopeful": 1,
        "Heartening": 1
      }
    },
    {
      "fileName": "830612.mp3",
      "title": "Life Can Be Wonderful",
      "date": moment().format('MMMM Do YYYY'),
      "description": "Dr. Peale tells su that the first thing to do if we want a life that is wonderful is to affirm that it is wonderful. We ought to thank God every day for life, not that we won't have trouble, you'll have trouble till the day you die. But if we put our troubles in God's hands and trust Him, He will see us through and take care of us. NVP says he has known people in their nineties like J.C. Penny who loved life to the very end, because they practiced the principles of Jesus.",
      "bibleVerse": "Proverbs 8:35, Psalm 118:24",
      "bibleVerseText": "8:35) For the one who finds me finds life and receives favor from the Lord.  118:24) This is the day the Lord has brought about. We will be happy and rejoice in it.  ",
      "package": "premium",
      "type": "audio",
      "duration": 1500,
      "tags": {
        "Inspiring": 10,
        "Exciting": 10,
        "Calming": 1,
        "Informative": 1
      }
    }
  ];

  tags = [
    {
      "name": "Calming"
    },
    {
      "name": "Comforting"
    },
    {
      "name": "Empowering"
    },
    {
      "name": "Encouraging"
    },
    {
      "name": "Energizing"
    },
    {
      "name": "Enlightening"
    },
    {
      "name": "Faith Building"
    },
    {
      "name": "Fresh"
    },
    {
      "name": "Healing"
    },
    {
      "name": "Heartening"
    },
    {
      "name": "Hopeful"
    },
    {
      "name": "Humorous"
    },
    {
      "name": "Informative"
    },
    {
      "name": "Inspiring"
    },
    {
      "name": "Joyful"
    },
    {
      "name": "Liberating"
    },
    {
      "name": "Mind Changing"
    },
    {
      "name": "Refreshing"
    },
    {
      "name": "Thought Provoking"
    },
    {
      "name": "Timeless"
    },
    {
      "name": "Uplifting"
    },
    {
      "name": "Useful"
    },
    {
      "name": "Visionary"
    }
  ];

  try {
    await Sermon.fillList(sermons);
    await Tag.fillList();
    await TagVote.fillList(sermons);
    //return done()
  }catch(err) {
    sails.log.error('Error bootstraping:', err)
    process.exit(1)
  }

  return done();

};
