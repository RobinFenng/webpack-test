/**
 * Created by Administrator on 2016/3/18.
 */
var path = require('path');
module.exports = {
    entry: {
        'bundle1':'./entry1.js',
        'bundle2':'./entry2.js',
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js'
    }
};
