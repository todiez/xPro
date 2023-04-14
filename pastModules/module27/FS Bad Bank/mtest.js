const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'myproject';


async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');

  //database name
  const db = client.db(dbName);


  //new user
  var name = 'user' + Math.floor(Math.random() * 99999 );
  var email = name + '@diez.guru';

  //insert into customer table
  var collection = db.collection('customers');
  var doc = {name, email};
  collection.insertOne(doc, {w:1}, function(err, result) {
    console.log('Doc inserted');
  });

  var customers = db
    .collection('customers')
    .find()
    .toArray(function(err, docs) {
        console.log('Collection: ', docs);

        client.close();
    })

}

main()
  .then(console.log)
  .catch(console.error)
  