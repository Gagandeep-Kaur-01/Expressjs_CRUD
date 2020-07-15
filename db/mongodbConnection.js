var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/personInfo",{useNewUrlParser:true});
mongoose.connection;
module.exports = mongoose;