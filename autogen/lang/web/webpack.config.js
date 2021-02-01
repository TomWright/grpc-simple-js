const path = require('path')

module.exports = {
  mode: "none",
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs'
  },
  externals: {
    "google-protobuf": "google-protobuf",
    "grpc": "grpc",
    "grpc-web": "grpc-web"
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(ts)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ["@babel/preset-env", "@babel/preset-typescript"],
          plugins: [
            "@babel/plugin-proposal-class-properties", 
            "@babel/plugin-transform-runtime", 
            "@babel/plugin-proposal-optional-chaining", 
            "@babel/plugin-proposal-nullish-coalescing-operator"
          ]
        }
      }
    ]
  }
}