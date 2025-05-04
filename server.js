/**
 * Custom Next.js server with increased event listener limit
 * This prevents the MaxListenersExceededWarning
 * Now also includes automatic port detection
 */
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const net = require('net');
const configureServer = require('./src/utils/server-config');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// Set global EventEmitter defaults to higher values
// This helps prevent warnings across all EventEmitter instances
require('events').EventEmitter.defaultMaxListeners = 25;

/**
 * Check if a port is in use
 * @param {number} port - The port to check
 * @returns {Promise<boolean>} - True if port is in use, false otherwise
 */
function isPortInUse(port) {
  return new Promise((resolve) => {
    const server = net.createServer()
      .once('error', () => {
        // Port is in use
        resolve(true);
      })
      .once('listening', () => {
        // Port is free, close server
        server.close();
        resolve(false);
      })
      .listen(port);
  });
}

/**
 * Find an available port starting from the provided port
 * @param {number} startPort - The port to start checking from
 * @param {number} [maxPort=startPort+50] - Maximum port to check
 * @returns {Promise<number>} - First available port
 */
async function findAvailablePort(startPort, maxPort = startPort + 50) {
  for (let port = startPort; port <= maxPort; port++) {
    const inUse = await isPortInUse(port);
    if (!inUse) return port;
  }
  // If no ports are available, return the start port anyway
  // The server will fail, but at least with a clear error message
  return startPort;
}

app.prepare().then(async () => {
  // Create server
  const server = createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  });

  // Apply our custom configuration
  configureServer(server);

  // Find available port
  const defaultPort = parseInt(process.env.PORT, 10) || 3000;
  const port = await findAvailablePort(defaultPort);
  
  // Start listening
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
    if (port !== defaultPort) {
      console.log(`> Original port ${defaultPort} was in use, using port ${port} instead`);
    }
  });
});
