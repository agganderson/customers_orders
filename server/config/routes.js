var customers = require('./../controllers/customers.js');
var orders = require('./../controllers/orders.js');

module.exports = function(app){
	app.get('/customers', function(req, res){
		customers.index(req, res);
	});

	app.post('/customers', function(req, res){
		// console.log('got to post customers route')
		customers.create(req, res);
	});

	app.post('/delete/:id', function(req, res){
		console.log('got to post destroy route');
		customers.delete(req, res);
	});

	app.get('/orders', function(req, res){
		orders.index(req, res);
	});

	app.post('/orders', function(req, res){
		orders.create(req, res);
	});
}