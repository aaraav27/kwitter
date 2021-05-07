var firebaseConfig = {
      apiKey: "AIzaSyCwtrTnD_LqDxg-droXSnIlh1vOlE3qXOg",
      authDomain: "kwitter-app-218da.firebaseapp.com",
      databaseURL: "https://kwitter-app-218da-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-218da",
      storageBucket: "kwitter-app-218da.appspot.com",
      messagingSenderId: "249420896851",
      appId: "1:249420896851:web:cdf537f3522772dcc684a6",
      measurementId: "G-P8R5Z0D810"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
 username = localStorage.getItem("user_name");
 document.getElementById("user_name").innerHTML="welcome "+username;

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       room_names = childKey;
      //Start code
console.log("room_name -" + room_names);
row= "<div class='room_name' id="+room_names+" onclick='redirectToRoomName(this.id)'>#" + room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function add_room(){
      room_name = document.getElementById("room_input").value;
     firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
     });
     localStorage.setItem("room_name" , room_name);
window.location = "kwitter_page.html";  

     } 

     function redirectToRoomName(name){
console.log(name);

localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";

     }

     function logout(){
           localStorage.removeItem("user_name");
           localStorage.removeItem("room_name");
           window.location="index.html";
     }

