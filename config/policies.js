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

  'v1/user-account/refresh-token': ['refreshToken'],

  'v1/comment/index': true,

  'v1/tag/index': true,

  'v1/tag/show': true,

  'v1/tag/user-tag/vote': ['tokenExist'],

  'v1/sermon/index': ['tokenExist'],

  'v1/sermon/show': ['tokenExist'],

};
