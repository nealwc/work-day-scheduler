// get date from moment.js and update the html; can't find a better way to have the date update without running the function every second
var currentDate = moment().format('MMMM Do YYYY');
$("#current-date").text("Current Date: " + currentDate);

// get time from moment.js and update the html every second to keep accurate time
var updateTime = function() {
    var currentTime = moment().format("LTS");
    $("#current-time").text("Current Time: " + currentTime);
};                                                                  

setInterval(updateTime, 1000);

$("#eightAM").on("click", function() {
var eightAMAppointment = $("#eightAMApp").val();
console.log(eightAMAppointment);


});
