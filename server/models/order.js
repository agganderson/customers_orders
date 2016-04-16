var mongoose = require('mongoose');

var OrderSchema = new mongoose.Schema({
	customer_name: String,
	product: String,
	quantity: Number, 
	created_at: {type: Date, default: new Date}
});

mongoose.model('Order', OrderSchema);