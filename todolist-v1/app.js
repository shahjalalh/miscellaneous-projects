const express = require('express');
const bodyParser = require('body-parser');
const date = require( __dirname + "/date.js");

const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = ["Need Food", "Buy Food", "Eat Food"];
let workItems = []

app.get('/', function (req, res) {
    /*
    let today = new Date();

    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    day = today.toLocaleDateString("en-US", options);
    */

    // let day = date.getDate();
    let day = date.getDay();

    // res.render('list', {kindOfDay: weekdays[today.getDay()]});
    res.render('list', { listTitle: day, newListItems: items });
});

app.post("/", function (req, res) {
    let item = req.body.newItem;

    if (req.body.list === "work") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);

        res.redirect("/");
    }


});

app.get("/about", function(req, res){
    res.render("about");
});

app.get("/work", function (req, res) {
    res.render("list", { listTitle: "Work List", newListItems: workItems });
});

app.post("/work", function (req, res) {
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
});

app.listen(3000, function () {
    console.log("Server started on port 3000");
});
