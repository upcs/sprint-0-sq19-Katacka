const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer((request, response) => {
	let parsedPathname = url.parse(request.url).pathname.substr(1);
	let pathname = parsedPathname || "index.html"; //Defaults to index.html if issued empty request

	console.log("Request for " + pathname + " received.");
	fs.readFile(pathname, (err, data) => {
		if (err) {
			console.log(err);
			response.writeHead(404, {'Content-Type': 'text/html'});
		}
		else {
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(data.toString());
		}
		response.end();
	});
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');
