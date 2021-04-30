function addUser() {
    var username = document.getElementById("userName").value;

    localStorage.setItem("user_name", username);

    window.location = "kwitter.html";
}