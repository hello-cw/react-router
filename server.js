var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js')

var proxy = [{
    path: '/api/*',
    target: 'http://localhost:3000/',
    secure: false
}];

//启动服务
var server = new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    proxy: proxy,
    stats: {
        colors: true
    },
});

//将其他路由，全部返回index.html
server.app.get('*', function (req, res) {
    res.sendFile(__dirname + '/dist/index.html')
});

server.listen(3100);