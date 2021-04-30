// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD1VXZYtj0Hca6Mym1d7_xAaYZprwGuDH4",
    authDomain: "p-94-database.firebaseapp.com",
    projectId: "p-94-database",
    databaseURL: "https://p-94-database-default-rtdb.firebaseio.com",
    storageBucket: "p-94-database.appspot.com",
    messagingSenderId: "943332840228",
    appId: "1:943332840228:web:55274fb2f4ab68fdd219b1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var user_name = localStorage.getItem("user_name");
var room_name = localStorage.getItem("roomName");

function send() {
    var msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
          });
          document.getElementById("msg").innerHTML = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
   firebase_message_id = childKey;
   message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
like = message_data['like'];
message = message_data['message'];

name_tag = "<h4>" + name + "<img class='user_tick' src='tick.png'></h4>";
message_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_btn = "<button class='btn btn-warning' id=" + firebase_message_id + " value = "+ like + " onclick='updateLike(this.id)'>";
span_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like : " + like + " </span> </button> <hr>";
row = name_tag + message_tag + like_btn + span_tag;
document.getElementById("output").innerHTML += row;
//End code
} });  }); }
getData();

function updateLike(message_id){
console.log("Clicked on like" + message_id);
button_id = message_id;
likes = document.getElementById(button_id).value;
updated_likes = Number(likes) + 1;
console.log(updated_likes);
firebase.database().ref(room_name).child(message_id).update({
      like : updated_likes
});
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("roomName");
window.location = "kwitter_login.html";
}