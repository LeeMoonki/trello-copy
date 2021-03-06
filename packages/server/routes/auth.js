const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const db = require('../db/users');
const { resformat }  = require('../js/utils');

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  const secret = req.app.get('jwt-secret');
  let user = {};
  
  const pr = new Promise((resolve, reject) => {
    if (user = db.get(email)) {
      if (db.chkpwd(user.id, password)) {
        jwt.sign(
          { id: user.id, email: user.email, name: user.name },
          secret,
          { expiresIn: '30d', issuer: 'trellocopy' },
          (err, token) => {
            if (err) {
              reject(err);
            }
            resolve({ token, name: user.name });
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
    .then(info => {
      res.json(resformat(true, info));
    })
    .catch(err => {
      res.status(403).json(resformat(false, { code: 403, message: err.message }));
    });
});

router.post('/logout', (req, res) => {
  res.json(resformat(true));
});

module.exports = router;
