var User

function Go() {

    User = document.getElementById("Name").value;
    localStorage.setItem("Name", User);
    document.getElementById("Name").value = "";
    window.location = "Home.html";
}