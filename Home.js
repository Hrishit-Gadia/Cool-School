var firebaseConfig = {
    apiKey: "AIzaSyD2BvR-Ds3IcP9-PlgF4xBNYocEc-9uYho",
    authDomain: "cool-school-72486.firebaseapp.com",
    databaseURL: "https://cool-school-72486-default-rtdb.firebaseio.com",
    projectId: "cool-school-72486",
    storageBucket: "cool-school-72486.appspot.com",
    messagingSenderId: "684010410707",
    appId: "1:684010410707:web:e24af908916e03ae947a26"
};
firebase.initializeApp(firebaseConfig);

var newname = localStorage.getItem("Name");
document.getElementById("Name").innerHTML = "Welcome " + newname + " !";

function Add() {
    var Name = document.getElementById("Roomname").value;
    firebase.database().ref("/").child(Name).update({
        UserName: newname
    });

    window.location = "Chat.html";
    document.getElementById("Roomname").value = "";
    localStorage.setItem("Room", Name);
}

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                Room_names = childKey;
                console.log(Room_names);
                var row = "<div id = " + Room_names + " class = 'room_name' onclick = 'go(this.id)'> @" + Room_names + "</div> <Hr>";
                document.getElementById("output").innerHTML += row ;
          });
    });
}
getData();

function go(name) {
    window.location = "Chat.html";
    localStorage.setItem("RoomName", name);
}