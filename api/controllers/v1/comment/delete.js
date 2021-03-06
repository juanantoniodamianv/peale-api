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
      description: 'Comment has been deleted successfully',
    },

    notFound: {
      statusCode: 400,
      description: 'Comment could not be destroyed'
    },

    unauthorized: {
      statusCode: 401,
      description: 'Unauthorized request',
    },
  },


  fn: async function (inputs, exits) {

    var current_user = JSON.stringify(this.req.current_user[0].id);
    var commentUserId = await Comment.findOne({ id: inputs.commentId });
    if (current_user != commentUserId.author) { return exits.unauthorized('Unauthorized request') }

    var comment = await Comment.destroy({ id: inputs.commentId }).fetch();
    if (comment.length === 0) { return exits.notFound('Comment could not be destroyed') }

    var successData = {
      "message": 'Comment has been deleted successfully',
      "statusCode": 200
    }

    return exits.success(successData);
  }
};
