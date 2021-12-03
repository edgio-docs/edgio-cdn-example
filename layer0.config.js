module.exports = {
  routes: "./src/routes.ts",
  connector: "@layer0/starter",
  backends: {
    origin: {
      domainOrIp: "layer0.co",
      hostHeader: "layer0.co",
    },
  },
};
