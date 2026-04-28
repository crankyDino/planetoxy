const interpreter = '/home/ghrunner/.bun/bin/bun'

module.exports = {
  apps: [
    {
      name: 'planetoxy-prod',
      script: '/var/www/html/prod/index.js',
      // interpreter: 'bun',
      interpreter,
      instances: 1,
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      }
    },
    {
      name: 'planetoxy-qa',
      script: '/var/www/html/qa/index.js',
      interpreter,
      // interpreter: 'bun',
      instances: 1,
      env: {
        NODE_ENV: 'production',
        PORT: 3001
      }
    }
  ]
};
