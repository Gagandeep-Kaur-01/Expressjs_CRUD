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

//update person=======================================================================
route.put("/updatePerson",(res, req)=>{
     var query = {_id:req.body._id};
     PersonModel.update(query,req.body,(doc)=>{
             res.json({msg:"Person updated successfully"}).status(201);
	 }).catch((error)=>{
      res.json({msg:"Cant update person"}).status(204);
	 })
})

//delete Person========================================================================
route.delete("/deletePerson/:_id", (req, res) =>{
    console.log(req.params._id);
    var query = {_id:req.params._id};

    PersonModel.deleteOne(query,(error) =>{
            if(error){
                console.log("Can't delete");
                res.json({msg:"Can't delete "});
			}

            res.json({msg:"Person deleted"});
	})

})

//get all===================================================================
route.get("/allPerson",(req,res)=> {
    PersonModel.find().then((doc)=>{
     console.log(doc);
     res.json(doc);

	})
})

module.exports = route;