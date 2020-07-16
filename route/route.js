var express = require("express");
var bodyParser = require('body-parser');
var PersonModel = require('../model/personModel');
var route = express.Router();



//add person======================================================================
route.post("/addPerson",(req, res) =>{
    var person = new PersonModel(req.body);

    person.save().then((doc)=> {
        //if person added
        res.json({msg:"Person added"}).status(201);;

	}).catch((error) =>{
    //if person not added
     res.json({msg:"Can't add person"}).status(204);
	})
})


module.exports = route;