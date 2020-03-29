const express = require('express');
const router = express.Router();
const db = require('../db/boards');

router.get('/', function(req, res) {
  console.log('get in');
  res.json({
    list: db.get(),
  });
});

router.post('/', function(req, res) {
  const { title, backgroundColor } = req.body;
  const createdBoard = db.create(title, backgroundColor);

  res.json(createdBoard);
});

module.exports = router;
