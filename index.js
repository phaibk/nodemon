var users = [
    { id: 1, name: "Thinh" },
    { id: 2, name: "Tri" }
];
const express = require("express");
const app = express();
const bodyParser = require("body-parser")

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.set("views", "./views");
app.set("view engine", "pug");


app.get("/users", (req, res) => {
    res.render("users/index", {
        users: users
    });
});
app.get("/users/search", function(req, res) {
    var q = req.query.q;
    var matchedUsers = users.filter(function(user) {
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });
    res.render("users/index", {
        users: matchedUsers
    });
});
app.get("/users/create", function(req, res){
    res.render("users/create");
});
app.post("/users/create", function(req, res){
    users.push(req.body);
    res.redirect("/users");
});
var port = 3000;
app.listen(port, () => {
    console.log("Server listening on port " + port);
});
