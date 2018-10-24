/**
 * TagVote.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    vote: {
      type: "number",
      defaultsTo: 0
    },


    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    sermon: {
      model: "sermon"
    },

    tag: {
      model: "tag"
    },

  },

  fillList: async (sermons) => {
    var tagVoteCount = await TagVote.count({});
    if (tagVoteCount < 1) {
      sermons.forEach(async (element) => {
        var sermonFind = await Sermon.findOne({fileName: element.fileName});
        if (sermonFind !== undefined) {
          Object.entries(element.tags).forEach(async ([key, value]) => {
            console.log(`Tag: ${key}, Value: ${value}`);
            var tagFind = await Tag.findOne({name: key});
            if (tagFind !== undefined) {
              var tagVote = await TagVote.create({sermon: sermonFind.id, tag: tagFind.id, vote: value}).fetch();
              if (tagVote !== undefined) { console.log(`TagVote is created: ${element.fileName} -> Tag: ${key} - Vote: ${value}`)}
            } else {
              tagFind = await Tag.create({ name: key }).fetch();
              var tagVote = await TagVote.create({sermon: sermonFind.id, tag: tagFind.id, vote: value}).fetch();
              if (tagVote !== undefined) { console.log(`TagVote is created: ${element.fileName} -> Tag: ${key} - Vote: ${value}`)}
            }
          })
        }
      });
    }
  },

  /* Get last three with highest vote */
  get: async (sermonId) => {  
    var tags = await TagVote.find({where: {sermon: sermonId}, select: ['id']})
      .sort('vote DESC')
      .limit(3)
      .populate('tag');
    
    tags.forEach(element => {
      element.id = element.tag.id
      delete element.id
      element.name = element.tag.name
      delete element.tag
    })

    return tags;
  },

};

