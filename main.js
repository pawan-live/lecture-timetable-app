// JSON DATA temporary fix
let data = {
  groups: [
    {
      id: "4.1",
      data: [
        {
          day: "mon",
          start: "10:30",
          end: "12:30",
          subject: "SPM",
          type: "lecture",
          hall_1: "N3E",
          hall_2: "",
        },
        {
          day: "mon",
          start: "13:30",
          end: "15:30",
          subject: "OOC",
          type: "lab",
          hall_1: "601 PC Lab NEW",
          hall_2: "N3B Lab",
        },
        {
          day: "mon",
          start: "16.30",
          end: "17:30",
          subject: "OOC",
          type: "lecture",
          hall_1: "13H-A",
          hall_2: "",
        },
        {
          day: "tue",
          start: "13.30",
          end: "15:30",
          subject: "ISDM",
          type: "lab",
          hall_1: "B403 PC Lab",
          hall_2: "A405 PC Lab",
        },
        {
          day: "tue",
          start: "15.30",
          end: "17:30",
          subject: "ISDM",
          type: "lecture",
          hall_1: "B501",
          hall_2: "",
        },
      ],
    },
    {
      id: "4.2",
      data: [
        {
          day: "mon",
          start: "10:30",
          end: "12:30",
          subject: "SPM",
          type: "lecture",
          hall_1: "N3E",
          hall_2: "",
        },
        {
          day: "mon",
          start: "13:30",
          end: "15:30",
          subject: "OOC",
          type: "lab",
          hall_1: "601 PC Lab NEW",
          hall_2: "N3B Lab",
        },
        {
          day: "mon",
          start: "16.30",
          end: "17:30",
          subject: "OOC",
          type: "lecture",
          hall_1: "13H-A",
          hall_2: "",
        },
        {
          day: "tue",
          start: "13.30",
          end: "15:30",
          subject: "ISDM",
          type: "lab",
          hall_1: "B403 PC Lab",
          hall_2: "A405 PC Lab",
        },
        {
          day: "tue",
          start: "15.30",
          end: "17:30",
          subject: "ISDM",
          type: "lecture",
          hall_1: "B501",
          hall_2: "",
        },
      ],
    },
    {
      id: "3.1",
      data: [
        {
          day: "mon",
          start: "10:30",
          end: "12:30",
          subject: "SPM",
          type: "lecture",
          hall_1: "N3E",
          hall_2: "",
        },
        {
          day: "mon",
          start: "13:30",
          end: "15:30",
          subject: "OOC",
          type: "lab",
          hall_1: "601 PC Lab NEW",
          hall_2: "N3B Lab",
        },
        {
          day: "mon",
          start: "16.30",
          end: "17:30",
          subject: "OOC",
          type: "lecture",
          hall_1: "13H-A",
          hall_2: "",
        },
        {
          day: "tue",
          start: "13.30",
          end: "15:30",
          subject: "ISDM",
          type: "lab",
          hall_1: "B403 PC Lab",
          hall_2: "A405 PC Lab",
        },
        {
          day: "tue",
          start: "15.30",
          end: "17:30",
          subject: "ISDM",
          type: "lecture",
          hall_1: "B501",
          hall_2: "",
        },
      ],
    },
  ],
};

let day = "mon";
let group_id = "4.1";
const now = new Date();
/*********** DECLARATIONS ***********/

var username, group;
var next_status; //stores string values [today, tomorrow, in 2 days,3 days, etc...]

// Create an object array for today's lectures
const todayLectures = []; //object array to store all details of lectures today
let nextLectures; //object array to store next upcoming lectures
// day = today's day. ex: mon, tue etc

const date = findDate();

/*********** DOM ***********/

const loginScreen = document.getElementById("login-section");

/*********** SEQUENCE ***********/

{
  // console.log(hh + ":" + mm);
}

//Check for cookies
let cookies = checkCookies();

if (cookies == false) {
  //load login prompt and get username + group
  loadLoginScreen(function () {
    document.getElementById("nickname").focus(); //set focus to field
    document // OK button code
      .getElementById("login-submit-btn")
      .addEventListener("click", function () {
        getUserInfo(function () {
          setCookie("username", username, 120);
          setCookie("group", group, 120);
          console.log("cookies set successfully");
          displayUserDetails(); //displays username and group
          setAvatar(Math.floor(Math.random() * 100 + 1));
        });
        loginScreen.style.display = "none";
      });
  });
} else {
  //read from cookies
  username = getCookie("username");
  group = getCookie("group");
  displayUserDetails();
  setAvatar(Math.floor(Math.random() * 100 + 1));
}

displayTime(); //displays time in the greeting card

