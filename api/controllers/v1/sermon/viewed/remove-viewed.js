module.exports = {


  friendlyName: 'Remove this sermon to viewed list, only logged users',


  description: 'When users is logged in, remove this sermon to viewed list',


  inputs: {
    id: {
      description: 'Sermon ID',
      type: 'string',
      required: true
    },
  },


  exits: {
    success: {
      statusCode: 202,
      description: 'Sermon successfully removed from the viewed list.',
    },

    notFound: {
      statusCode: 201,
      description: 'Sermon is not added to the viewed list.'
    },

    unauthorized: {
      statusCode: 401,
      description: 'Unauthorized request.',
    },
  },


  fn: async function (inputs, exits) {

    var current_user = JSON.stringify(this.req.current_user[0].id)
    var destroyed = await Viewed.destroy({ user: current_user, sermon: inputs.id }).fetch();

    if (destroyed.length === 0) {
      return exits.notFound('Sermon is not added to the viewed list.');
    }

    return exits.success('Sermon successfully removed from the viewed list.');

  }


};
