const path = require('path');

const express = require('express');

const rootDir = require('../utils/path');

const routers = express.Router();

routers.use('/', (req, res, next) => {
  console.log('In  middleware! /');
  res.sendFile(path.join(rootDir, 'views', 'home.html'));
})

module.exports = routers;