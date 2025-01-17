const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
let db = null;

console.log('inside dal');


//connect to Mongo
MongoClient.connect(url, {useUnifiedTopology: true}, function(err, client) {
    console.log('Connected successfully to db server');

    //connect to myproject database
    db = client.db('myproject');
});

//create user account
function create(name, email, password) {
    return new Promise((resolve, reject) => {
        const collection = db.collection('users');
        const doc = {name, email, password, balance: 0 };
        collection.insertOne(doc, {w:1}, function(err, result) {
            err ? reject(err) : resolve(doc);
        })
    })
}

//return all users
function all() {
    return new Promise((resolve, reject) => {
        const customers = db
            .collection('users')
            .find({})
            .toArray(function (err, docs) {
                err ? reject(err) : resolve(docs);
            });
    })
}

//exporting functions to use them in the app
module.exports = {create, all};