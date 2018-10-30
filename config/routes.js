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

  /* User Management */
  'POST /v1/signup': { action: 'v1/user-account/signup' },
  'PUT /v1/signin': { action: 'v1/user-account/signin' },
  'POST /v1/forgot-password': { action: 'v1/user-account/forgot-password' },
  'POST /v1/refresh-token': { action: 'v1/user-account/refresh-token' },

  /* Get all Sermons, Increment views count, Mark Sermon as played */

  'GET /v1/sermons': { action: 'v1/sermon/index' },
  'PUT /v1/sermons/:id': { action: 'v1/sermon/show' },

  /********** USER LOGIN IS REQUIRED: **********/

  /* Get all tags, get specific tag, vote a tag from the list */
  'GET /v1/tags': { action: 'v1/tag/index' },
  'GET /v1/tags/:id': { action: 'v1/tag/show' },
  'POST /v1/sermons/:id/vote': { action: 'v1/tag/user-tag/vote' },

  /* Get all favorites, Add/Remove Sermon from my favorites list */
  'GET /v1/sermons/favorite': { action: 'v1/sermon/favorite/index' },
  'POST /v1/sermons/:id/favorite': { action: 'v1/sermon/favorite/add-favorite' },
  'DELETE /v1/sermons/:id/favorite': { action: 'v1/sermon/favorite/remove-favorite' },

  /* Create/Delete/Edit/Index Comments */
  'GET /v1/sermons/:id/comments': { action: 'v1/comment/index' },
  'POST /v1/sermons/:id/comments': { action: 'v1/comment/create' },
  'PUT /v1/sermons/:id/comments/:commentId': { action: 'v1/comment/edit' },
  'DELETE /v1/sermons/:id/comments/:commentId': { action: 'v1/comment/delete' },


  //  ╦ ╦╔═╗╔╗ ╦ ╦╔═╗╔═╗╦╔═╔═╗
  //  ║║║║╣ ╠╩╗╠═╣║ ║║ ║╠╩╗╚═╗
  //  ╚╩╝╚═╝╚═╝╩ ╩╚═╝╚═╝╩ ╩╚═╝


  //  ╔╦╗╦╔═╗╔═╗
  //  ║║║║╚═╗║
  //  ╩ ╩╩╚═╝╚═╝


};
