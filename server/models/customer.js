var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var CustomerSchema = new mongoose.Schema({
	name: String,
	created_at: {type: Date, default: Date.now}, 
});
mongoose.model('Customer', CustomerSchema);
CustomerSchema.plugin(uniqueValidator);
