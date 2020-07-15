var mongoose = require('../db/mongodbConnection');

//-----------person schema
var personSchema = new mongoose.Schema({
	name: String,
	addr: String,
	email: String,
	dept: String
})

//-------------person model
var personModel = mongoose.model("person",personSchema);

//----------export module
module.exports = personModel;