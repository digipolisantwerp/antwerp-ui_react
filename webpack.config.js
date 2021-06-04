const path = require('path');
module.exports = {
  devtool: 'eval-cheap-source-map',
  module: {
    rules: [
      // Babel loader, will use your project’s .babelrc
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              "presets": [
                [
                  "@babel/preset-env",
                  {
                    "modules": false
                  }
                ],
                "@babel/preset-flow",
                "@babel/preset-react"
              ],
              "plugins": [
                [
                  "@babel/plugin-transform-runtime",
                  {
                    "regenerator": true,
                  }
                ]
              ]
            }
          }
        ]
      },
      {
        test: /\.(s*)css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              includePaths: [
                path.resolve(__dirname, 'node_modules')
              ]
            }
          }],
      }
    ]
  }
};
