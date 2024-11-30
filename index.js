const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

const verifyToken = require('./middleware/auth')

const secretKey = "asdf_asdf_1234";

app.post("/login", (req, res) => {
  const user = {
    id: 1,
    username: "anil",
    email: "anil@gmail.com",
  };
  jwt.sign({ user }, secretKey, { expiresIn: "3d" }, (err, token) => {
    res.json({
      token,
      user
    });
  });
});

app.post ('/profile',verifyToken,(req, res)=>{
    jwt.verify(req.token, secretKey,(err,authData)=>{
        if(err) {
            res.send({
                result: "Invalid Token"
            })
        }else {
            res.json({
                message: "Profile Accessed",
                authData
            })
        }
    })
})
// token verify


// function verifyToken(req, res, next) {
//     const bearerHeader = req.headers["authorization"];
//     if(typeof bearerHeader !== 'undefined') {
//         const bearer = bearerHeader.split(" ");
//         const token = bearer[1];
//         req.token = token;
//         console.log(token)
//         next();
//     } else{
//         res.send({
//             result: 'Token is not Valid'
//         })
//     }
// }

app.get("/get", (req, res) => {
  res.json({
    message: "A API",
  });
});

app.listen(5000, () => {
  console.log("App is runnig on 5000 port");
});
