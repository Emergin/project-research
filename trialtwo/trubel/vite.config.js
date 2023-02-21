// vite.config.js
module.exports = {
    // Enable React support
    react: {
      jsxInject: `import React from 'react';`,
    },
    // Development server configuration
    server: {
      port: 3000, // Port to use for development server
      open: true, // Open the app in the default browser when server starts
    },
  };
  