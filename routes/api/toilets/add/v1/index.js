var express = require('express')
var router = express.Router()

router.get('/', function(req, res){
    res.send("API add v1 working perfectly");
});

module.exports.route = router;