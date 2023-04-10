const express = require("express");
const app = express();
const cors = require("cors");


//serve static files
app.use(express.static("public"));
app.use(cors());

//routes

//to create new user
app.get("/account/create/:name/:email/:password", (req, res) => {
    res.send({
        name: req.params.name,
        email: req.params.email,
        password: req.params.password
    });
});

//to login user
app.get("/account/login/:name/:email/:password", (req, res) => {
    res.send({
        email: req.params.email,
        password: req.params.password
    });
});

//to deposit funds
app.get("/account/deposit/:email/:password/:amount", (req, res) => {
    res.send({
        email: req.params.email,
        password: req.params.password,
        amount: req.params.amount
    });
});

app.get("/account/withdraw/:email/:password/:amount", (req, res) => {
    res.send({
        email: req.params.email,
        password: req.params.password,
        amount: req.params.amount
    });
});

app.get("/account/balance/:email/:password/:balance", (req, res) => {
    res.send({
        email: req.params.email,
        password: req.params.password,
        balance: req.params.balance
    });
});

//to return all accounts data
app.get("/account/all", (req, res) => {
    res.send({
        name: "paz",
        email: "paz@diez.cc",
        password: "bestdogever"
    });
});

const port = 3000;
app.listen(port);
console.log('Running on port: ' + port);
