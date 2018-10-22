module.exports = {


  friendlyName: 'Retrieve all favorites per user',


  description: 'Index favorite.',


  inputs: {

  },


  exits: {
    success: {
      statusCode: 200,
      description: 'Succesfully retrieved all favorites.',
    },
    
    unauthorized: {
      statusCode: 404,
      description: 'Unauthorized request.',
    },
  },


  fn: async function (inputs, exits) {
    var current_user = JSON.stringify(this.req.current_user[0].id)

    var favorites = await Favorite.find({user: current_user})
                      .populate('user')
                      .populate('sermon');
    
    favorites.forEach(favorite => {
      delete favorite.user
    })
    
    var responseData = {
      favorites
    }

    return exits.success(responseData);

  }


};
