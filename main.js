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
          type: "practical",
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
        {
          day: "wed",
          start: "08.30",
          end: "11:30",
          subject: "IWT",
          type: "lecture",
          hall_1: "B502",
          hall_2: "",
        },
        {
          day: "wed",
          start: "12.30",
          end: "13:30",
          subject: "OOC",
          type: "Tutorial",
          hall_1: "B401",
          hall_2: "",
        },
        {
          day: "wed",
          start: "13.30",
          end: "14:30",
          subject: "ISDM",
          type: "Tutorial",
          hall_1: "B501",
          hall_2: "",
        },
        {
          day: "thur",
          start: "08.30",
          end: "09:30",
          subject: "ISDM",
          type: "Practical",
          hall_1: "601-Pclab(New)",
          hall_2: "",
        },
        {
          day: "thur",
          start: "13.30",
          end: "17:30",
          subject: "EAP",
          type: "lecture",
          hall_1: "New3C",
          hall_2: "",
        },
        {
          day: "fri",
          start: "15.30",
          end: "17:30",
          subject: "SPM",
          type: "Practical/Tutorial",
          hall_1: "Virtual",
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
          subject: "OOC",
          type: "lecture",
          hall_1: "N3E",
          hall_2: "",
        },
        {
          day: "mon",
          start: "13:30",
          end: "15:30",
          subject: "SPM",
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
        {
          day: "wed",
          start: "08:30",
          end: "11:30",
          subject: "IWT",
          type: "lecture",
          hall_1: "B502",
          hall_2: "",
        },
        {
          day: "wed",
          start: "13.30",
          end: "14:30",
          subject: "ISDM",
          type: "Tutorial",
          hall_1: "B501",
          hall_2: "",
        },
        {
          day: "wed",
          start: "14.30",
          end: "15:30",
          subject: "OOC",
          type: "Tutorial",
          hall_1: "602+603 Lab",
          hall_2: "",
        },
        {
          day: "thur",
          start: "08.30",
          end: "09:30",
          subject: "IWT",
          type: "Practical",
          hall_1: "N3A",
          hall_2: "",
        },
        {
          day: "thur",
          start: "13.30",
          end: "17:30",
          subject: "EAP",
          type: "lecture",
          hall_1: "New3C",
          hall_2: "",
        },
        {
          day: "fri",
          start: "15.30",
          end: "17:30",
          subject: "SPM",
          type: "Practical/Tutorial",
          hall_1: "Virtual",
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

/*Edited*/

/*comment 2*/


/*********** DECLARATIONS ***********/

var username, group;
var next_status; //stores string values [today, tomorrow, in 2 days,3 days, etc...]

// Create an object array for today's lectures
const todayLectures = []; //object array to store all details of lectures today
let nextLectures; //object array to store next upcoming lectures
// day = today's day. ex: mon, tue etc

const date = findDate();

/*********** DOM VARIABLES ***********/

const loginScreen = document.getElementById("login-section");

/*********** SEQUENCE ***********/

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
          // setAvatar(Math.floor(Math.random() * 100 + 1));
        });
        loginScreen.style.display = "none";
      });
  });
} else {
  //read from cookies
  username = getCookie("username");
  group = getCookie("group");
  displayUserDetails();
  // setAvatar(Math.floor(Math.random() * 100 + 1));
}

renderTime(); //displays time in the greeting card

getTodayLecs(function () {
  console.log(todayLectures);
});

lecturesToday = 3; // get this from data table

renderTodayLecsNew(function () {
  console.log("Displayed next lecs");
});

/********** FUNCTIONS ***** ******/

/* get today lecs
 * loops through the data object to to find
 * all the lectures on the same date and
 * assigns it to an array todayLectures[] */

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

// fetch data object from json file

// // Fetch JSON file
// function fetchJSON() {
//   fetch("./table.json")
//     .then((response) => {
//       return response.json();
//     })
//     .then((jsondata) => {
//       //code here
//       let db = jsondata;
//     });
//   return db;
// }

// Render lectures for the day
function renderTodayLecsNew(callback) {
  for (let i = 0; i < lecturesToday; i++) {
    let k = i + 1;
    document.getElementById("lec_" + k.toString() + "_title").innerHTML =
      todayLectures[i].subject;
  }
  for (let i = 0; i < lecturesToday; i++) {
    let k = i + 1;
    document.getElementById("lec_" + k.toString() + "_type").innerHTML =
      todayLectures[i].type;
  }
  for (let i = 0; i < lecturesToday; i++) {
    let k = i + 1;
    document.getElementById("lec_" + k.toString() + "_start_time").innerHTML =
      todayLectures[i].start;
    document.getElementById("lec_" + k.toString() + "_end_time").innerHTML =
      todayLectures[i].end;
  }
}

// Render today lectures
function renderTodayLecHalls(callback) {
  // render halls
  // next_lec
  let lec_1_hall_2;
  let lec_2_hall_2;
  let lec_3_hall_2;
  if (todayLectures[0].hall_2) {
    lec_1_hall_2 = " / " + todayLectures[0].hall_2;
  } else {
    lec_1_hall_2 = "";
  }
  document.getElementById("lec_1_hall").innerHTML =
    todayLectures[0].hall_1 + lec_1_hall_2;

  // lec 2
  if (todayLectures[1].hall_2) {
    lec_2_hall_2 = " / " + todayLectures[1].hall_2;
  } else {
    lec_2_hall_2 = "";
  }
  document.getElementById("lec_2_hall").innerHTML =
    todayLectures[1].hall_1 + lec_2_hall_2;

  // lec 3
  if (todayLectures[2].hall_2) {
    lec_3_hall_2 = "& " + todayLectures[2].hall_2;
  } else {
    lec_3_hall_2 = "";
  }
  document.getElementById("lec_3_hall").innerHTML =
    "Hall " + todayLectures[2].hall_1 + lec_3_hall_2;
  callback();
}

// set avatar (renders the avatar)
// function setAvatar(seed) {
//   document.getElementById("profile-pic").src =
//     "https://avatars.dicebear.com/api/adventurer-neutral/" + seed + ".svg";
// }

// renders date, month, day, time
function renderTime() {
  document.getElementById("date").innerHTML =
    "It's " + date[0] + ", " + date[1] + " " + date[2];
  document.getElementById("time_now").innerHTML = date[3];
  document.getElementById("am_pm").innerHTML = date[4];
}

/* Get time difference
 * uses the findDate() function to extract the
 * current time.
 * assuming item_time is a string in the format
 * "hh:mm" */

function getTimeDifference(item_time) {
  const date = findDate();
  const now_time = date[5].split(":");
  const now_hour = now_time[0];
  const now_mins = now_time[1];

  const item_time_arr = item_time.split(":");
  let item_hour = item_time_arr[0];
  let item_mins = parseInt(item_time_arr[1]);

  if (now_mins > item_mins) {
    item_mins = item_mins + 60;
    --item_hour;
  }

  let hour_difference = item_hour - now_hour;
  let min_difference = item_mins - now_mins;

  const time_difference = [2];

  time_difference[0] = hour_difference;
  time_difference[1] = min_difference;

  return time_difference;
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
