/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


  //  ╔═╗╔═╗╦  ╔═╗╔╗╔╔╦╗╔═╗╔═╗╦╔╗╔╔╦╗╔═╗
  //  ╠═╣╠═╝║  ║╣ ║║║ ║║╠═╝║ ║║║║║ ║ ╚═╗
  //  ╩ ╩╩  ╩  ╚═╝╝╚╝═╩╝╩  ╚═╝╩╝╚╝ ╩ ╚═╝
  'POST /v1/signup': { action: 'v1/user-account/signup' },
  'PUT /v1/signin': { action: 'v1/user-account/signin' },
  'POST /v1/forgot-password': { action: 'v1/user-account/forgot-password' },

  'POST /v1/refresh-token': { action: 'v1/user-account/refresh-token' },

  /* Sermons: List and Detail (WITHOUT LOGIN) || (WITH LOGIN: played, favorite) */

  'GET /v1/sermons': { action: 'v1/sermon/index' },
  'GET /v1/sermons/:id': { action: 'v1/sermon/show' },

  /* Tag */
  'GET /v1/tags': { action: 'v1/tag/index' },
  'GET /v1/tags/:id': { action: 'v1/tag/show' },
  'POST /v1/sermons/:id/vote': { action: 'v1/tag/vote' },


  /********** USER LOGIN IS REQUIRED: **********/

  /* Add/Remove Sermon to my favorites */
  'POST /v1/sermons/:id/favorite': { action: 'v1/sermon/favorite/add-favorite' },
  'DELETE /v1/sermons/:id/favorite': { action: 'v1/sermon/favorite/remove-favorite' },
  'GET /v1/sermons/favorite': { action: 'v1/sermon/favorite/index' },

  /* Add/Remove Sermon to my viewed list */
  'POST /v1/sermons/:id/viewed': { action: 'v1/sermon/viewed/add-viewed' },
  'DELETE /v1/sermons/:id/viewed': { action: 'v1/sermon/viewed/remove-viewed' },

  /* Increment Sermon Views */
  'PUT /v1/sermons/:id/increment-view': { action: 'v1/sermon/increment-view' },

  /* Create/Delete/Edit/Index Comments */
  'POST /v1/sermons/:id/comments': { action: 'v1/comment/create' },
  'GET /v1/sermons/:id/comments': { action: 'v1/comment/index' },
  'PUT /v1/sermons/:id/comments/:commentId': { action: 'v1/comment/edit' },
  'DELETE /v1/sermons/:id/comments/:commentId': { action: 'v1/comment/delete' },




  //  ╦ ╦╔═╗╔╗ ╦ ╦╔═╗╔═╗╦╔═╔═╗
  //  ║║║║╣ ╠╩╗╠═╣║ ║║ ║╠╩╗╚═╗
  //  ╚╩╝╚═╝╚═╝╩ ╩╚═╝╚═╝╩ ╩╚═╝


  //  ╔╦╗╦╔═╗╔═╗
  //  ║║║║╚═╗║
  //  ╩ ╩╩╚═╝╚═╝


};
