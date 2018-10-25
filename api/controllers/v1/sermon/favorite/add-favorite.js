module.exports = {


  friendlyName: 'Add this sermon to my favorites',


  description: 'Add this sermon to my favorites sermons',


  inputs: {
    id: {
      description: 'Sermon ID',
      type: 'string',
      required: true
    },

  },


  exits: {
    success: {
      statusCode: 200,
      description: 'Sermon successfully added to my favorites.',
    },

    alreadyCreate: {
      statusCode: 201,
      description: 'Sermon already added to my favorites.'
    },

    unauthorized: {
      statusCode: 401,
      description: 'Unauthorized request.',
    },
  },


  fn: async function (inputs, exits) {
    var current_user = JSON.stringify(this.req.current_user[0].id)
    Favorite.findOrCreate({ user: current_user, sermon: inputs.id }, { user: current_user, sermon: inputs.id })
      .exec(async (err, favorite, wasCreated) => {
        if (err) return exits.unauthorized('Unauthorized request.')

        if (wasCreated) {
          return exits.success(favorite);
        } else {
          return exits.alreadyCreate('Sermon already added to my favorites.')
        }
      }
      );
  }


};
