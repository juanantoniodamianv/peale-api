module.exports = {


  friendlyName: 'Retrieve all tags availables',


  description: 'Retrieve all tags availables',


  inputs: {

  },


  exits: {
    success: {
      statusCode: 200,
      description: 'All tags retrieved successfully.',
    },

    unauthorized: {
      statusCode: 401,
      description: 'Unauthorized request.',
    },
  },

  fn: async function (inputs, exits) {
    var tags = await Tag.find({});
    if (!tags) throw { unauthorized: 'Unauthorized request.' };
    return exits.success(tags);
  }

};
