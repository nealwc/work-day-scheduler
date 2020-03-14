// get date from moment.js and update the html; can't find a better way to have the date update without running the function every second
var currentDate = moment().format('MMMM Do YYYY');
$("#current-date").text("Current Date: " + currentDate);

// get time from moment.js and update the html every second to keep accurate time
var updateTime = function () {
    var currentTime = moment().format("LTS");
    $("#current-time").text("Current Time: " + currentTime);
};

setInterval(updateTime, 1000);

// grabs appointment data from html
$("#eightAM").on("click", function () {
    var eightData = $("#eightAMApp").val();
    console.log(eightData);
});

$("#nineAM").on("click", function () {
    var nineData = $("#nineAMApp").val();
    console.log(nineData);
});

$("#tenAM").on("click", function () {
    var tenData = $("#tenAMApp").val();
    console.log(tenData);
});

$("#elevenAM").on("click", function () {
    var elevenData = $("#elevenAMApp").val();
    console.log(elevenData);
});

$("#twelvePM").on("click", function () {
    var twelveData = $("#twelvePMApp").val();
    console.log(twelveData);
});

$("#onePM").on("click", function () {
    var oneData = $("#onePMApp").val();
    console.log(oneData);
});

$("#twoPM").on("click", function () {
    var twoData = $("#twoPMApp").val();
    console.log(twoData);
});

$("#threePM").on("click", function () {
    var threeData = $("#threePMApp").val();
    console.log(threeData);
});

$("#fourPM").on("click", function () {
    var fourData = $("#fourPMApp").val();
    console.log(fourData);
});

$("#fivePM").on("click", function () {
    var fiveData = $("#fivePMApp").val();
    console.log(fiveData);
});
