const { resolve } = require("path");
const { VantResolver } = require("unplugin-vue-components/resolvers");
const ComponentsPlugin = require("unplugin-vue-components/webpack");
module.exports = {
  // publicPath: "./",
  publicPath: "./",
  productionSourceMap: false,
  configureWebpack: {
    plugins: [
      ComponentsPlugin({
        resolvers: [VantResolver()],
      }),
    ],
  },

  chainWebpack: (config) => {
    config.resolve.alias.set("@", resolve(__dirname, "./src"));
  },
};
