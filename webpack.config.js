const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');

const config = {
  entry: './public/src/index.js',
  output: {
    path: path.join(__dirname + '/public/dist/'),
    filename: 'main.bundle.js',
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new WebpackPwaManifest({
      //the name of the generated manifest file
      filename: 'manifest.json',

      //we aren't using webpack to generate our html so we set inject to false
      inject: 'false',
      
      /*set fingerprints to 'false' to make the names of the generated 
      files predictable amking it easier to refer to them in our code*/
      fingerprints: false,

      name: 'Travel Budget Tracker',
      short_name: 'Budget Tracker',
      description: 'An application that allows you to enter deposits and expenses offline while travelling without an internet connection.',
      background_color: '#01579b',
      theme_color: '#ffffff',
      'theme-color': '#ffffff',
      start_url: '/',
      icons: [
        {
          src: path.resolve('public/icons/icon-192x192.png'),
          sizes: [96, 128, 192, 256, 384, 512],
          destination: path.join('public', 'icons'),
        },
        {
          src: path.resolve('public/icons/icon-512x512.png'),
          sizes: [96, 128, 192, 256, 384, 512],
          destination: path.join('public', 'icons'),
        },
      ],
    }),
  ],
};

module.exports = config;