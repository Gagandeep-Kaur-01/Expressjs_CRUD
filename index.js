var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//parse application/json
app.use(bodyParser.json())
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}))



//--route/
app.get("/",(req,res)=>{
    res.json({msg: "Hello world"});
})


app.listen(4000,()=>{
    console.log("API started");
})