module.exports = {


  friendlyName: 'Remove this sermon to viewed list, only logged users',


  description: 'When users is logged in, remove this sermon to viewed list',


  inputs: {
    id:{
      description: 'Sermon ID',
      type: 'string',
      required: true
    },
  },


  exits: {
    success: {
      statusCode: 200,
      description: 'Succesfully added this sermon to my favorites.',
    },

    alreadyCreate: {
      statusCode: 201,
      description: 'This sermon is already added to my favorites.'
    },
    
    unauthorized: {
      statusCode: 404,
      description: 'Unauthorized request.',
    },
  },


  fn: async function (inputs, exits) {

    var current_user = JSON.stringify(this.req.current_user[0].id)
    var destroyed = await Viewed.destroy({user: current_user, sermon: inputs.id}).fetch();

    if (destroyed.length === 0) {
      return exits.notFound('This sermon is not added to my viewed list.');
    }

    return exits.success('Succesfully remove this sermon to my viewed list.');

  }


};
