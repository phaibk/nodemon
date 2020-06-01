"use strict";

var users = [{
  id: 1,
  name: "Thinh"
}, {
  id: 2,
  name: "Tri"
}];

var express = require("express");

var app = express();
app.set("views", "./views");
app.set("view engine", "pug");
app.get("/users", function (req, res) {
  res.render("users/index", {
    users: users
  });
});
app.get("/users/search", function (req, res) {
  var q = req.query.q;
  var matchedUsers = users.filter(function (user) {
    console.log(user);
    return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
  });
  res.render("users/index", {
    users: matchedUsers
  });
});
var port = 3000;
app.listen(port, function () {
  console.log("Server listening on port " + port);
});