//YOUR FIREBASE LINKS
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
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0

      });
      document.getElementById("msg").value = "";
}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}