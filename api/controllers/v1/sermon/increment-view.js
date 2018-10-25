module.exports = {


  friendlyName: 'Increment number view for one sermon',


  description: 'Increment number view for one sermon',


  inputs: {
    id: {
      type: "number",
      required: true,
      description: "Sermon ID"
    },
  },


  exits: {
    success: {
      statusCode: 200,
      description: 'Succesfully increment view.',
    },

    notFound: {
      statusCode: 400,
      description: 'Not found sermon.'
    },
    
    unauthorized: {
      statusCode: 404,
      description: 'Unauthorized request.',
    },
  },


  fn: async function (inputs, exits) {
    var sermon = await Sermon.findOne({id: inputs.id});

    if (sermon !== undefined) {
      var Sermonviews = sermon.views;
      Sermonviews++;
      var sermon = await Sermon.update({id: inputs.id}).set({views: Sermonviews});
      return exits.success({message: "Succesfully increment view."});
    } else {
      return exits.notFound({message: "Not found sermon."});
    }


  }


};
