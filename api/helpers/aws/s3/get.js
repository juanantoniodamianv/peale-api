const aws = require('aws-sdk');
const s3 = new aws.S3();

module.exports = {


  friendlyName: 'Retrieve object s3',


  description: 'Retrieve objects from s3',


  inputs: {
    fileName: {
      type: 'string',
      required: true,
      description: 'File Name to search object on bucket s3'
    }
  },


  exits: {
    success: {
      statusCode: 200,
      description: 'Succesfully retrieved object.'
    },

    unauthorized: {
      statusCode: 404,
      description: 'Error on retrieved object.',
    },
  },


  fn: async function (inputs, exits) {
    var getParams = {
      Bucket: 'pealefoundation-sermons',
      Key: inputs.fileName
    }

    s3.getObject(getParams, (err, data) => {
      if (err) return exits.error('Error on retrieved object.');
      let objectData = data.Body.toString('utf-8');
      return exits.success(objectData);
    });

  }


};

