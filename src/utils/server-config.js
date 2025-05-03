/**
 * Server configuration to fix Node.js EventEmitter warnings
 * Increases the maximum listeners for the development server
 */

// This file is used by Next.js server
module.exports = function configureServer(server) {
  // Increase max listeners to prevent warnings
  // Our optimization components may add multiple listeners
  if (server && typeof server.setMaxListeners === 'function') {
    // Set to a higher value to accommodate all our components
    server.setMaxListeners(25);
  }
  
  return server;
};
