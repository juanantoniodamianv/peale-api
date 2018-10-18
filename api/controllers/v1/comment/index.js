module.exports = {


  friendlyName: 'Retrieved all comments',


  description: 'Retrieved all comments.',


  inputs: {
    id: {
      type: "number",
      required: true,
      example: 1,
      description: "Sermon ID"
    },
  },


  exits: {
    success: {
      statusCode: 200,
      description: 'Commentary has been updated succesfully.',
    },
    
    unauthorized: {
      statusCode: 404,
      description: 'Unauthorized request.',
    },
  },


  fn: async function (inputs, exits) {
    var comments = await Comment.find({sermon: inputs.id}).populate("author");

    if (!comments) { return exits.unauthorized('Unauthorized request.') }

    return exits.success(comments);

  }


};
