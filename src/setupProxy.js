const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    ["/api/user/login/google"],
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
};
