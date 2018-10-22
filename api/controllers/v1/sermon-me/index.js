module.exports = {


  friendlyName: 'List all sermons with user logged data',


  description: 'List all sermons to me.',


  inputs: {

  },


  exits: {
    success: {
      statusCode: 200,
      description: 'Succesfully retrieved all sermons.',
    },
    
    unauthorized: {
      statusCode: 404,
      description: 'Unauthorized request.',
    },
  },


  fn: async function (inputs, exits) {

    var current_user = JSON.stringify(this.req.current_user[0].id)

    var sermons = await Sermon.find({});

    if (!sermons) throw { unauthorized: 'Unauthorized request.' };
    
    await Promise.all(sermons.map(async (sermon) => {
      var mediaFileURL = await sails.helpers.aws.s3.get.with({fileName: sermon.fileName});
      sermon.played = false;
      sermon.isFavorite = await Favorite.isFavorite(current_user, sermon.id) || false;
      sermon.comments = await Comment.totalCount(sermon.id) || 0;
      sermon.media = {
        "url": mediaFileURL,
        "type": sermon.type,
        "duration": sermon.duration
      };
      delete sermon.type
      delete sermon.duration
    }));

    var responseData = { sermons }

    return exits.success(responseData);
  }


};
