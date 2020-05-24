//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const date = require(__dirname + "/date.js");

const app = express();

let listItems = [];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
	console.log("Hello");
	day = date.getDate();
	//! render has to include all the variables in this line, because it can not render on post;
	res.render("list", { kindOfDay: day, newListitems: listItems });
});

app.post("/", function (req, res) {
	let listItem = req.body.newItem;
	listItems.push(listItem);
	//! redirect, do not render here, only change initial variable here
	res.redirect("/");
	console.log(listItem);
});

app.get("/about", function (req, res) {
	res.render("about");
});

app.listen(process.env.PORT || 3000, function () {
	console.log("Server has started at localhost:3000");
});
