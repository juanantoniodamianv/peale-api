module.exports = {


  friendlyName: 'Add this sermon to viewed list, only logged users',


  description: 'When users is logged in, add this sermon to viewed list',


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
    Viewed.findOrCreate({user: current_user, sermon: inputs.id}, {user: current_user, sermon: inputs.id})
      .exec(async (err, viewed, wasCreated) => {
        if (err) return exits.unauthorized('Unauthorized request.')

        if (wasCreated) {
          return exits.success(viewed);
        } else {  
          return exits.alreadyCreate('This sermon is already added to my viewed list.')
        }
      }
    );
  }


};
