// craco.config.js
module.exports = {
    webpack: {
      configure: (webpackConfig) => {
        // Agregar regla para manejar archivos Markdown con raw-loader
        webpackConfig.module.rules.push({
          test: /\.md$/,
          use: 'raw-loader',
        });
        return webpackConfig;
      },
    },
  };
  