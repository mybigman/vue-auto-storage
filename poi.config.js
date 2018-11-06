module.exports = {
  entry: "./src/index.ts",
  plugins: [
    {
      resolve: "@poi/plugin-ts-check",
      // Override options for https://github.com/Realytics/fork-ts-checker-webpack-plugin
      options: {},
    },
  ],
};
