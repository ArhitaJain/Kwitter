function addUser()
{
 user_name = document.getElementById("user_n").value;
 localStorage.setItem("User_name", user_name);

 window.location="chat.html";

}