module.exports = {
  routes: './src/routes.ts',
  connector: '@layer0/starter',
  backends: {
    origin: {
      domainOrIp: 'example.com',
      hostHeader: 'example.com',
    },
  },
}
