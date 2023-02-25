var low     = require('lowdb');
var fs      = require('lowdb/adapters/FileSync');
var adapter = new fs('db.json');
var db      = low(adapter);

// init the data store
// ---------------------------
db.defaults({ posts: []}).write();

// Edit db.json content using native JS API
db.get("posts").push({ id: 1, title: 'lowdb is awesome', publish: true }).write();
db.get("posts").push({ id: 2, title: 'lowdb is 1', publish: true }).write();
db.get("posts").push({ id: 3, title: 'lowdb is asome', publish: true }).write();
db.get("posts").push({ id: 4, title: 'lowdb wesome', publish: true }).write();


console.log(db.get('posts').value());

// count posts
// ----------------------------
// YOUR CODE

// find all posts ids
// ----------------------------
// YOUR CODE

// all matches of published false
// ----------------------------
// YOUR CODE

// find post with published false
// ----------------------------
// YOUR CODE
