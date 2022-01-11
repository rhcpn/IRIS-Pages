const moment = require("moment");
const path = require("path");

function getVersion() {
  return "version: 1.0.0 (" + moment().format("YYYY-MM-DD HH:mm:ss") + ")";
}

process.env.VUE_APP_VERSION = getVersion();

module.exports = {
  devServer: {
    proxy: "http://localhost:8888",
    port: 8000
  },
  publicPath: process.env.VUE_APP_PUBLIC_PATH,
  outputDir: "../src/main/resources/static",
  pages: {
    index: {
      entry: "src/modules/index/index.js",
      template: "public/index.html",
      filename: process.env.VUE_APP_PAGES_INDEX_FILENAME,
      title: "IRIS Web software development kit - INDEX",
      chunks: ["chunk-vendors", "chunk-common", "index"]
    },
    app: {
      entry: "src/modules/app/app.js",
      template: "public/app.html",
      filename: process.env.VUE_APP_PAGES_APP_FILENAME,
      title: "IRIS Web software development kit - APP",
      chunks: ["chunk-vendors", "chunk-common", "app"]
    },
    error: {
      entry: "src/modules/error/error.js",
      template: "public/error.html",
      filename: process.env.VUE_APP_PAGES_ERROR_FILENAME,
      title: "IRIS Web software development kit - Error"
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.join(__dirname, "src/"),
        "@modules": path.join(__dirname, "src/modules")
      }
    }
  },
  pluginOptions: {
    i18n: {
      locale: "ko",
      fallbackLocale: "ko",
      localeDir: "locale",
      enableInSFC: true
    }
  },
  runtimeCompiler: true,
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import '@/assets/main.scss';
        `
      }
    }
  }
};
