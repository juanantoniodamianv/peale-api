module.exports = {


  friendlyName: 'Show sermon for me',


  description: 'Show sermon me.',


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
      description: 'Succesfully retrieved this sermon.',
    },
    
    unauthorized: {
      statusCode: 404,
      description: 'Unauthorized request.',
    },
    success: {
      statusCode: 200,
      description: 'Succesfully retrieved this sermon.',
    },
    
    unauthorized: {
      statusCode: 404,
      description: 'Unauthorized request.',
    }, },


  fn: async function (inputs, exits) {

    var sermon = await Sermon.findOne({id: inputs.id});

    if (!sermon) throw { unauthorized: 'Unauthorized request.' };

    console.log(sermon.fileName)
    var mediaFileURL = await sails.helpers.aws.s3.get.with({fileName: sermon.fileName});
    console.log(mediaFileURL)
    sermon.media = { 
                    "url": mediaFileURL,
                    "type": sermon.type,
                    "duration": sermon.duration,
                  };
    delete sermon.type;
    delete sermon.duration;

    var responseData = { sermon }

    return exits.success(responseData);

  }


};
