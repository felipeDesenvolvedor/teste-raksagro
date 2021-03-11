const path = require('path');

module.exports = {
    entry: ['./build/js/index.js', './build/js/user.js'],
    output: {
        filename:'bundle.js',
        path:path.resolve(__dirname, 'assets/js')
    },
    module: {
        rules: [
            {
                test:/\.js/,
                exclude:/node_modules/,
                use: {
                    loader:'babel-loader'
                }
            }
        ]
    }
}