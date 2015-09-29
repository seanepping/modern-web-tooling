module.exports = {
    entry: "./js/app.js",
    output: {
        path: __dirname + '/dist',
        filename: "app.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
        ]
    }
};