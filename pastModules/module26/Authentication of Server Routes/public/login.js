    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    var firebaseConfig = {
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

    // get elements
    const email    = document.getElementById('email');
    const password = document.getElementById('password');
    const login    = document.getElementById('login');
    const signup   = document.getElementById('signup');
    const logout   = document.getElementById('logout');
    const loginMsg = document.getElementById('loginMsg');
    const routeMsg = document.getElementById('routeMsg');

    // login
    login.addEventListener('click', e => {
        const auth  = firebase.auth();      
        const promise = auth.signInWithEmailAndPassword(email.value, password.value);
        promise.catch(e => console.log(e.message));
    });

    // signup
    signup.addEventListener('click', e => {
        const auth  = firebase.auth();
        const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
        promise.catch(e => console.log(e.message));
    });

    // logout
    logout.addEventListener('click', e => {
        firebase.auth().signOut();
    });

    // login state
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser){
            console.log(firebaseUser);
            logout.style.display = 'inline';
            login.style.display  = 'none';
            signup.style.display = 'none';
            loginMsg.innerHTML   = 'Authentication Success!';
        }
        else{
            console.log('User is not logged in');
            logout.style.display = 'none';          
            login.style.display  = 'inline';
            signup.style.display = 'inline';
            loginMsg.innerHTML   = 'Not Authenticated!';
        }
    });

    function callOpenRoute(){
        (async () => {
            let response = await fetch('/open');
            let text     = await response.text();
            console.log('response.text:', response);
            routeMsg.innerHTML = text;
        })();
    }

    function callAuthRoute(){
        // call server with token
        firebase.auth().currentUser.getIdToken()
            .then(idToken => {
                console.log('idToken:', idToken);

                (async () => {
                    let response = await fetch('/auth', {
                        method: 'GET',
                        headers: {
                            'Authorization': idToken
                        }
                    });
                    let text = await response.text();
                    console.log('response:', response);
                    routeMsg.innerHTML = text;
                })();

            }).catch(e => console.log('e:',e));
    }    