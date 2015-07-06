var http = require('http');
var block = {
	'data':'ricevuta'
}

var server = http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'application/plain'});
  response.write(JSON.stringify(block));
  response.end();
})

server.listen(8000, '127.0.0.1');
console.log('Server Connected http://127.0.0.1:8000/');

var optionPost = {
	hostname:'127.0.0.1',
	port:8000,
	json:true,
	method:'POST',
	header:{'Content-Type':'application/json'}
}

var req = http.request(optionPost,function(response){
			response.on('data',function(chunk){
				console.log('data' + chunk)
			})
		});

req.on('error',function(e){
		if(e) console.log('problem request' + e.message);
})
req.write(block.toString());
req.end();