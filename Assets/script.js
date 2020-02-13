var tickingTime = $("#currentDay");
var population = $("#blocks");
var momentous = moment().format("MMM Do YYYY LT");

tickingTime.textContent = momentous;
var secondsSinceLoad = 0;
var startAM = 9;
var endPM = 17;
var currentHr = moment().format("HH");
console.log(currentHr);

//Populating our page with timeblocks
function populate(){
    for (i = startAM; i <= endPM; i++){
        var rows = $("<section>");
        rows.attr("class", "row");
        var colsHr = $("<div>");
        colsHr.attr("class", "col-2 hour");
        //Determining whether it's AM or PM on just our Text
        if (i<12){
            var timeFrame = $("<p>");
            timeFrame.attr("class", "text-center");
            timeFrame.text(i + " AM");
        }else if (i===12){
            var timeFrame = $("<p>");
            timeFrame.attr("class", "text-center");
            timeFrame.text(i + " PM");
        }else if (i<=24){
            var j = i-12;
            var timeFrame = $("<p>");
            timeFrame.attr("class", "text-center");
            timeFrame.text(j + " PM");
        }else {
            return;
        }

        colsHr.append(timeFrame)
        rows.append(colsHr);
        var colsInput = $("<textarea>");
        //Conditional Formatting to change colors of the background accordingly

        if (i < parseInt(currentHr)){    
            colsInput.attr("class", "col-8 description past");
        } else if (i === parseInt(currentHr)){
            colsInput.attr("class", "col-8 description present");
        } else if (parseInt(currentHr)<i){
            colsInput.attr("class", "col-8 description future");
        }

        rows.append(colsInput);
        var buttonCol = $("<button>");
        buttonCol.attr("class", "col-2 saveBtn");
        rows.append(buttonCol);
        //var $br = $("<br>");
        population.append(rows);
        //population.append($br);
    }
}
populate();
// Tried to get a function to update this live but it wasn't working as intended
// function countStart() {
//     var timerInterval = setInterval(function () {
//         secondsSinceLoad++;
//         tickingTime.textContent = momentous;


//         if (secondsSinceLoad === 3600) {
//             clearInterval(timerInterval);
//             // return;
//         }

//     }, 1000);
// }
// countStart();
console.log(momentous);