const mongoClient = require('mongodb').MongoClient;
const url = 'mongodb://127.0.0.1:27017';

mongoClient.connect(url, function(err, client) {
    console.log('connected');
});