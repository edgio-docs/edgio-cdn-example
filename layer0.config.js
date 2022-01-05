module.exports = {
  routes: "./src/routes.ts",
  connector: "@layer0/starter",
  backends: {
    origin: {
      domainOrIp: "www.layer0.co",
      hostHeader: "www.layer0.co",
    },
  },
};
