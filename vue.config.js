// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

module.exports = {
  //webpackの設定
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.join(__dirname, "/src/frontend"),
      },
    },
  },
  //ビルドファイルが生成される場所
  outputDir: "dist/public",
  pages: {
    index: {
      // entry for the page
      entry: "src/frontend/main.ts",
      // the source template
      template: "src/frontend/public/index.html",
    },
  },
};
