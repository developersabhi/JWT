const jwt = require("jsonwebtoken");
const secretKey = "asdf_asdf_1234";

function verifyToken(req, res, next) {
    const bearerHeader = req.headers["authorization"];
    if(typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(" ");
        const token = bearer[1];
        req.token = token;
        console.log(token)
        next();
    } else{
        res.send({
            result: 'Token is not Valid'
        })
    }
}

module.exports = 
    verifyToken;
