module.exports = {


  friendlyName: 'Remove this sermon to my favorites',


  description: 'Remove this sermon to my favorites sermons',


  inputs: {
    id: {
      description: 'Sermon ID',
      type: 'string',
      required: true
    }
  },


  exits: {
    success: {
      statusCode: 200,
      description: 'Sermon successfully removed from my favorites.',
    },

    notFound: {
      statusCode: 404,
      description: 'Sermon is not added to my favorites.'
    },

    unauthorized: {
      statusCode: 401,
      description: 'Unauthorized request.',
    },
  },


  fn: async function (inputs, exits) {

    var current_user = JSON.stringify(this.req.current_user[0].id)
    var destroyed = await Favorite.destroy({ user: current_user, sermon: inputs.id }).fetch();

    if (destroyed.length === 0) {
      return exits.notFound('Sermon is not added to my favorites.');
    }

    return exits.success('Sermon successfully removed from my favorites.');

  }

};
