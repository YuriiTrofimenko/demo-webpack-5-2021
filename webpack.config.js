const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: "./src/scripts/app.js",
  output: {
  	filename: "app.bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
        hash: true,
        filename: 'index.html' // относительно dist
    })
  ]
}