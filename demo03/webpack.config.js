/**
 * Created by Administrator on 2016/3/18.
 */
var path = require('path');
module.exports = {
    entry: {
        'bundle':'./main.js'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js'
    },
    module: {
        loaders:[
            { test: /\.css$/, loader: 'style!css' },
        ]
    }
};
