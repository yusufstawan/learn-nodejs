const path = require('path');

const express = require('express');

const rootDir = require('../utils/path');

const router = express.Router();

router.use('/users', (req, res, next) => {
  console.log('In  middleware! /users');
  res.sendFile(path.join(rootDir, 'views', 'users.html'));
})

module.exports = router;