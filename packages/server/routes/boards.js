const express = require('express');
const router = express.Router();
const db = require('../db/boards');
const { resformat } = require('../js/utils');

router.get('/', function(req, res) {
  const data = resformat(true, {
    list: db.get(),
  });

  res.json(data);
});

router.post('/', function(req, res) {
  const { title, backgroundColor } = req.body;
  const createdBoard = db.create(title, backgroundColor);

  res.json(resformat(true, createdBoard));
});

module.exports = router;
