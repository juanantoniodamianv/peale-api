module.exports = {


  friendlyName: 'List all sermons with user logged data or not',


  description: 'List all sermons to me if exist token, if not all sermon list are retrieved.',


  inputs: {

  },


  exits: {
    success: {
      statusCode: 200,
      description: 'All sermons retrieved successfully.',
    },

    unauthorized: {
      statusCode: 401,
      description: 'Unauthorized request.',
    },
  },


  fn: async function (inputs, exits) {

    var current_user
    if (this.req.current_user !== undefined) {
      current_user = JSON.stringify(this.req.current_user[0].id)
    }

    var sermons = await Sermon.find({});

    if (!sermons) throw { unauthorized: 'Unauthorized request.' };

    /* Map all Sermons including fields not present in the original JSON */

    await Promise.all(sermons.map(async (sermon) => {
      var mediaFileURL = await sails.helpers.aws.s3.get.with({ fileName: sermon.fileName });
      sermon.played = current_user !== undefined ? await Viewed.isViewed(current_user, sermon.id) || false : false;
      sermon.isFavorite = current_user !== undefined ? await Favorite.isFavorite(current_user, sermon.id) || false : false;
      sermon.comments = await Comment.totalCount(sermon.id) || 0;
      
      if (current_user !== undefined) {
        var userTagVotes = await UserTagVote.get(sermon.id, current_user);
        sermon.tags = userTagVotes.length > 0 ? userTagVotes : await TagVote.get(sermon.id);
      } else {
        sermon.tags = await TagVote.get(sermon.id);
      }
      
      sermon.media = {
        "url": mediaFileURL,
        "type": sermon.type,
        "duration": sermon.duration
      };
      delete sermon.type
      delete sermon.duration
    }));

    /* Sort Sermons by title (Case sensitive) */

    sermons.sort((a, b) => {
      var textA = a.title.toUpperCase();
      var textB = b.title.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });

    return exits.success(sermons);

  }

};
