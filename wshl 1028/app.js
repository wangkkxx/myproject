const express = require('express');
const bodyParser = require('body-parser');

var app = express();
var server = app.listen(8000);

const domains=require("./routers/domains");

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));
app.use("/domains",domains);