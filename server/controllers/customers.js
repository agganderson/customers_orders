var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');
module.exports = (function(){
	return {
		index: function(req, res){
			Customer.find({}, function(err, results){
				if(err){
					console.log('Did not get customers', results);
				}
				else {
					console.log('Got them');
					res.json(results);
				}
			});
		},
		create: function(req, res){
			var newCustomer = new Customer({name: req.body.name});
			newCustomer.save(function(err, results){
				if(err){
					console.log('Could not create that customer', results);
				}
				else {
					console.log('CREATED THE CUSTOMER');
					res.json(results);
				}
			})
		},
		delete: function(req, res){
			Customer.remove({_id: req.params.id}, function(err, results){
				if(err){
					console.log('Did not delete that customer');
				}
				else {
					console.log('Customer deleted!');
					res.json(results);
				}
			});
		}
	}
})();