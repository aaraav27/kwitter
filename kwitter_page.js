//YOUR FIREBASE LINKS
user_name = localStorage.getItem("user_name"); 
room_name = localStorage.getItem("room_name");

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

    function send(){
      msg = document.getElementById("input1").value;
      firebase.database().ref(room_name).push(
  { 
        name:user_name,
        message : msg,
        like : 0
      });
      document.getElementById("input1").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data ['name'];
message = message_data ['message'];
like = message_data ['like'];
display_name = "<h4>"+name+"<img class='user_tick'src='tick.png'> </h4>";
display_message = "<h4 class ='message_h4'>"+message+"</h4>";
display_like_button = "<button class='btn btn-warning' id="+firebase_message_id+"value="+like+" onclick ='update_likes(this.id)'> ";
button_design = "<span class='glyphicon glyphicon-thumbs-up'>like:"+like+"</span> </button> <hr>";
row = display_name+display_message+display_like_button+button_design;
document.getElementById("output").innerHTML+=row;
      } });  }); }
getData();

function update_likes(message_id){
      console.log("click on the button");
      button_id = message_id;   
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes)+1;
      firebase.database().ref(room_name).child(message_id).update({
            like:updated_likes
      });
   }
     function logout(){
           localStorage.removeItem("user_name");
           localStorage.removeItem("room_name");
           window.location="index.html";
     }
