var express = require('express');
var router = express.Router();
var User = require('../models/User');
router.get('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    User.find().then((result) => {
        res.send(result);
    });
});
router.post('/', function(req, res, next) {
    res.status(405).send("Post not allowed.");
});
router.put('/', function(req, res, next) {
    res.status(405).send("Updation not allowed.");
});
router.delete('/', function(req, res, next) {
    res.status(405).send("Deletion not allowed.");
});
router.get('/:id', function(req, res, next) {
    const id = req.params.id;
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    User.find({ id: id }).then((result) => {
        res.send(result);
    }).catch((err) => res.send(err));
});
router.post('/:id', function(req, res, next) {
    res.status(405).send("Post not allowed.");
});
router.put('/:id', function(req, res, next) {
    res.status(405).send("Updation not allowed.");
});
router.delete('/:id', function(req, res, next) {
    res.status(405).send("Deletion not allowed.");
});
module.exports = router;