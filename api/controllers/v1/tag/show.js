module.exports = {


  friendlyName: 'Show',


  description: 'Show tag.',


  inputs: {
    id: {
      description: 'Tag ID',
      type: 'string',
      required: true
    }
  },


  exits: {
    success: {
      statusCode: 200,
      description: 'Succesfully retrieved tag.',
    },
    
    unauthorized: {
      statusCode: 404,
      description: 'Unauthorized request.',
    },
  },


  fn: async function (inputs, exits) {

    var tag = await Tag.findOne({id: inputs.id});

    if (!tag) throw { unauthorized: 'Unauthorized request.' };

    var responseData = { tag }

    return exits.success(responseData);

  }


};
