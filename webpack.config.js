var path = require('path')

module.exports = {
	mode: 'development',
	entry: {
		main: "./src/index.js",
		head: "./src/head.js"
	},
	output: {
		path: path.resolve(__dirname, "docs/dist"), // docs as output path since github pages only allows to serve from the root (/) or a docs (/docs) folder
		filename: "[name].js"
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
		contentBase: path.join(__dirname, 'docs'),
		port: 9000,
		writeToDisk: true
	}
}
