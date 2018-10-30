module.exports = {


  friendlyName: 'Vote',


  description: 'Vote tag.',


  inputs: {
    id: {
      type: "number",
      required: true,
      description: "Sermon ID"
    },

    tag: {
      type: "ref",
      required: true,
      description: "The array of the allowed Tag ID's"
    },

  },


  exits: {
    success: {
      statusCode: 200,
      description: 'Tag voted successfully.',
    },

    notFound: {
      statusCode: 404,
      description: 'Not Found.'
    },

    unauthorized: {
      statusCode: 401,
      description: 'Unauthorized request.',
    },
  },


  fn: async function (inputs, exits) {
    console.log(`Tags: ${inputs.tag}`)
    var tagIds = Array.from(inputs.tag);


    await Promise.all(tagIds.map(async (tagId) => {
      var current_user
      if (this.req.current_user !== undefined) {
        current_user = JSON.stringify(this.req.current_user[0].id)
      } else {
        return exits.unauthorized({ message: 'Unauthorized request.' })
      }
      UserTagVote.findOrCreate({ sermon: inputs.id, tag: tagId, user: current_user }, { sermon: inputs.id, tag: tagId, user: current_user })
        .exec(async (err, tagVote, wasCreated) => {

          if (wasCreated) {
            console.log(`successfully created vote. ${tagVote}`)
          } else if (tagVote !== undefined) {
            tagVote = await TagVote.update({ id: tagVote.id }).set({ vote: tagVote.vote + 1 }).fetch();
            console.log(`successfully updated vote. ${tagVote}`)
          }
        })
    })
    );
    return exits.success({ message: 'Tag voted successfully.' });


  }


};
