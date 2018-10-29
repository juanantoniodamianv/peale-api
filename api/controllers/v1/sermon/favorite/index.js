module.exports = {


  friendlyName: 'Retrieve all favorites per user',


  description: 'Index favorite.',


  inputs: {

  },


  exits: {
    success: {
      statusCode: 200,
      description: 'All favorites successfully retrieved.',
    },

    unauthorized: {
      statusCode: 401,
      description: 'Unauthorized request.',
    },
  },


  fn: async function (inputs, exits) {
    var current_user = JSON.stringify(this.req.current_user[0].id)

    var favorites = await Favorite.find({ user: current_user })
      .populate('user')
      .populate('sermon');

    var favoriteSermons = []

    favorites.forEach((favorite, value) => {
      delete favorite.user
      favoriteSermons[value] = favorite.sermon
    })

    await Promise.all(favoriteSermons.map(async (sermon) => {
      var mediaFileURL = await sails.helpers.aws.s3.get.with({ fileName: sermon.fileName });
      sermon.played = current_user !== undefined ? await Viewed.isViewed(current_user, sermon.id) || false : false;
      sermon.isFavorite = current_user !== undefined ? await Favorite.isFavorite(current_user, sermon.id) || false : false;
      sermon.comments = await Comment.totalCount(sermon.id) || 0;
      sermon.tags = await TagVote.get(sermon.id);
      sermon.media = {
        "url": mediaFileURL,
        "type": sermon.type,
        "duration": sermon.duration
      };
      delete sermon.type
      delete sermon.duration
    }));

    return exits.success(favoriteSermons);

  }


};
