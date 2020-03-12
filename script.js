var currentDate = moment().format('MMMM Do YYYY');
var currentTime = moment().format("LT");

$("#current-date").text("Current Date: " + currentDate);
$("#current-time").text("Current Time: " + currentTime);