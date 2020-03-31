const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const db = require('../db/users');

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  const secret = req.app.get('jwt-secret');
  let user = {};

  const pr = new Promise((resolve, reject) => {
    if (user = db.get(email)) {
      if (db.chkpwd(user.id, password)) {
        jwt.sign(
          { id: user.id, email: user.email },
          secret,
          { expiresIn: '30d', issuer: 'trellocopy' },
          (err, token) => {
            if (err) {
              reject(err);
            }
            resolve(token);
          },
        );
      } else {
        reject(new Error('wrong password'));
      }
    } else {
      reject(new Error('no such user'));
    }
  });

  pr
    .then(token => {
      res.json({
        success: true,
        token
      });
    })
    .catch(err => {
      res.status(403).json({
        success: false,
        message: err.message
      });
    });
});

module.exports = router;
