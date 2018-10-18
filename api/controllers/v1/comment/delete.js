module.exports = {


  friendlyName: 'Delete Comment',


  description: 'Delete comment.',


  inputs: {

    id: {
      type: "number",
      required: true,
      example: 1,
      description: "Sermon ID"
    },

    commentId: {
      type: "number",
      required: true,
      example: 1,
      description: "Commentary ID"
    },

  },


  exits: {
    success: {
      statusCode: 200,
      description: 'Commentary has been deleted succesfully.',
    },
    
    unauthorized: {
      statusCode: 404,
      description: 'Unauthorized request.',
    },
  },


  fn: async function (inputs, exits) {

    var comment = await Comment.destroy({id: inputs.commentId}).fetch();

    if (comment.length === 0) { return exits.unauthorized('Unauthorized request.') }

    return exits.success(`Commentary has been deleted succesfully: ${comment}`);

  }


};
