const path = require('path');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, '../src/index.js'), //指定入口文件，程序从这里开始编译,__dirname当前所在目录, ../表示上一级目录, ./同级目录
    output: {
        path: path.resolve(__dirname, '../dist'), // 输出的路径
        filename: 'bundle.js'  // 打包后文件
    },
    module: {
        rules: [

            { 
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, 
                exclude: /node_modules/,
                loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
            },
            { 
                test: /\.png$/, 
                exclude: /node_modules/,
                loader: "file-loader?name=images/[hash:8].[name].[ext]" 
            },
            {
                test: /\.(js|jsx)$/,
                // use: {
                //     loader: 'babel-loader',
                //     options: {
                //         presets: ['es2015', 'react'],
                //     }
                // },
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(jsx|js)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                }
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
                // loader: "style-loader!css-loader?modules"
            }
        ]
    },
    plugins: [
        new OpenBrowserPlugin({ url: 'http://localhost:9090/webpack-dev-server/' })
    ],
    externals:{
        'jquery':'window.jQuery'
    }
}