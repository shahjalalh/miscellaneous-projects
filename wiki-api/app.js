const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express()

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

mongoose.connect("mongodb://localhost:27017/wikiDB", { useNewUrlParser: true, useUnifiedTopology: true });

const articleSchema = {
    title: String,
    content: String
};

const Article = mongoose.model("Article", articleSchema);

app.get("/articles", function(req, res){
    Article.find({}, function(err, foundArticles){
        //console.log(foundArticles);
        if(!err){
            res.send(foundArticles);
        }else{
            res.send(err);
        }
        
    });
});

app.get("/", function(req, res){
    res.render('index');
});


app.listen(3000, function(){
    console.log("Server started on port 3000");
});