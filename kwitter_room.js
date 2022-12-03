
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyB6xVkO75rVAVk8c0ioiO5ThwsEDeS7v5o",
      authDomain: "kwitter-e7a4b.firebaseapp.com",
      databaseURL: "https://kwitter-e7a4b-default-rtdb.firebaseio.com",
      projectId: "kwitter-e7a4b",
      storageBucket: "kwitter-e7a4b.appspot.com",
      messagingSenderId: "260565444818",
      appId: "1:260565444818:web:71b1f403628f6253d3a50b",
      measurementId: "G-LRVVTCZ8ZG"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