// fetch("./table.json")
//   .then((response) => {
//     return response.json();
//   })
//   .then((jsondata) => {
//     object = jsondata;
//     console.log(object);
//   });

// console.log(date[5]); //24h time

getTodayLecs(function () {
  console.log(todayLectures);
});

let timedifftest = getTimeDiff("10:30", "12:30");
console.log(timedifftest);

let newDate =
  now.getDate() +
  "/" +
  now.getMonth() +
  "/" +
  now.getFullYear() +
  " " +
  todayLectures[0].start;
// console.log(newDate);

// console.log(data.groups[1].id);

/********** FUNCTIONS ***********/

function getTodayLecs(callback) {
  for (let i = 0; i < data.groups.length; i++) {
    if (data.groups[i].id == group_id) {
      for (let j = 0; j < data.groups[i].data.length; j++) {
        if (data.groups[i].data[j].day == day) {
          todayLectures[j] = data.groups[i].data[j];
        }
      }
    }
  }
  callback();
}

// Fetch JSON file
function fetchJSON() {
  fetch("./table.json")
    .then((response) => {
      return response.json();
    })
    .then((jsondata) => {
      //code here
      let db = jsondata;
    });
  return db;
}

// Get time difference
function getTimeDiff(time1, time2) {
  var todayDate =
    now.getDate() +
    "/" +
    parseInt(now.getMonth() + 1) + // getMonth() returns month starting from 0, convert to int and add 1
    "/" +
    now.getFullYear();

  let date1 = new Date(todayDate + " " + time1);
  let date2 = new Date(todayDate + " " + time2);
  console.log(todayDate + " " + time2);
  var diff = date2.getTime() - date1.getTime();
  var msec = diff;
  console.log(msec);
  var hh = Math.floor(msec / 1000 / 60 / 60);
  msec -= hh * 1000 * 60 * 60;
  var mm = Math.floor(msec / 1000 / 60);
  msec -= mm * 1000 * 60;
  var ss = Math.floor(msec / 1000);
  msec -= ss * 1000;
  let timeDiff = hh + ":" + mm;
  return timeDiff;
}

// set avatar
function setAvatar(seed) {
  document.getElementById("profile-pic").src =
    "https://avatars.dicebear.com/api/adventurer-neutral/" + seed + ".svg";
}

// display date, month, day, time
function displayTime() {
  document.getElementById("date").innerHTML =
    "It's " + date[0] + ", " + date[1] + " " + date[2];
  document.getElementById("time_now").innerHTML = date[3];
  document.getElementById("am_pm").innerHTML = date[4];
}

//Check cookies
function checkCookies() {
  if (document.cookie == "") {
    return false;
  } else {
    return true;
  }
}

//Get Username and Group
function loadLoginScreen(callback) {
  loginScreen.style.display = "block";
  document.getElementById("nickname").focus();
  callback();
}

// set username and group on display
function displayUserDetails() {
  username = getCookie("username");
  group = getCookie("group");
  console.log(username + " " + group);
  document.getElementById("username").innerHTML = username;
  document.getElementById("group").innerHTML = group;
}

// Get username and group from login screen
function getUserInfo(callback) {
  username = document.getElementById("nickname").value;
  group = document.getElementById("group-dropdown").value;
  console.log("User details read success");
  callback();
}

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

// Get next lecture day
/* Accepts next lecture date as argument and returns if 'today', 'tomorrow', 'in x days' [string] */
function getNextDay() {
  // code here
}

// var date3 = new Date(); //now
// var date1 = new Date("08/06/2015 00:00");
// var date2 = new Date("08/06/2015 02:56");

// var diff = date2.getTime() - date1.getTime();
// var msec = diff;
// var hh = Math.floor(msec / 1000 / 60 / 60);
// msec -= hh * 1000 * 60 * 60;
// var mm = Math.floor(msec / 1000 / 60);
// msec -= mm * 1000 * 60;
// var ss = Math.floor(msec / 1000);
// msec -= ss * 1000;
// console.log(hh + ":" + mm);

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
  let minutes = d.getMinutes().toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  let hours = d.getHours().toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });

  dateArray[5] = hours + ":" + minutes; //24format time for calculations

  if (d.getHours() >= 12) {
    dateArray[4] = "PM";
  } else {
    dateArray[4] = "AM";
  }

  if (d.getHours() > 12 && d.getHours() <= 23) {
    hours = hours - 12;
  }

  dateArray[3] = hours + ":" + minutes; //set time in 12H format for display

  if (d.getHours() == 0) {
    dateArray[3] = d.getHours() + 12 + ":" + minutes;
    dateArray[4] = "AM";
  }

  return dateArray;
}

/* Avatar art Adventurer Neutral Lisa Wischofsky	https://www.instagram.com/lischis_adventures/	CC BY 4.0 */
