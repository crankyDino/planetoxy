const interpreter = '/home/ghrunner/.bun/bin/bun'

module.exports = {
  apps: [
    {
      name: 'planetoxy-prod',
      script: '/var/www/html/prod/start.cjs',
      interpreter,
      cwd: '/var/www/html/prod',
      instances: 1,
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      }
    },
    // {
    //   name: 'planetoxy-qa',
    //   script: '/var/www/html/qa/start.cjs',
    //   interpreter,
    //   cwd: '/var/www/html/qa',
    //   instances: 1,
    //   env: {
    //     NODE_ENV: 'production',
    //     PORT: 3001
    //   }
    // }
  ]
};
