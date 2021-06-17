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

function addroom() {
    var Name = document.getElementById("Roomname").value;
    firebase.database().ref("/").child(Name).update({
        RoomName : "Working?"
    });
}

function update() {
    var newname = localStorage.getItem("Name");
    document.getElementById("Name").innerHTML = newname;
}