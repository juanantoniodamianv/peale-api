module.exports = {


  friendlyName: 'Create',


  description: 'Create comment.',


  inputs: {

    id: {
      type: "number",
      required: true,
      example: 1,
      description: "Sermon ID"
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
      description: 'Commentary has been created succesfully.',
    },
    
    unauthorized: {
      statusCode: 404,
      description: 'Unauthorized request.',
    },
  },


  fn: async function (inputs, exits) {
    var current_user = JSON.stringify(this.req.current_user[0].id)
    var comment = await Comment.create({commentary: inputs.commentary, sermon: inputs.id, author: current_user}).fetch();

    if (comment.length === 0) { return exits.unauthorized('Unauthorized request.') }

    return exits.success(`Commentary has been created succesfully`);

  }


};
