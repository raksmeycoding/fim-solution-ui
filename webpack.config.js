const env = process.env.NODE_ENV || "testing";

module.exports = require(`./webpack/webpack.${env}.js`);
