module.exports = {


  friendlyName: 'Remove this sermon from my favorites',


  description: 'Remove this sermon from my favorites sermons',


  inputs: {
    id: {
      description: 'Sermon IDs',
      type: 'ref',
      required: true
    }
  },


  exits: {
    success: {
      statusCode: 201,
      description: 'Favorites successfully removed from the list',
    },

    notFound: {
      statusCode: 404,
      description: 'One or more sermons are not added to the favorites'
    },

    unauthorized: {
      statusCode: 401,
      description: 'Unauthorized request',
    },
  },


  fn: async function (inputs, exits) {
    var favIds = Array.from(inputs.id);
    var current_user = JSON.stringify(this.req.current_user[0].id)
    await Promise.all(favIds.map(async (favId) => {
      Favorite.destroy({ user: current_user, sermon: favId }).fetch()
        .exec(async (err) => {
        })
    }));

    var successData = {
      "message": 'Favorites successfully removed from the list',
      "statusCode": 201
    }
    return exits.success(successData);
  }
};
