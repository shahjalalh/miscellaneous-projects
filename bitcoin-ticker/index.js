const express = require("express");
const bodyParser = require("body-parser");
const request  = require("request");

const app = express()

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    
    crypto = req.body.crypto;
    fiat = req.body.fiat;
    
    request("https://apiv2.bitcoinaverage.com/indices/global/ticker/"+crypto+fiat, function(error, response, body){
        
        var data = JSON.parse(body);
        var price = data.last;

        var currentDate = data.display_timestamp;

        res.write("<p>The current date is " + currentDate + "</p>");

        res.write("<h1>The price of "+ crypto + " is " + price + " "+ fiat +"</h1>");

        res.send("");
    });
});

app.listen(3000, function(){
    console.log("Server is running on port 3000.");
});
