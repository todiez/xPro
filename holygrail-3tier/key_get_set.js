var redis = require("redis");
// var client = redis.createClient();

// //single write/read
// client.set("my_key", "Hello World");
// client.get("my_key", function (err, reply) {
//   console.log(reply);
// });

// //multiple write/read
// client.mSet("header", 0, "left", 0, "article", 0, "right", 0, "footer", 0);
// client.mGet(
//   ["header", "left", "article", "right", "footer"],
//   function (err, value) {
//     console.log(value);
//   }
// );

const client = redis.createClient();

async function run() {
  
  client.connect();

  console.log(client.isOpen); // this is true

 
   //single write/read
  await client.set("my_key", "Hello World");
  await client.get("my_key", function (err, reply) {
     console.log(reply);
   });
 
}

run();



