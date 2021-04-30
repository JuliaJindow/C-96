
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

    var userName = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + userName;


    function addRoom() {
          var roomName = document.getElementById("roomName").value;
          firebase.database().ref("/").child(roomName).update({
            purpose : "adding user"
            });
            localStorage.setItem("roomName", roomName);
            //window.location = "kwitter_page.html";
            alert("Add room................alsert");
            
    }

function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("room name" + Room_names);
       var row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
       document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("roomName", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("roomName");
      window.location = "kwitter_login.html";
}