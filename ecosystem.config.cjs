module.exports = {
  apps: [
    {
      name: 'planetoxy-prod',
      script: '/var/www/html/prod/index.js',
      interpreter: 'bun',
      instances: 1,
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      }
    },
    {
      name: 'planetoxy-qa',
      script: '/var/www/html/qa/index.js',
      interpreter: 'bun',
      instances: 1,
      env: {
        NODE_ENV: 'production',
        PORT: 3001
      }
    }
  ]
};
