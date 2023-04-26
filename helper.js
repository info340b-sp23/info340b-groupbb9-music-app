let loggedIn = false; 
console.log(loggedIn);
/*document.getElementById("accountButton").onclick = function () {
  console.log("clicked");
  if(loggedIn == true) {
    document.location.href = "profile.html";
  } else {
    document.location.href = "login.html";
  }
}

document.getElementById("loginButton").onclick = function () {
  console.log("clicked");
  location.href = "profile.html";
  loggedIn = true;
  console.log(loggedIn);
}*/

function accountDirect() {
  console.log("clicked");
  console.log(loggedIn);
  if(loggedIn) {
    document.location.href = "profile.html";
  } else {
    document.location.href = "login.html";
  }
}

function login() {
  console.log("clicked");
  console.log(loggedIn);
  loggedIn = true;
  console.log(loggedIn);
  document.location.href = "profile.html";
  
}