var path = require('path')

module.exports = {
	mode: 'development',
	output: {
		path: path.resolve(__dirname, "public/dist")
	},
	module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
	devServer: {
		contentBase: path.join(__dirname, 'public'),
		port: 9000,
		writeToDisk: true
	}
}
