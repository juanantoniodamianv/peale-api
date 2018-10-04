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
      columnType: "datetime",
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
    }


    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },

};

