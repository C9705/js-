// //安装服务器软件（IIS,Apache等），就能把电脑变成web服务器；
// // node.js中，不需要服务器软件，只需要通过http模块，轻松手写一个服务器软件
// // ip---计算机唯一地址，(a.b.c.d)0~255之间的十进制整数127.0.0.1本机电脑
// // 域名与IP对应关系，存放在DNS（域名服务器）中；
// //域名服务器就是提供IP地址和域名之间的转换服务的服务器；
// //端口号：每个web服务对应一个端口号；80端口可以被省略；

//1.导入，用来创建web服务器，将电脑变成web服务器
const http = require('http');

//2.创建一个web服务器实例
const server = http.createServer();

//3.使用服务器实例的.on()方法，为服务器绑定一个request事件
server.on('request', (req, res) => {
    //有客户端请求，就会触发request事件
    console.log('Someone visit our web server');
})

//4.调用服务器实例.listen()方法，启动当前服务器实例
server.listen(80, () => {
    console.log('http server running at http://127.0.0.1')
})