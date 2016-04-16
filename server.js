var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
app.use(bodyParser.json());

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.use(express.static(path.join(__dirname, './client')));

app.listen(8020, function(){
	console.log('Listening in on port 8020 for Orders and Customers');
})