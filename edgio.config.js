module.exports = {
  routes: './src/routes.ts',
  connector: '@edgio/starter',
  backends: {
    origin: {
      domainOrIp: 'example.com',
      hostHeader: 'example.com',
      disableCheckCert: true,
    },
  },
}
