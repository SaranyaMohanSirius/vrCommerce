var nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: "./index.js",
    output: {
      filename: "./bin/index-bundle.js"
    },
    module: {
        rules: [
          { test: /\.js$/, 
            exclude: /node_modules/, 
            loader: "babel-loader",
            query: {
                presets: ['env']
             }
         }
        ]
    },
    devServer: {
        inline: true,
        port: 5000
     },
    target: 'node', // in order to ignore built-in modules like path, fs, etc. 
    externals: [nodeExternals()],
    watch: false
  }