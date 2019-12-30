const express = require("express");
const request = require("request");
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use('/public', express.static("public"));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res){

    first_name = req.body.first_name;
    last_name = req.body.last_name;
    email = req.body.email;

    console.log(req.body);
    console.log(first_name, last_name, email);

    // https://mailchimp.com/developer/
});

app.listen(3000, function(){
    console.log("server is running on port 3000");
});


// mailchimp-api-key
// mailchimp-list-id