const jwt = require('jsonwebtoken');
const { resformat } = require('../js/utils');

const authMiddleware = (req, res, next) => {
  
  const token = req.headers.authorization || req.query.token;
  const secret = req.app.get('jwt-secret');
  
  if (!token) {
    res.status(403).json(resformat(false, { code: 403, message: 'token is missing' }));
    return;
  }

  const pr = new Promise((resolve, reject) => {
    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        reject(err);
      } else {
        resolve(decoded);
      }
    });
  });

  pr
    .then(decoded => {
      req.decoded = decoded;
      next();
    })
    .catch(err => {
      res.status(403).json(resformat(false, { code: 403, message: err.message }))
    });
};

module.exports = authMiddleware;
