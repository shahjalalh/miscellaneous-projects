const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    var today = new Date();
    var currentDay = today.getDay();
    var day = "";

    if(currentDay == 6 || currentDay == 0){
        day = "Weekend";
    }else{
        day = "Weekday";
    }

    var weekdays = new Array(7);
    weekdays[0] = "Sunday";
    weekdays[1] = "Monday";
    weekdays[2] = "Tuesday";
    weekdays[3] = "Wednesday";
    weekdays[4] = "Thursday";
    weekdays[5] = "Friday";
    weekdays[6] = "Saturday";

    res.render('list', {kindOfDay: weekdays[today.getDay()]});
});

app.listen(3000, function(){
    console.log("Server started on port 3000"); 
});
