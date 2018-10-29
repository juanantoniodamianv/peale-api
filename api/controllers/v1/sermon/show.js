module.exports = {


  friendlyName: 'Show sermon for me',


  description: 'Show sermon me.',


  inputs: {
    id: {
      description: 'Sermon ID',
      type: 'string',
      required: true
    }
  },


  exits: {
    success: {
      statusCode: 200,
      description: 'Sermon retrieved successfully.',
    },

    unauthorized: {
      statusCode: 401,
      description: 'Unauthorized request.',
    },
  },


  fn: async function (inputs, exits) {

    var sermon = await Sermon.findOne({ id: inputs.id });

    if (!sermon) throw { unauthorized: 'Unauthorized request.' };

    /* Mark a Sermon as played by a current user */
    if (this.req.current_user !== undefined) {
      current_user = JSON.stringify(this.req.current_user[0].id)
      Viewed.findOrCreate({ user: current_user, sermon: inputs.id }, { user: current_user, sermon: inputs.id })
        .exec(async (err) => {
          if (err) return exits.unauthorized('Unauthorized request.')
        });
    }

    /* Increase views count for a single Sermon */
    var sermonViews = sermon.views;
    sermonViews++;
    await Sermon.update({ id: inputs.id }).set({ views: sermonViews });

    return exits.success();

  }

};
