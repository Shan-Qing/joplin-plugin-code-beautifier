const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

const mainConfig = {
  target: 'node',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  externals: {
    'api': 'commonjs2 api',
    'api/types': 'commonjs2 api/types',
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'src/manifest.json', to: '.' },
        { from: 'src/themes', to: 'themes' },
      ],
    }),
  ],
};

const csConfig = {
  target: 'web',
  entry: './src/contentScript.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'contentScript.js',
    libraryTarget: 'commonjs2',
  },
  resolve: {
    extensions: ['.js'],
  },
};

module.exports = [mainConfig, csConfig];
