let username = prompt("Please enter your name");
let group = prompt("What is your group? (4.1/4.2)");

if (username != null) {
  setCookie("username", username, 120);
  setCookie("group", group, 120);
}

// Set a Cookie
function setCookie(cName, cValue, expDays) {
  let date = new Date();
  date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();
  document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}

// Apply setCookie
setCookie("username", username, 30);
setCookie("group", group, 30);

// console.log(document.cookie);

cookies = document.cookie;
if (document.cookie == "") {
  console.log("null");
} else {
  console.log(cookies);
}

// delete cookie
// document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
// document.cookie = "group=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
