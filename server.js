// Minimal static server for Calcuta Hacks on localhost:5173
// Usage: node server.js

const http = require('http');
const fs = require('fs');
const path = require('path');

const host = process.env.HOST || '0.0.0.0';
const port = Number(process.env.PORT || 5173);
const root = process.cwd();

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
};

function send(res, status, headers, body) {
  res.writeHead(status, headers);
  if (body) res.end(body); else res.end();
}

const server = http.createServer((req, res) => {
  try {
    // Normalize and prevent path traversal
    const urlPath = decodeURI(req.url.split('?')[0]);
    let filePath = path.join(root, urlPath);
    if (urlPath === '/' || fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
      filePath = path.join(filePath === root ? root : filePath, 'index.html');
    }

    if (!fs.existsSync(filePath)) {
      return send(res, 404, { 'Content-Type': 'text/plain; charset=utf-8' }, `404 Not Found: ${urlPath}`);
    }

    const ext = path.extname(filePath).toLowerCase();
    const type = mimeTypes[ext] || 'application/octet-stream';
    const stream = fs.createReadStream(filePath);
    stream.on('open', () => {
      res.writeHead(200, {
        'Content-Type': type,
        'Cache-Control': 'no-cache',
        'Access-Control-Allow-Origin': '*',
      });
    });
    stream.on('error', (err) => {
      console.error('Stream error:', err.message);
      send(res, 500, { 'Content-Type': 'text/plain; charset=utf-8' }, '500 Server Error');
    });
    stream.pipe(res);
  } catch (e) {
    send(res, 500, { 'Content-Type': 'text/plain; charset=utf-8' }, '500 Server Error');
  }
});

server.listen(port, host)
  .on('listening', () => {
    const displayHost = host === '0.0.0.0' ? 'localhost' : host;
    console.log(`Calcuta Hacks server running at http://${displayHost}:${port}/`);
  })
  .on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.error(`Port ${port} is in use. Set a different port: PORT=5174 node server.js`);
    } else {
      console.error('Server error:', err);
    }
    process.exit(1);
  });


