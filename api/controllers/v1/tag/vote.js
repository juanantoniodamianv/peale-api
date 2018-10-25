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
      statusCode: 400,
      description: 'Error.'
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
      TagVote.findOrCreate({ sermon: inputs.id, tag: tagId }, { vote: 1, sermon: inputs.id, tag: tagId })
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
