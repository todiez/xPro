const express = require('express');
const http = require("http");

var restaurants = [
  { id: 0, name: "Woodshill" },
  { id: 1, name: "Fiorellas" },
];

const app = express();
const app1 = express();

//options for public folder
app.use(express.json());
let options = {
  dotfiles: "ignore",
  redirect: false,
};

//adding img folder or rather public to access
app.use(express.static("public", options));

app.get("/", (req, res) => {
  let html = "<img src='img/tenor.gif'/>";
  let key = "<a href='.secret/key.txt'>secret key </a>";
  res.send(html + key);
});
app.get("/restaurants", (req, res) => {
  res.send(restaurants);
});

app.post("/restaurant", (req, res) => {
  res.send(`${req.body.name} created`);
});

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/plain");
    if(req.method !== "GET" || req.url !== "/order") {
        res.statusCode = 405;
        res.end('{"error":"Method not allowed"}');
        return;
    }

    res.write("<h1>hello</h1>")
    res.end();
})

app1.get("/order", (req, res) => {
    res.send("<h1>hello, please place your order</h1>")
})




app.listen(4000, () => console.log("Listening on 4000"));

server.listen(3000, () => {
    console.log('listening on 3000');
});

app1.listen(4001, () => console.log("Listening on 4001"));

