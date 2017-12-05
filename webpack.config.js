var webpack = require('webpack');
var path  = require('path');

module.exports = {
    entry: "./index.js",
    output: {
        // publicPath: '/build/',
        path:path.resolve(__dirname,"build"),
        filename:"bundle.js"
    },
    watch: true,
    //生成映射，便于调试
    devtool: 'eval-source-map',
    resolve: {
          extensions: ['.js','.jsx']
    },
    module: {
        rules: [
          { 
            test: /\.jsx?$/,
            use: [ 
                    {
                        loader:'babel-loader',
                        options:{presets: ['es2015','react','stage-0']}
                    } 
                ],
            exclude: /node_modules/
          }
        ]
    }
};