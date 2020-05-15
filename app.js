//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let listItems = [];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
	console.log("Hello");
	//Todo: res.sendFile(__dirname + "/index.html");
	var today = new Date();
	var options = {
		weekday: "long",
		day: "numeric",
		month: "long",
	};

	var day = today.toLocaleDateString("en-US", options);

	res.render("list", { kindOfDay: day, newListitems: listItems });
});

app.post("/", function (req, res) {
	let listItem = req.body.newItem;
	listItems.push(listItem);
	res.redirect("/");
	console.log(listItem);
});

app.listen(process.env.PORT || 3000, function () {
	console.log("Server has started at localhost:3000");
});
