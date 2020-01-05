const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    var today = new Date();
    var currentDay = today.getDay();
    var day = "";

    if (currentDay == 6 || currentDay == 0) {
        day = "Weekend";
    } else {
        day = "Weekday";
    }

    /*
    var weekdays = new Array(7);
    weekdays[0] = "Sunday";
    weekdays[1] = "Monday";
    weekdays[2] = "Tuesday";
    weekdays[3] = "Wednesday";
    weekdays[4] = "Thursday";
    weekdays[5] = "Friday";
    weekdays[6] = "Saturday";
    */


    // Less than 5 condition then use if-else and more than 5 use switch-case statement.
    switch (currentDay) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;

        default:
            console.log("Error: current day is equal to: " + currentDay);
            break;
    }

    // res.render('list', {kindOfDay: weekdays[today.getDay()]});
    res.render('list', {kindOfDay: day});
});

app.listen(3000, function () {
    console.log("Server started on port 3000");
});
