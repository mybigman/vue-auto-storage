module.exports = {
  baseUrl: process.env.NODE_ENV === "production" ? "/vue-auto-storage/" : "./",
  outputDir: "docs",
  pages: {
    index: {
      entry: "example/main.js",
      template: "example/index.html",
      filename: "index.html",
    },
  },
  configureWebpack: {
    externals: {
      vue: "Vue",
      "element-ui": "ELEMENT",
    },
  },
};
