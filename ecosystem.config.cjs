const interpreter = '/home/ghrunner/.bun/bin/bun'

module.exports = {
  apps: [
    {
      name: 'planetoxy',
      script: '/var/www/html/planetoxy/start.cjs',
      interpreter,
      cwd: '/var/www/html/planetoxy',
      instances: 1,
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      }
    }
  ]
};
