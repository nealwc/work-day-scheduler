// get date from moment.js and update the html; can't find a better way to have the date update without running the function every second
var currentDate = moment().format('MMMM Do YYYY');
$("#current-date").text("Current Date: " + currentDate);

// get time from moment.js and update the html every second to keep accurate time
var updateTime = function () {
    var currentTime = moment().format("LTS");
    $("#current-time").text("Current Time: " + currentTime);
};

setInterval(updateTime, 1000);

// change style of inputs dependent on time

function hourStyle() {
    var time = parseInt(moment().format('LT')); // converts the current time into whole integer of the hour
    var hour = [8, 9, 10, 11, 12, 1, 2, 3, 4, 5];
    var hourSpelled = ["eightAM", "nineAM", "tenAM", "elevenAM", "twelvePM", "onePM", "twoPM", "threePM", "fourPM", "fivePM"];

    for (i = 0; i < hour.length; i++) {
        $("#" + hourSpelled[i] + "App").addClass("bg-secondary text-white"); // changes backgroud color to grey during loop
        if (time === hour[i]) {
            $("#" + hourSpelled[i] + "App").addClass("bg-success text-white"); // changes current hour background color to green
            return; // ends loop so future hours' background isn't changed
        }
    }
}

$(".hour").on("click", function () {
    var test = $(this).val();
    console.log(test);

});

// grabs appointment data from html
$("#eightAM").on("click", function () {
    var eightData = $("#eightAMApp").val();
    console.log(eightData);
});

$(".hour").on("click", function () {
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

hourStyle()