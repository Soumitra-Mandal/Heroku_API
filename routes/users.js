var express = require('express');
var router = express.Router();
var User = require('../models/User');


/* GET home page. */
router.get('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    User.find().then((result) => {
        res.send(result);
    });
});

router.post('/', function(req, res, next) {
    const user = new User(req.body);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    user.save()
        .then((result) => {
            res.send(result);
            console.log("entered successfully");
        })
        .catch((err) => console.log(err));
});
router.put('/', function(req, res, next) {
    res.status(405).send("Updation not allowed.");

});
router.delete('/', function(req, res, next) {
    res.status(405).send("Deletion not allowed.");
});

module.exports = router;