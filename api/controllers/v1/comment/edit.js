module.exports = {


  friendlyName: 'Edit Comment',


  description: 'Edit comment.',


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

    commentary: {
      type: "string",
      required: true,
      example: 'This is a commentary for one sermon file.',
      description: 'Commentary'
    }

  },


  exits: {
    success: {
      statusCode: 201,
      description: 'Comment has been updated successfully',
    },

    unauthorized: {
      statusCode: 401,
      description: 'Unauthorized request.',
    },
  },


  fn: async function (inputs, exits) {

    var current_user = JSON.stringify(this.req.current_user[0].id)

    var commentUserId = await Comment.findOne({ id: inputs.commentId });

    if (current_user != commentUserId.author) { return exits.unauthorized('Unauthorized request.') }

    var comment = await Comment.update({ id: inputs.commentId }).set({ commentary: inputs.commentary }).fetch();

    if (!comment) { return exits.unauthorized('Unauthorized request.') }

    var successData = {
      comment,
      "message": 'Comment has been updated successfully',
      "statusCode": 201
    }

    return exits.success(successData);
  }


};
