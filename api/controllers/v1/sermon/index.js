module.exports = {


  friendlyName: 'All Sermons',


  description: 'Retrieve all sermons.',


  inputs: {
    
  },


  exits: {
    success: {
      statusCode: 200,
      description: 'Succesfully retrieved all sermons.',
    },
    
    unauthorized: {
      statusCode: 404,
      description: 'Unauthorized request.',
    },
  },


  fn: async function (inputs, exits) {

    var sermons = await Sermon.find({});

    if (!sermons) throw { unauthorized: 'Unauthorized request.' };

    var responseData = { sermons }

    return exits.success(responseData);

  }


};
