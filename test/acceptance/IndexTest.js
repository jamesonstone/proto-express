var req = require('request');

req('http://www.google.com', function(error, response, body) {
	console.log('error:', error);
	console.log('statusCode:', response.statusCode);
	// console.log('body: ', body);
})