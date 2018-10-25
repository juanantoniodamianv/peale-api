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

    limit: {
      type: "number",
      example: 1,
      description: "Limit of records",
      defaultsTo: 30
    },

    skip: {
      type: "number",
      example: 1,
      description: "Skip of records",
      defaultsTo: 0
    },

  },


  exits: {
    success: {
      statusCode: 200,
      description: 'Commentary has been updated successfully.',
    },

    unauthorized: {
      statusCode: 401,
      description: 'Unauthorized request.',
    },
  },


  fn: async function (inputs, exits) {
    var count = await Comment.totalCount(inputs.id);

    var comments = await Comment.get(inputs);

    if (!comments) { return exits.unauthorized('Unauthorized request.') }

    var responseData = {
      comments,
      skip: inputs.skip,
      limit: inputs.limit,
      count: count || 0
    }
    return exits.success(responseData);
  }

};
