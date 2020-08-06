const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {
    devServer: {
        hot: true
    },
    mode: 'development'
}

module.exports = merge(baseConfig, config);

