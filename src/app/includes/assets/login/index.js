const express = require('express');
const router = express.Router();
var jwt = require('jsonwebtoken');
let authObj = {};
jwt.sign({
    'username':'sangram','password':1234
}, 'secret', { expiresIn: 60 * 60 }, function (err, token) {
        authObj.token = token;
        console.log('dsadsa', token);
});
router.post('/', function (req, res) {
    let username = req.body.username;
    let password = req.body.password;
    const uidToken = {"token":authObj.token};
    if (username == 'sangram.k@gmail.com' && password == 1234) {
        res.send(uidToken);
    } else {
        res.send({ "error": "Invalid Username & Password" });
    }
    
});
module.exports = router;