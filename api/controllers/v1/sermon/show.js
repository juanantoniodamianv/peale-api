module.exports = {


  friendlyName: 'Show',


  description: 'Show sermon.',


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
  },


  fn: async function (inputs, exits) {

    var sermon = await Sermon.findOne({id: inputs.id});

    if (!sermon) throw { unauthorized: 'Unauthorized request.' };

    console.log(sermon.fileName)
    var mediaFile = await sails.helpers.aws.s3.get.with({fileName: sermon.fileName});

    var responseData = { sermon }

    return exits.success(responseData);

  }


};
