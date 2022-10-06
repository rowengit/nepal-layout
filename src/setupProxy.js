const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
	app.use(
		"/afterschool",
		createProxyMiddleware({
			target: "https://bsb.kh.edu.tw",
			changeOrigin: true
		})
	);
};
