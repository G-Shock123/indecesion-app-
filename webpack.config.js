const path = require('path')

module.exports={
    entry: ['babel-polyfill','./src/app2.js'],
    output:{
        path:path.join(__dirname,'public'),
        filename:'bundle.js'
    },
    module:{
        rules:[{ //rules are something that you want to happen each time webpack runs
            loader: 'babel-loader', //for a single loaders
            test: /\.js$/, //every time a file ends with .js webpack is going to load babel-loader
            exclude: /node_modules/ //I'm excluding node_modules 

        },{
            test: /\.s?css$/, //tests for css and .scss files
            use: [ //allows you to have an array of loaders
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
}