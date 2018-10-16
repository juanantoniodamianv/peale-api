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

  /* Sermons: List and Detail (WITHOUT LOGIN) */
  'GET /v1/sermons': { action: 'v1/sermon/index' },
  'GET /v1/sermons/:id': { action: 'v1/sermon/show' },

  /* Sermons: List and Detail (WITH LOGIN) */
  'GET /v1/sermons-me': { action: 'v1/sermon-me/index' },
  'GET /v1/sermons-me/:id': { action: 'v1/sermon-me/show' },

  /* Add/Remove Sermon to my favorites */
  'POST /v1/sermons-me/:id/add-favorite': { action: 'v1/sermon-me/add-favorite' },
  'DELETE /v1/sermons-me/:id/remove-favorite': { action: 'v1/sermon-me/remove-favorite' },


  //  ╦ ╦╔═╗╔╗ ╦ ╦╔═╗╔═╗╦╔═╔═╗
  //  ║║║║╣ ╠╩╗╠═╣║ ║║ ║╠╩╗╚═╗
  //  ╚╩╝╚═╝╚═╝╩ ╩╚═╝╚═╝╩ ╩╚═╝


  //  ╔╦╗╦╔═╗╔═╗
  //  ║║║║╚═╗║
  //  ╩ ╩╩╚═╝╚═╝


};
