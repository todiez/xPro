const express = require("express");
const app = express();
const cors = require("cors");
const dal = require('./dal.js')


//serve static files
app.use(express.static("public"));
app.use(cors());

//routes

//to create new user
app.get("/account/create/:name/:email/:password", (req, res) => {
    dal.create(req.params.name, req.params.email, req.params.password)
        .then((user) => {
            console.log(user);
            res.send(user);
        });

    // res.send({
    //     name: req.params.name,
    //     email: req.params.email,
    //     password: req.params.password
    // });
});

//to return all accounts data
app.get("/account/all", (req, res) => {
    dal.all()
        .then((docs) => {
            console.log(docs);
            res.send(docs);
        });

    // res.send({
    //     name: "paz",
    //     email: "paz@diez.cc",
    //     password: "bestdogever"
    // });
});

const port = 3000;
app.listen(port);
console.log('Running on port: ' + port);
