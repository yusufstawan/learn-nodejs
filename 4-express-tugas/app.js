const express = require('express');
const app = express();

const usersRouter = require('./routes/users');
const homeRoute = require('./routes/home');

app.use(usersRouter)
app.use(homeRoute)

app.listen(3000);