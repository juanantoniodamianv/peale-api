module.exports = {


  friendlyName: 'List all sermons with user logged data',


  description: 'List all sermons to me.',


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

    sermons.forEach(sermon => {
      sermon.media = {
        "type": sermon.type,
        "duration": sermon.duration
      }
      delete sermon.type
      delete sermon.duration
    }); 

    var responseData = { sermons }

    return exits.success(responseData);
  }


};
