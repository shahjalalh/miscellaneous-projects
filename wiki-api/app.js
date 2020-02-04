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

app.route("/articles")
    .get(function(req, res){
        Article.find({}, function(err, foundArticles){
            //console.log(foundArticles);
            if(!err){
                res.send(foundArticles);
            }else{
                res.send(err);
            }
            
        });
    })
    .post(function(req, res){
        title = req.body.title;
        content = req.body.content;
    
        const newArticle = new Article({
            title: title,
            content: content
        });
        newArticle.save(function(err){
            if(!err){
                res.send("Successfully added a new article.");
            }else{
                res.send(err);
            }
        });
    })
    .delete(function(req, res){

        Article.deleteMany({}, function(err){
            if(!err){
                res.send("Successfully deleted all articles.");
            }else{
                res.send(err);
            }
        });
    
    });

app.route('articles/:articleTitle')
    .get(function(req, res){
        const articleTitle = req.params.articleTitle;

        Article.findOne({title: articleTitle}, function(err, foundArticle){
            if(foundArticle){
                res.send(foundArticle);
            }else{
                res.send("No articles matching that title was found.");
            }
        });
    })
    .put(function(req, res){
        Article.update(
            {title: req.params.articleTitle},
            {title: req.body.title, content: req.body.connect},
            {overwrite: true},
            function(err){
                if(!err){
                    res.send("Successfully updated article.");
                }
                
            }
        );
    })
    .patch(function(req, res){
        Article.update(
            {title: req.params.articleTitle},
            {$set: req.body},
            function(err){
                if(!err){
                    res.send("Successfully updated article.");
                }else{
                    res.send(err);
                }

            }
        );
    })
    .delete(function(req, res){
        Article.deleteOne(
            {title: req.params.articleTitle},
            function(err){
                if(!err){
                    res .send("Successfully deleted the corresponding article.");
                }else{
                    res.send(err);
                }
            }
        );
    });

/*
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

app.post("/articles", function(req, res){
    title = req.body.title;
    content = req.body.content;

    const newArticle = new Article({
        title: title,
        content: content
    });
    newArticle.save(function(err){
        if(!err){
            res.send("Successfully added a new article.");
        }else{
            res.send(err);
        }
    });
});

app.delete('/articles', function(req, res){

    Article.deleteMany({}, function(err){
        if(!err){
            res.send("Successfully deleted all articles.");
        }else{
            res.send(err);
        }
    });

});
*/

app.get("/", function(req, res){
    res.render('index');
});


app.listen(3000, function(){
    console.log("Server started on port 3000");
});