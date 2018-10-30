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
      statusCode: 202,
      description: 'Commentary has been deleted successfully.',
    },

    unauthorized: {
      statusCode: 401,
      description: 'Unauthorized request.',
    },
  },


  fn: async function (inputs, exits) {

    var current_user = JSON.stringify(this.req.current_user[0].id);

    var commentUserId = await Comment.findOne({ id: inputs.commentId });

    if (current_user != commentUserId.author) { return exits.unauthorized('Unauthorized request.') }

    var comment = await Comment.destroy({ id: commentUserId.id }).fetch();

    if (comment.length === 0) { return exits.unauthorized('Unauthorized request.') }

    return exits.success(`Commentary has been deleted successfully: ${comment}`);

  }


};
