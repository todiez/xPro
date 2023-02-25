const express = require('express');
const app     = express();
var low     = require('lowdb');
var pull = require('lodash.pull');
var fs      = require('lowdb/adapters/FileSync');
var adapter = new fs('db.json');
var db      = low(adapter);

// configure express to serve static files from public directory
// ------------------------------------------------------------------
app.use(express.static('public'));

// init the data store
db.defaults({ posts: []}).write();

// list posts
app.get('/data', function(req, res){     

    res.send(db.get('posts').value());

});

// ----------------------------------------------------
// add post - test using:
//      curl http://localhost:3000/posts/ping/1/false
// ----------------------------------------------------
app.get('/posts/:title/:id/:published', function(req, res){

    var post = {
        'id' : req.params.id,
        'title' : req.params.title,
        'published' : req.params.published,
    }
    db.get('posts').push(post).write();
    console.log(db.get('posts').value());
    res.send(db.get('posts').value());

});

// ----------------------------------------------------
// filter by published state - test using:
//      curl http://localhost:3000/published/true
// ----------------------------------------------------
app.get('/published/:boolean', function(req, res){

    // YOUR CODE

});

// ----------------------------------------------------
// update published value - test using:
//      curl http://localhost:3000/published/1/true
// ----------------------------------------------------
app.get('/published/:id/:boolean', function(req, res){

    db.get('posts').find({id: req.params.id})
            .assign({published: req.params.boolean})
            .write();

});

// ----------------------------------------------------
// delete entry by id - test using:
//      curl http://localhost:3000/delete/2
// ----------------------------------------------------
app.get('/delete/:id/', function(req, res){
    db.get("posts").remove({id: req.params.id}).write();
});

app.get('/deleteAll', function(req, res){
    db.get("posts").remove().write();
    res.status(204).send();

});

// start server
// -----------------------
app.listen(3000, function(){
    console.log('Running on port 3000!')
})
