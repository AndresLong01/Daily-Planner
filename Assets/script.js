//Initializing the references for all future variables.
var tickingTime = $("#currentDay");
var population = $("#blocks");
var momentous = moment().format("MMM Do YYYY LT");

//Declaring functional variables and using moment.js to determine current time and update the current time on screen
tickingTime.textContent = momentous;
var startAM = 9;
var endPM = 17;
var currentHr = moment().format("HH");

//Populating our page with timeblocks
function populate() {
    tickingTime.text(momentous);
    //For loop that controls the creation of each individual element and renders it out
    for (i = startAM; i <= endPM; i++) {
        var rows = $("<section>");
        rows.attr("class", "row");
        var colsHr = $("<div>");
        colsHr.attr("class", "col-2 hour");

        //Determining whether it's AM or PM on just our Text
        if (i < 12) {
            var timeFrame = $("<p>");
            timeFrame.attr("class", "text-center");
            timeFrame.text(i + " AM");
        } else if (i === 12) {
            var timeFrame = $("<p>");
            timeFrame.attr("class", "text-center");
            timeFrame.text(i + " PM");
        } else if (i <= 24) {
            var j = i - 12;
            var timeFrame = $("<p>");
            timeFrame.attr("class", "text-center");
            timeFrame.text(j + " PM");
        } else {
            return;
        }

        //Appending time stamps for each hour into the row
        colsHr.append(timeFrame)
        rows.append(colsHr);
        var colsInput = $("<textarea>");
        colsInput.attr("id", i);
        colsInput.text(localStorage.getItem(i));

        //Conditional Formatting Controller to change colors of the background accordingly
        if (i < parseInt(currentHr)) {
            colsInput.attr("class", "col-8 description past");
        } else if (i === parseInt(currentHr)) {
            colsInput.attr("class", "col-8 description present");
        } else if (parseInt(currentHr) < i) {
            colsInput.attr("class", "col-8 description future");
        }

        //appending all data past the time stamps into the row
        rows.append(colsInput);
        var buttonCol = $("<button>");
        buttonCol.attr("class", "col-2 saveBtn");
        buttonCol.attr("data-id", i);
        var icon = $("<i>");
        icon.attr("class", "fas fa-save");
        buttonCol.append(icon);
        rows.append(buttonCol);
        population.append(rows);
    }
}

//Render the whole screen out.
populate();

//Function to set the Key elements into local storage
population.on("click", "button", function (e) {
    e.preventDefault();
    var information = $(this).prev().val();
    localStorage.setItem($(this).attr("data-id"), information);
})


// var secondsSinceLoad = 0;
// Tried to get a function to update this live but it wasn't working as intended
// function countStart() {
//     var timerInterval = setInterval(function () {
//         tickingTime.textContent = momentous;
//         if (secondsSinceLoad === 3600) {
//             clearInterval(timerInterval);
//             // return;
//         }
//     }, 1000);
// }
// countStart();
