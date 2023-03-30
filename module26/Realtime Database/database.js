

(function(){
	// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";

	
	// Your web app's Firebase configuration
	// For Firebase JS SDK v7.20.0 and later, measurementId is optional
	const firebaseConfig = {
		apiKey: "AIzaSyDeK8QT6bmREqlFhfwBuFIhuH5U3i2-QR8",
		authDomain: "firstfirebase-fca93.firebaseapp.com",
		databaseURL: "https://firstfirebase-fca93-default-rtdb.europe-west1.firebasedatabase.app",
		projectId: "firstfirebase-fca93",
		storageBucket: "firstfirebase-fca93.appspot.com",
		messagingSenderId: "450099128247",
		appId: "1:450099128247:web:84a51452f16a4047466a32"
	  };
	// Initialize Firebase
	firebase.initializeApp(firebaseConfig);


	// handle on firebase db
	const db = firebase.database();

	// get elements
	const message = document.getElementById('message');
	const write   = document.getElementById('write');
	const read	  = document.getElementById('read');
	const status  = document.getElementById('status');

	// write
	write.addEventListener('click', e => {
		console.log('write triggered');
		const messages = db.ref('messages');

		// simple id - ok for example, do not use in production
		const id = (new Date).getTime(); 

		// write to db
		messages.child(id).set({'message' : message.value})
			.then(function(){
				status.innerHTML = "Wrote to DB!";
			});
	});

	// read
	read.addEventListener('click', e => {
		console.log('read triggered');
		status.innerHTML = '';
		const messages = db.ref('messages');

		messages.once('value')
		  .then(function(dataSnapshot) {
		  	var data = dataSnapshot.val();
		  	var keys = Object.keys(data);

		  	keys.forEach(function(key){
		  		console.log(data[key]);
				status.innerHTML += JSON.stringify(data[key]) + '<br>';
		  	});
		});
	});


}());