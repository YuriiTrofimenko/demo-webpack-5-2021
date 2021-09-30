const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: "./src/scripts/app.js",
  output: {
  	filename: "app.bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
        hash: true,
        title: 'My Awesome application',
        myPageHeader: 'Hello World',
        template: './src/index.html',
        filename: 'index.html' // относительно dist
    })
  ]
}