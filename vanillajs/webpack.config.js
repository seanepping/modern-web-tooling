module.exports = {
    entry: "./js/app.js",
    output: {
        path: __dirname + '/dist',
        filename: "modern-web-arsenal.js"
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    modules: 'amd',
                    moduleIds: true
                }
            }
        ]
    }
};