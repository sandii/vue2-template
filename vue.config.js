const t = { target: 'http://localhost:10012/' };

module.exports = {
  publicPath: './',
  outputDir: 'dist',
  devServer: {
    port: 9090,
    host: '0.0.0.0',
    proxy: {
      '/test': t,
    },
  },
  transpileDependencies: [
    'resize-detector',
  ],
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import \'~@/styles/theme.scss\';',
      },
    },
  },
  productionSourceMap: false,
};
