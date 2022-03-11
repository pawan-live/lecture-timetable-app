const todayLectures = []; // store lecture objects for the current day
let jsondata;

renderCards(todayLectures.length);
let dataTable = fetchJSON();
console.log(dataTable);

/* FUNCTIONS */
function renderCards(num) {
  for (let i = 0; i < num - 2; i++) {
    document.getElementById("card-container").innerHTML +=
      '<div id="lec-' +
      i +
      '" class="card">\n' +
      '<div class="lec-title">\n' +
      '<div id="lec-1-subject" class="lec-subject">' +
      "Subject" +
      "</div>\n" +
      '<div id="lec-1-type" class="lec-type">' +
      "Lecture" +
      "</div>\n" +
      "</div>\n" +
      '<div class="lec-time">\n' +
      '<span id="lec-1-start">00:00 AM</span> -\n' +
      '<span id="lec-1-end">00:00 AM</span>\n' +
      "</div>\n" +
      '<div id="lec-1-hall" class="lec-hall">\n' +
      "Hall 01\n" +
      "</div>\n" +
      "</div>\n";
  }
}

// Fetch JSON file
// function fetchJSON() {
//   fetch("http://127.0.0.1:5500/table.json")
//     .then((response) => {
//       return response.json();
//     })
//     .then((jsondata) => {
//       //code here
//       // var db = [];
//       // db = jsondata;
//       // console.log(jsondata);
//       return jsondata;
//     });
// }

// function fetchJSON() {
fetch("http://127.0.0.1:5500/table.json")
  .then(function (u) {
    return u.json();
  })
  .then(function (json) {
    jsondata = json;
  });
// return jsondata;
// }
