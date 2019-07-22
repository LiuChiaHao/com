const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');


const app = express();


app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/wikiDB", {
  useNewUrlParser: true
});



app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/index.html', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/aboutUsPage.html', function(req, res) {
  res.sendFile(__dirname + '/aboutUsPage.html');
});


app.get('/allProductPage.html', function(req, res) {
  res.sendFile(__dirname + '/allProductPage.html');
});


app.get('/contactUsPage.html', function(req, res) {
  res.sendFile(__dirname + '/contactUsPage.html');
});


app.get('/honeyMainPage.html', function(req, res) {
  res.sendFile(__dirname + '/honeyMainPage.html');
});

app.get('/aboutUsHoneyPage.html', function(req, res) {
  res.sendFile(__dirname + '/aboutUsHoneyPage.html');
});

app.get('/honeyTrueFalseJudgmentPage.html', function(req, res) {
  res.sendFile(__dirname + '/honeyTrueFalseJudgmentPage.html');
});

app.get('/honeyNewsPage.html', function(req, res) {
  res.sendFile(__dirname + '/honeyNewsPage.html');
});

app.get('/honeyProductPage.html', function(req, res) {
  res.sendFile(__dirname + '/honeyProductPage.html');
});


app.listen(3000, function() {
  console.log("Server started on port 3000");
});
