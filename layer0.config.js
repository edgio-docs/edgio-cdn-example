module.exports = {
  routes: './src/routes.ts',
  connector: '@layer0/starter',
  backends: {
    origin: {
      domainOrIp: 'edg.io',
      hostHeader: 'edg.io',
    },
  },
};
