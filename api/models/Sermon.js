/**
 * Sermon.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    fileName: {
      type: "string",
      required: true,
      unique: true,
    },

    date: {
      type: "string",
      required: true
    },

    title: {
      type: "string",
      required: true
    },

    description: {
      type: "string",
      columnType: "longtext"
    },

    bibleVerse: {
      type: "string"
    },

    bibleVerseText: {
      type: "string",
      maxLength: 500,
    },

    type: {
      type: "string",
      isIn: ['video', 'audio'],
      required: true
    },

    duration: {
      type: "number"
    },

    package: {
      type: "string",
      isIn: ["base", "premium"],
      defaultsTo: "base"
    },

    views: {
      type: "number",
      defaultsTo: 0
    },


    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    favorites: {
      collection: "favorite",
      via: "sermon"
    },

    viewed: {
      collection: "viewed",
      via: "sermon"
    },

    tagVotes: {
      collection: "tagVote",
      via: "sermon"
    },

    comment: {
      collection: "comment",
      via: "sermon"
    },

  },

  fillList: async (sermons) => {
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
        if (err) { return err }
        if (wasCreated) { 
          sails.log.info(`Created a new sermon: ${sermon.fileName}`)
        } else {
          sails.log.warn(`Found existing sermon: ${sermon.fileName}`)
        }
      })
    });
  },

};

