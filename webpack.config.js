const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
      bundle: path.resolve(__dirname, "scripts/index.js"), // could specify other entries for code splitting
     },
     output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
      
     },
     devtool: 'source-map',
     devServer: {
      static: {
          directory: path.resolve(__dirname, 'dist')
      },
      port: 3000,
      open: true,
      hot: true,
      compress: true,  //enables GZIP Compression
      historyApiFallback: true,
     },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif|ogg|mp3|wav)$/i,
            type: 'asset/resource',
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ],
      },
}