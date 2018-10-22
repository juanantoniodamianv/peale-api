/**
 * refreshToken
 *
 * @description :: Policy to generate a new Token Access with Refresh Token
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
      return res.json(401, {error: 'Format is Authorization: Bearer [token]'});
    }
  } else if (req.param('token')) {
    token = req.param('token');

    delete req.query.token;
  } else {
    return res.json(401, {error: 'No authorization header was found'});
  }

  await sails.helpers.jwt.verify(token, async (err, decoded) => {
    console.log(err)
    if (err) return res.json(401, {error: 'Invalid Token!'});
    
    const payload = decoded;
    const userid = payload.uid;
    const tokens = await sails.helpers.jwt.generate(userid);
    req.token = tokens.token;
    req.refreshToken = tokens.refreshToken

    User.find({ id: userid}).limit(1).then((user) => {
      req.current_user = user;
      next();
    })
    
  });

}

