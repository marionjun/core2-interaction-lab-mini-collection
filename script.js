// console.log("Is our script file working?");

// load the airtable library, call it "Airtable";
var Airtable = require("airtable");
console.log(Airtable);

// use airtable library, connect to our base using API key
var base = new Airtable({ apiKey: "keynewDjfpaz0B4p0" }).base(
    "appjNUAlUfiaOpiLt"
);

// get our collection base, select all the records
// specify functions that will receive the data
base("jam")
  .select({})
  .eachPage(gotPageOfJams, gotAllJams);

// an empty array to hold our data
var jams = [];

// callback function that receives our data
function gotPageOfJams(stones, fetchNextPage) {
  console.log("gotPageOfJams()");
  // add the records from this page to our array
  jams.push(...stones);
  // request more pages
  fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllJams(err) {
  console.log("gotAllJams()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading data");
    console.error(err);
    return;
  }

  // call functions to log and show the books
  consoleLogJams();
  showJams();
}

// just loop through the books and console.log them
function consoleLogJams() {
  console.log("consoleLogJams()");
  jams.forEach(jam => {
    console.log("Jam:", jam);
  });
}

// look through our airtable data, create elements
function showJams() {
  console.log("showJams()");
  jams.forEach(jam => {
     // create container for each song
     var jamContainer = document.createElement("div");
     jamContainer.classList.add("jam-container");
     document.querySelector(".container").append(jamContainer);

     // add song titles
     var jamTitle = document.createElement("h1");
     jamTitle.classList.add("jam-title");
     jamTitle.innerText = jam.fields.jam_title;
     jamContainer.append(jamTitle);

    //  var nameOfMeaning = document.createElement("h1");
    //  nameOfMeaning.classList.add("jam-meaning");
    //  nameOfMeaning.innerText = jam.fields.meaning;
    //  jamContainer.append(nameOfMeaning);

     var jamColor = document.createElement("p");
     jamColor.classList.add("jam-color");
     jamColor.innerText = jam.fields.color;
     jamContainer.append(jamColor);

     var jamImage = document.createElement("img");
     jamImage.classList.add("jam-image");
     jamImage.src = jam.fields.jam_image[0].url;
     jamContainer.append(jamImage);

     // add event listener to add active class to song container
     jamContainer.addEventListener("click", function(event) {
     //   crystalColor.classList.toggle("active");
       jamImage.classList.toggle("active");
     });

     // get genre field from airtable
     // loop through the array and add each genre as
     // a class to the song container
     var jamColor = jam.fields.color;
     jamColor.forEach(function(color) {
       jamContainer.classList.add(color);
     });

     // clicking on filter by brown 1
     // change background of pop genres to red
     // else change to white
  

     // filter by red 2
     var filterRed = document.querySelector(".js-red");
     filterRed.addEventListener("click", function() {
       if (jamContainer.classList.contains("red")) {
        jamContainer.style.background = "white";
       } else {
        jamContainer.style.background = "none";
       }
     });

     // filter by green 3
     var filterGreen = document.querySelector(".js-green");
     filterGreen.addEventListener("click", function() {
       if (jamContainer.classList.contains("green")) {
        jamContainer.style.background = "white";
       } else {
        jamContainer.style.background = "none";
       }
     });

     // filter by purple 4
     var filterPurple = document.querySelector(".js-purple");

     filterPurple.addEventListener("click", function() {
       if (jamContainer.classList.contains("purple")) {
        jamContainer.style.background = "white";
       } else {
        jamContainer.style.background = "none";
       }
     });

      // filter by orange 5
      var filterOrange = document.querySelector(".js-orange");

      filterOrange.addEventListener("click", function() {
        if (jamContainer.classList.contains("orange")) {
            jamContainer.style.background = "white";
        } else {
            jamContainer.style.background = "none";
        }
      });


         // filter by yellow 8
         var filterYellow = document.querySelector(".js-yellow");

         filterYellow.addEventListener("click", function() {
           if (jamContainer.classList.contains("yellow")) {
             jamContainer.style.background = "white";
           } else {
             jamContainer.style.background = "none";
           }
         });


     // filter reset
     var filterReset = document.querySelector(".js-reset");
     filterReset.addEventListener("click", function() {
       jamContainer.style.background = "none";
     });

// var crystalContainer = document.createElement("div");
// crystalContainer.classlist.add("crystal-container");
// document.querySelector(".container").append(crystalContainer);

// //add song titles to our song container
// var crystalTitle = document.createElement("h1");
// crystalTitle.classList.add("crystal-title");
// crystalTitle.innerText = crystal.fields.crystal_title;
// crystalContainer.append(crystalTitle);
// When the user scrolls the page, execute myFunction
    

    
  });
}
    
//  window.onscroll = function() {myFunction()};

//  // Get the navbar
//  var heading = document.getElementById("heading");

//  // Get the offset position of the navbar
//  var sticky = heading.offsetTop;

//  // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
//  function myFunction() {
//    if (window.pageYOffset >= sticky) {
//      heading.classList.add("sticky")
//    } else {
//      heading.classList.remove("sticky");
//    }
//  }
    
