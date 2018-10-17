/**
 * Tag.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    name: {
      type: "string",
      required: true,
      unique: true,
    },

    description: {
      type: "string"
    },


    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    tagVotes: {
      collection: "tagVote",
      via: "tag"
    },

  },

  fillList: async () => {
    let tags = []
    if(await Tag.count() < 1) {
      tags = await Tag.createEach([
        { name: 'Calming' },
        { name: 'Comforting' },
        { name: 'Empowering' },
        { name: 'Encouraging' },
        { name: 'Energizing' },
        { name: 'Enlightening' },
        { name: 'Faith Building' },
        { name: 'Fresh' },
        { name: 'Healing' },
        { name: 'Heartening' },
        { name: 'Hopeful' },
        { name: 'Humorous' },
        { name: 'Informative' },
        { name: 'Inspiring' },
        { name: 'Joyful' },
        { name: 'Liberating' },
        { name: 'Mind Changing' },
        { name: 'Refreshing' },
        { name: 'Thought Provoking' },
        { name: 'Timeless' },
        { name: 'Uplifting' },
        { name: 'Useful' },
        { name: 'Visionary' }
      ]).fetch()
    } else {
      tags = await Tag.find()
    }
  },

};

