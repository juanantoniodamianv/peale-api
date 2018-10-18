module.exports = {


  friendlyName: 'Retrieve all tags availables',


  description: 'Retrieve all tags availables',


  inputs: {

  },


  exits: {
    success: {
      statusCode: 200,
      description: 'Succesfully retrieved all tags.',
    },
    
    unauthorized: {
      statusCode: 404,
      description: 'Unauthorized request.',
    },
  },


  fn: async function (inputs, exits) {
    var tags = await Tag.find({});

    if (!tags) throw { unauthorized: 'Unauthorized request.' };

    var responseData = { tags }

    return exits.success(responseData);
  }


};
