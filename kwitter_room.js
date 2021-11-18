
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDjozcsFPMfCKHkP3-57jwt9moknM2lsKM",
      authDomain: "kwitter-11d19.firebaseapp.com",
      databaseURL: "https://kwitter-11d19-default-rtdb.firebaseio.com",
      projectId: "kwitter-11d19",
      storageBucket: "kwitter-11d19.appspot.com",
      messagingSenderId: "865648164764",
      appId: "1:865648164764:web:723887ebfb43d7f8c85259"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -" + Room_names);
      row = "<div class= 'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();
function addRoom()
{
      room_name= document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose :"adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";


}
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";

}