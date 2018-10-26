/**
 * existToken
 *
 * @description :: Policy to check if user is authorized with JSON web token
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Policies
 */


module.exports = async function (req, res, next) {
  let token;

  if (req.headers && req.headers.authorization) {
    var parts = req.headers.authorization.split(' ');
    if (parts.length == 2) {
      var scheme = parts[0],
        credentials = parts[1];

      if (/^Bearer$/i.test(scheme)) {
        token = credentials;
      }
    } else {
      return res.json(401, { error: 'Format is Authorization: Bearer [token]' });
    }
  } else if (req.param('token')) {
    token = req.param('token');

    delete req.query.token;
  } else {
    token = undefined;
  }

  if (token === undefined) {
    req.current_user = undefined;
    next();
  } else {
    await sails.helpers.jwt.verify(token, (err, decoded) => {
      if (err) return res.json(401, { error: 'Invalid Token!' });
      req.token = token;
      User.find({ id: decoded.uid }).limit(1).then((user) => {
        req.current_user = user;
        next();
      })
    });
  }

}

