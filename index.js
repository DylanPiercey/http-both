"use strict";

var net   = require("net");
var http  = require("http");
var https = require("https");

module.exports = { createServer: createServer };

function createServer (opts, handler) {
	var httpServer  = http.createServer(handler);
	var httpsServer = https.createServer(opts, handler);
	return net.createServer(function (conn) {
		conn.once("data", function (data) {
			var server = (data[0] === 22) ? httpsServer : httpServer;
			var proxy  = net.createConnection(server.address());
			proxy.write(data);
			conn.pipe(proxy).pipe(conn);
		});
	}).once("listening", function () {
		httpServer.listen();
		httpsServer.listen();
	});
}
