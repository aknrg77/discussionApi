const express = require('express');
const {login,signup} = require('../controller/users')
const app = express.Router();

app.get("/login",login);
app.get("/signup",signup);


module.exports = app;