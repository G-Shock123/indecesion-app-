const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = (env) =>{
    const isProduction = env === 'production'
    const CSSExtract = new ExtractTextPlugin('styles.css')

    console.log(env);
    
    return{
        entry: ['babel-polyfill', './src/app.js'],
        output: {
            path: path.join(__dirname, 'public'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{ //rules are something that you want to happen each time webpack runs
                loader: 'babel-loader', //for a single loaders
                test: /\.js$/, //every time a file ends with .js webpack is going to load babel-loader
                exclude: /node_modules/ //I'm excluding node_modules 

            }, {
                test: /\.s?css$/, //tests for css and .scss files
                use:CSSExtract.extract({
                    use:[
                        {
                            loader:'css-loader',
                            options:{
                                sourceMap:true
                            }
                        },
                        {
                            loader:'sass-loader',
                            options:{
                                sourceMap:true
                            }
                        }
                        
                    ]
                })
            }]
        },
        plugins:[
            CSSExtract
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public')
        }
    }
    }

    





