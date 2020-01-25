//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const date = require(__dirname + "/date.js");
const _ = require("lodash");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/todolistDB", { useNewUrlParser: true, useUnifiedTopology: true });

// const items = ["Buy Food", "Cook Food", "Eat Food"];
// const workItems = [];

const itemsSchema = {
  name: String,
};

const Item = mongoose.model("Item", itemsSchema);

const item1 = new Item({
  name: "Welcome to your todolist!",
});

const item2 = new Item({
  name: "Hit the + button to add a new item.",
});

const item3 = new Item({
  name: "<-- Hit this to delete an item.",
});

const defaultItems = [item1, item2, item3];

const listSchema = {
  name: String,
  items: [itemsSchema]
}

const List = mongoose.model("List", listSchema);

/*
Item.insertMany(defaultItems, function(error, docs){
  if(error){
    console.log(error);
  }else{
    console.log("Successfully saved default items to database");
    console.log(docs);
  }
});
*/
app.get("/", function (req, res) {

  //const day = date.getDate();

  Item.find({}, function (error, foundItems) {

    if (foundItems.length === 0) {
      Item.insertMany(defaultItems, function (error, docs) {
        if (error) {
          console.log(error);
        } else {
          console.log("Successfully saved default items to database");

        }
      });

      res.redirect("/");
    } else {
      res.render("list", { listTitle: "Today", newListItems: foundItems });
    }
  });
});

app.post("/", function (req, res) {

  const itemName = req.body.newItem;
  const listName = req.body.list;

  const item = new Item({
    name: itemName,
  });

  if (listName === "Today") {
    item.save();

    res.redirect("/");
  } else {
    List.findOne({ name: listName }, function (err, foundList) {
      foundList.items.push(item);
      foundList.save();
      res.redirect("/" + listName);
    });
  }

  /*
  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
  */
});

app.post("/delete", function (req, res) {
  // console.log(req.body);
  // console.log(req.body.checkbox);

  const checkedItemId = req.body.checkbox;
  const listName = req.body.listName;

  if (listName === "Today") {
    /*
      Item.deleteOne({_id: checkedItemId}, function(error){
        if(error){
          console.log(error);
        }else{
          console.log("Successfully deleted one item!");
          res.redirect("/");
        }
      });
      */
    // or,
    // reference: https://mongoosejs.com/docs/api.html
    Item.findByIdAndRemove(checkedItemId, function (error) {
      if (error) {
        console.log(error);
      } else {
        console.log("Successfully deleted one item!");
        res.redirect("/");
      }
    });
  }else{
    List.findOneAndUpdate({name: listName}, {$pull: {items: {_id: checkedItemId}}}, function(err, foundList){
      if(!err){
        res.redirect("/" + listName);
      }
    });
  }

});

/*
app.get("/work", function(req,res){
  res.render("list", {listTitle: "Work List", newListItems: workItems});
});
*/

app.get("/:customListName", function (req, res) {
  //console.log(req.params.customListName);

  const customListName = _.capitalize(req.params.customListName);

  List.find({ name: customListName }, function (err, foundList) {

    if (!err) {
      if (!foundList) {
        const list = new List({
          name: customListName,
          items: defaultItems
        });

        list.save();

        res.redirect("/" + customListName)
      } else {
        res.render("list", { listTitle: foundList.name, newListItems: foundList.items });
      }
    }

  });

});

app.get("/about", function (req, res) {
  res.render("about");
});

// heroku port configuration
let port = process.env.PORT;
if(port==null || port == ""){
  port = 3000;
}

app.listen(port, function () {
  console.log("Server started on port 3000");
});
