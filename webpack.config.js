
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function (env = {}) {
 
      
    return {
        mode:"production",
        entry: env.mode != "production" ?  __dirname + "/main.js" : __dirname + "/src/index.js", //告诉webpack，项目的入库文件 __dirname 当面目录的绝对路径
        output: {
            path: __dirname + "/dist",
            filename:`pie3d.min.js`, //文件打包好后的名称叫什么
            globalObject: 'this',
            library: 'pie3djs',
            libraryTarget: env.module ? 'umd' : 'var',
        },
        module: {
            rules: [{
                test: /\.(frag|vert|glsl)$/,
                use: {
                  loader: 'raw-loader',
                  options: {},
                }
              }
            ]
        },
        devServer: { //配置本地开发服务器的相关
            port: 8848,
            contentBase: './',//告诉webpack起服务的根路径
            inline: true,
            hot: true //开启热更新
        },
        plugins: [
            new HtmlWebpackPlugin({ //自动将打包的文件引入到 唯一的html 
                template: __dirname + '/public/index.html',
                hash: true
            })

        ]
    }
}