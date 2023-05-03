'use strict';

let loggedIn = false; 
console.log(loggedIn);

const loginButton = document.getElementById('loginButton');
if(loginButton) {
  loginButton.addEventListener('click', () => {
    console.log('clicked');
    console.log(loggedIn);
    loggedIn = true;
    console.log(loggedIn);
    document.location.href = "profile.html";
  });
}

const accountButton = document.getElementById('accountButton');
if(accountButton) {
  accountButton.addEventListener("click", () => {
    console.log("clicked");
    console.log(loggedIn);
    if(loggedIn) {
      document.location.href = "profile.html";
    } else {
      document.location.href = "login.html";
    }
  });
}