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
      statusCode: 200,
      description: 'Commentary has been updated succesfully.',
    },
    
    unauthorized: {
      statusCode: 404,
      description: 'Unauthorized request.',
    },
  },


  fn: async function (inputs, exits) {
    //var current_user = JSON.stringify(this.req.current_user[0].id)
    var comment = await Comment.update({id: inputs.commentId}).set({commentary: inputs.commentary});

    if (!comment) { return exits.unauthorized('Unauthorized request.') }

    return exits.success(`Commentary has been updated succesfully: ${comment}`);

  }


};