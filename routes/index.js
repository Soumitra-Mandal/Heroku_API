var express = require('express');
var router = express.Router();

var users = [
        { "name": "Steven", "work": "gift_shopkeeper" },
        { "name": "Marc", "work": "mercenary" },
        { "name": "Mr Knight", "work": "Diplomat" },
        { "name": "Moon Knight", "work": "superhero" },
        { "name": "Khonsu", "work": "moon_god" },


    ]
    /* GET home page. */
router.get('/', function(req, res, next) {
    res.contentType = "json";
    res.send(users);
});

router.post('/', function(req, res, next) {
    data = req.body;
    res.status = 200;
    res.header
    res.send([...users, data]);
});
router.put('/', function(req, res, next) {
    res.status(400).send("you are a mistake");

});
router.delete('/', function(req, res, next) {
    res.status = 404;
    res.send("this is not a delete request");
});

module.exports = router;