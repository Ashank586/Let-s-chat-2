var firebaseConfig={
    apiKey: "AIzaSyAI5Nev20INtv2O7X7kYWHDWGtCdnYar-0",
    authDomain: "ashank-s-twitter.firebaseapp.com",
    databaseURL: "https://ashank-s-twitter-default-rtdb.firebaseio.com",
    projectId: "ashank-s-twitter",
    storageBucket: "ashank-s-twitter.appspot.com",
    messagingSenderId: "750462265122",
    appId: "1:750462265122:web:21c4d8d0e369dcb320677b"
};
firebase.initializeApp(firebaseConfig);

var user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!😊😊😊😊😊";

function logout(){
    localStorage.removeItem("user_name");
    window.location="index.html";
}

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
          document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                Room_names = childKey;
                //Start code

                //End code
          });
    });
}
getData();
