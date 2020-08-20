
var index = require('./routes/routes.js');

const express = require('express');
const bodyparser = require("body-parser");
const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

app.use('/',index);

const mongoose = require('mongoose');



app.listen(3000, function (err){
    if (err)
    console.log(err)
    else
    console.log("Server listening on port 3000");
})
