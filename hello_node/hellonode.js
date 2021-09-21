// Load HTTP module
const http = require("http");
const hostname = '127.0.0.1';
const port = 3000;

// Create HTTP server and listen on port 3000 for requests
const server = http.createServer((req, res) => {
	// Set the response HTTP hreader with HTTP status and Content type
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hello World\n');
});

// Listen for request on port 3000, and as a callback function have the port listen on logged
server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:{$port}/`);
});
