const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|ts|jsx|tsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(gif|svg|jpg|png)$/,
        loader: "file-loader",
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
  },
};
