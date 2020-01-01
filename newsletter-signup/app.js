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

    var data = {
        "members": [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: first_name,
                    LNAME: last_name
                }
            }
        ]
    }

    var jsonData = JSON.stringify(data);

    console.log(req.body);
    console.log(first_name, last_name, email);

    // https://mailchimp.com/developer/
    // https://usX.api.mailchimp.com/3.0/list/7b80f67abe

    options = {
        url: "https://us18.api.mailchimp.com/3.0/list/mailchimp-list-id",
        method: "POST",
        headers: {
            "Authorization": "shahjalal mailchimp-api-key-dataserver"
        },
        body: jsonData
    }

    request(options, function(error, response, body){
        if(error){
            console.log(error);
            response.sendFile(__dirname + "/failure.html");
        }else{
            console.log(response.statusCode);
            if(response.statusCode === 200){
                response.sendFile(__dirname + "/success.html");
            }else{
                response.sendFile(__dirname + "/failure.html");
            }
            
        }
    });
});

app.get("/failure", function(req, res){
    res.redirect("/");
});

app.listen(process.env.PORT || 3000, function(){
    console.log("server is running on port 3000");
});


// mailchimp-api-key-dataserver
// https://status.mailchimp.com/ is for dataserver
// mailchimp-list-id