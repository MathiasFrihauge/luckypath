module.exports = {
    apps: [{
      name: 'NuxtAppName',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        HOST: '0.0.0.0',  // Host to listen on
        PORT: 80         // Port to listen on
      }
    }]
  };
  