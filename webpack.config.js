/**
 * Created by Administrator on 2016/3/18.
 */
var path = require('path');
module.exports = {
    entry: {
        bundle1:'./main.js',
        bundle2:'./main1.js',
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js'
    }
};
