const express = require('express');
const dotenv = require('dotenv').config();
const routes = require('./routes')
const db = require('./config/mongoose');
const app = express();
const port = process.env.PORT;
app.use(routes);

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})