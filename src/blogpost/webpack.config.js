module.exports = {
    // Otras configuraciones de Webpack
    module: {
      rules: [
        {
          test: /\.md$/,
          use: 'raw-loader',
        },
      ],
    },
  };
  