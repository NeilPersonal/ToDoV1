//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
	console.log("Hello");
	//Todo: res.sendFile(__dirname + "/index.html");
	var today = new Date();

	var weekday = new Array(7);
	weekday[0] = "Sunday";
	weekday[1] = "Monday";
	weekday[2] = "Tuesday";
	weekday[3] = "Wednesday";
	weekday[4] = "Thursday";
	weekday[5] = "Friday";
	weekday[6] = "Saturday";

	var currentDay = today.getDay();
	var day = weekday[currentDay];

	res.render("list", { kindOfDay: day });
});

app.listen(process.env.PORT || 3000, function () {
	console.log("Server has started at localhost:3000");
});
