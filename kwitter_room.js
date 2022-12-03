
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBFQ-W9sb30A0F6NAPbCXqP0oNLv_6C67A",
      authDomain: "kwitter-80805.firebaseapp.com",
      databaseURL: "https://kwitter-80805-default-rtdb.firebaseio.com",
      projectId: "kwitter-80805",
      storageBucket: "kwitter-80805.appspot.com",
      messagingSenderId: "326637568738",
      appId: "1:326637568738:web:aea541945d17a25c2054bb",
      measurementId: "G-DCBKBZ0PJ0"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("text_username").innerHTML = "Welcome " + user_name +"!";

function add_room() {

      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room name" , room_name);

      window.location= "kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name - " + Room_names);
      row = "<div id=" + room_names + " class='room_name' onclick='redirectToRoomName(this.id)' >#"+  Room_names +"</div> <hr>";
      document.getElementById("output").innerHTML = row;

      //End code
      });});}
getData();

function redirectToRoomName(name) {

      console.log(room_name);
      localStorage.setItem("room name" , room_name);
      window.location= "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("room name" , room_name);
      localStorage.removeItem("username" , user_name);
      window.location= "index.html";

}