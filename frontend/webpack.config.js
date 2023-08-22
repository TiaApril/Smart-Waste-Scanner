const path = require('path');

module.exports = {
  entry: './src/index.js', // Your entry point file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.(jpg|jpeg|png|gif|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]', // Output file name
            outputPath: 'images/', // Output directory for images
          },
        },
      },
    ],
  },
};
