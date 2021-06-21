//Firebase Links

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


// Variables

var Room = localStorage.getItem("RoomName");
var User = localStorage.getItem("Name");
var Texted;
var Useful = 0;

function Set() {
    document.getElementById("Room-Name").innerHTML = "@ " + Room;
    document.getElementById("User-Name").innerHTML = "@ " + User;
}

function out() {
    localStorage.removeItem("RoomName");
    localStorage.removeItem("Name");
    window.location = "index.html";
}

function go(){
    Texted = document.getElementById("word").value;

    firebase.database().ref(Room).push({
        Name : User,
        Message : Texted,
        Useful : Useful
    });

    document.getElementById("word").value = "";
}