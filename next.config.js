const path = require('path');

module.exports = {
  webpack: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      ...{
        '@': path.resolve(__dirname, 'src'),
        'Components': path.resolve(__dirname, 'src/components'),
        'Reducers': path.resolve(__dirname, 'src/reducers'),
        'Style': path.resolve(__dirname, 'src/style'),
      },
    };

    config.module.rules.push({
      test: /.(png|jpg|svg)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]?[hash]',
            emitFile: false,
            publicPath: '/',
          },
        },
      ],
    });

    return config;
  },
};
