const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.get('/', function(req, res){
    var today = new Date();
    var currentDay = today.getDate();

    if(currentDay == 6 || currentDay == 0){
        res.send("Yay it's the weekend!");
    }else{
        res.sendFile(__dirname + "/index.html");
    }
});

app.listen(3000, function(){
    console.log("Server started on port 3000"); 
});
