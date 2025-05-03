/**
 * Custom Next.js server with increased event listener limit
 * This prevents the MaxListenersExceededWarning
 */
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const configureServer = require('./src/utils/server-config');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// Set global EventEmitter defaults to higher values
// This helps prevent warnings across all EventEmitter instances
require('events').EventEmitter.defaultMaxListeners = 25;

app.prepare().then(() => {
  // Create server
  const server = createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  });

  // Apply our custom configuration
  configureServer(server);

  // Start listening
  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
