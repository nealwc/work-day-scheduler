var currentDate = moment().format('MMMM Do YYYY');
var currentTime = moment().format("LT");

$("#current-date").text("Current Date: " + currentDate);

function updateTime(){
    var newYork = currentTime;
    $("#current-time").text("Current Time: " + currentTime);
};                                                                  

updateTime();
setInterval(function(){
   updateTime();
},60000);