var express = require('express');
var bodyParser = require('body-parser');
var route = require("./route/route");
var app = express();

//parse application/json
app.use(bodyParser.json())

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}))

//--route/
app.get("/",(req,res)=>{
    res.json({msg: "Hello world"});
})

//-----http://localhost:4000/api*;
app.use("/api", route);

app.listen(4000,()=>{
    console.log("API started");
})

