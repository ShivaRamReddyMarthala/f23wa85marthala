var express = require('express');
var router = express.Router();

var round1 = math.random() * 100;
var round2 = math.random() *200;
var n1 = 0;
var n2 = 0;
var n3 = 0;

router.get('/', function(req, res, next) {
    n1 = math.cos(round1);
    n2 = math.cos(round2);
    n3 = math.cos(round1);

    res.send(`The Random Numbers are ${round1} and ${round2} <br><br> round applied is ${round1} is ${n1} <br><br> round applied is ${round2} is ${n2} <br><br> round applied is ${round1} is ${n3}`);


});

