/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

  /***************************************************************************
  *                                                                          *
  * Default policy for all controllers and actions, unless overridden.       *
  * (`true` allows public access)                                            *
  *                                                                          *
  ***************************************************************************/

  '*': ['isAuthorized'],

  'v1/user-account/*': true,
  //'v1/user-account/update-account': 'isAuthorized',
  'v1/user-account/refresh-token': ['refreshToken'],

  'v1/sermon/*': true,

  'v1/tag/*': true,

  'v1/comment/index': true,

  //'v1/comment/edit': ['isAuthorized', 'isCurrentUser'],
  //'v1/comment/delete': ['isAuthorized', 'isCurrentUser'],

};
