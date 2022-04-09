var express = require('express');
var router = express.Router();
var User = require('../models/User');


/* GET home page. */
router.get('/', function(req, res, next) {
    User.find().then((result) => {
        res.send(result);
    });
});

router.post('/', function(req, res, next) {
    const user = new User(req.body);
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