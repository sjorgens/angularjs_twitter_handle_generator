/**
 * Created by Scott on 1/11/16.
 */
var express = require('express');
var path = require('path');
var router = express.Router();

router.get('/', function(request, response){
    //response.send('Got Twitter Handle?');
    response.sendFile(path.join(__dirname, '../public/views/index.html'));
});

router.get('/twitterAdj', function(request, response){
    response.sendFile(path.join(__dirname, '../../data/twitterAdj.json'));
});

router.get('/twitterNoun', function(request, response){
    response.sendFile(path.join(__dirname, '../../data/twitterNoun.json'));
});

module.exports = router;