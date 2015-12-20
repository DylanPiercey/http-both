# HTTP-BOTH
Creates a node server that will listen for both http and https requests.

# Installation

#### Npm
```console
npm install http-both
```

# Example

```javascript
var both    = require('http-both');
var options = {
  key: fs.readFileSync('test/fixtures/keys/agent2-key.pem'),
  cert: fs.readFileSync('test/fixtures/keys/agent2-cert.pem')
};

// Server will handle http and https requests.
both.createServer(options, function (req, res) {
  res.writeHead(200);
  res.end("hello world\n");
}).listen(80);
```

### Contributions

* Use gulp to run tests.

Please feel free to create a PR!
