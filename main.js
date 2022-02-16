var username, group;
const date = findDate();
const loginScreen = document.getElementById("login-section");

// onclick Dummy button
document.getElementById("dummy-button").addEventListener("click", function () {
  document.getElementById("login-section").style.display = "block";
  console.log("login screen display success");
});

//Check for cookies
let cookies = checkCookies();
if (cookies == false) {
  //load login prompt and get username + group
  loadLoginScreen();

  //focus nickname field
  document.getElementById("nickname").focus();

  setCookie("username", username, 120);
  setCookie("group", group, 120);
  console.log("cookies set successfully");
}

username = getCookie("username");
group = getCookie("group");
console.log("Cookies retrieved successfully");

// display name & group
console.log(username + " " + group);

document.getElementById("username").innerHTML = username;
// document.getElementById("group").innerHTML = group;

// display date month day
document.getElementById("date").innerHTML =
  "It's " + date[0] + ", " + date[1] + " " + date[2];

/* FUNCTIONS */

//Check cookies
function checkCookies() {
  if (document.cookie == "") {
    return false;
  } else {
    return true;
  }
}

//Get Username and Group
function loadLoginScreen() {
  loginScreen.style.display = "block";
  document.getElementById("nickname").focus();
  console.log("display login screen success");
}

// login screen code
document
  .getElementById("login-submit-btn")
  .addEventListener("click", function () {
    loginScreen.style.display = "none";
  });

// function getUsernameAndGroup() {
//   do {
//     username = prompt("Enter your nick name");
//     if (username == null || username == "") {
//       continue;
//     } else {
//       group = prompt("Enter your semester group (4.1/4.2)");
//       if (group != "4.1" || group != "4.2") {
//         continue;
//       }
//     }
//   } while (username == null || username == "");
// }

// Set a Cookie
function setCookie(cName, cValue, expDays) {
  let date = new Date();
  date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();
  document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}

//Get a cookie
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// Clear cookies
function clearCookies() {
  document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
  document.cookie = "group=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
  location.reload();
}

// Get date, month, day to an array
function findDate() {
  const dateArray = [];
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const d = new Date();

  dateArray[0] = weekday[d.getDay()];
  dateArray[1] = month[d.getMonth()];
  dateArray[2] = d.getDate();
  return dateArray;
}
