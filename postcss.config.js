module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px2rem-exclude": {
      remUnit: 16,
      exclude: /node_moudules/i, //这里以vantui 为例
    },
  },
};
