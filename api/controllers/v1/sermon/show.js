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
    var current_user = JSON.stringify(this.req.current_user[0].id)
    var sermon = await Sermon.findOne({ id: inputs.id });

    if (!sermon) throw { unauthorized: 'Unauthorized request.' };

    // Mark a Sermon as played by a current user

    Viewed.findOrCreate({ user: current_user, sermon: inputs.id }, { user: current_user, sermon: inputs.id })
      .exec(async (err, viewed, wasCreated) => {
        if (err) return exits.unauthorized('Unauthorized request.')
      }
      );

    // Increase views count for a single Sermon
    var sermonViews = sermon.views;
    sermonViews++;
    await Sermon.update({ id: inputs.id }).set({ views: sermonViews });

    // Return media data related to the retrieved S3 Object
    var mediaFileURL = await sails.helpers.aws.s3.get.with({ fileName: sermon.fileName });
    sermon.media = {
      "url": mediaFileURL,
      "type": sermon.type,
      "duration": sermon.duration,
    };
    delete sermon.type;
    delete sermon.duration;

    var responseData = { sermon }
    return exits.success(responseData);

  }

};
