const target = 'http://localhost:8080'
const path = require('path')
module.exports = {
  dev: {
    env: require('./dev.env'),
    port: 8300,
    autoOpenBrowser: false,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    cssSourceMap: false,
    proxyTable: {
      '/verify/': {
        target,
        pathRewrite: {
          '^/verify/': '/verify',
        },
      },
      '/app/':{
        target,
        pathRewrite: {
          '^/app/': '/app/'
        },
      },
      '/udax/': {
        target,
        pathRewrite: {
          '^/udax/': '/udax/'
        },
      },
    },
  },
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',
    productionSourceMap: false,
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report,
  },
  native: {
    env: require('./native.env'),
    index: path.resolve(__dirname, '../../PabApp/native/index.html'),
    assetsRoot: path.resolve(__dirname, '../../PabApp/native'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',
    productionSourceMap: false,
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report,
  },
}
