//get data from local storage
const userData = JSON.parse(localStorage.getItem("user"));
const username = document.getElementById("username");
const logoutbtn = document.getElementById("logoutbtn");
const delAcctbtn = document.getElementById("delAcctbtn");
if (!userData) {
  logoutbtn.style.display = "none";
  window.location.href = "login-signup.html";
} else {
  username.innerText = `${userData.fullName}`;
}
logoutbtn.addEventListener("click", function (event) {
  event.preventDefault();
  logoutbtn.style.display = "none";
  delAcctbtn.style.display = "none";

  username.innerText = "You are not signedin";
  setTimeout(() => {
    window.location.href = "login-signup.html";
  }, 2000);
  return;
});
delAcctbtn.addEventListener("click", function (event) {
  event.preventDefault();
  confirm("Are you sure you want to delete account");
  logoutbtn.style.display = "none";
  delAcctbtn.style.display = "none";
  username.innerText = "Account deleted";
  localStorage.clear("userData");
  setTimeout(() => {
    window.location.href = "login-signup.html";
  }, 2000);
  return;
});
