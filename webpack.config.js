const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = {
  entry: "./src/scripts/app.js",
  output: {
  	path: path.join(__dirname, "./dist/"),
	  filename: "[name].bundle.js",
  },
  mode: 'development',
  watch: true,
  resolve: { extensions: [".js", ".ts"] },
  devServer: {
    watchFiles: path.join(__dirname, "./dist/"),
    port: 9000
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