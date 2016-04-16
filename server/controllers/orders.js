var mongoose = require('mongoose');
var Order = mongoose.model('Order');

module.exports = (function(){
	return {
		index: function(req,res){
			Order.find({}, function(err, results){
				if(err){
					console.log('Didnt find the orders', results);
				}
				else {
					res.json(results);
				}
			});
		}, 
		create: function(req, res){
			var newOrder = new Order({customer_name: req.body.customer_name, quantity: req.body.quantity, product: req.body.product});
			newOrder.save(function(err, results){
				if(err){
					console.log('Did not save order');
				}
				else {
					console.log('created order!');
					res.json(results);
				}
			});
		}
	}
})();