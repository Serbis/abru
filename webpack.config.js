const path = require('path');

module.exports = {
	mode: 'development',
    entry: path.join(__dirname, './src/app.ts'),
	devtool: 'source-map',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
		sourceMapFilename: "bundle.js.map"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            },
            {
                loader: path.resolve('src/abru/loader/asx-loader.js'),
                options: {/* ... */}
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
		devServer: {
    		contentBase: path.join(__dirname, 'dist'),
    		compress: false,
   		 	port: 8080
  	}
};
