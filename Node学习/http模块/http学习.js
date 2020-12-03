// // //安装服务器软件（IIS,Apache等），就能把电脑变成web服务器；
// // // node.js中，不需要服务器软件，只需要通过http模块，轻松手写一个服务器软件
// // // ip---计算机唯一地址，(a.b.c.d)0~255之间的十进制整数127.0.0.1本机电脑
// // // 域名与IP对应关系，存放在DNS（域名服务器）中；
// // //域名服务器就是提供IP地址和域名之间的转换服务的服务器；
// // //端口号：每个web服务对应一个端口号；80端口可以被省略；

// //1.导入，用来创建web服务器，将电脑变成web服务器
// const http = require('http');

// //2.创建一个web服务器实例
// const server = http.createServer();

// //3.使用服务器实例的.on()方法，为服务器绑定一个request事件
// server.on('request', (req, res) => {
//     //有客户端请求，就会触发request事件
//     console.log('Someone visit our web server');
//     //req请求对象，可以访问与客户端相关的数据或属性
//     //req.url==请求地址
//     //req.method==请求类型
//     console.log(req.url, "----", req.method);

//     //res访问与服务器相关的数据或属性
//     //res.end()----向客户端响应内容
//     //为了防止中文显示乱码，需要设置响应投 Content-Type的值为text/html;charset=utf-8
//     res.setHeader('Content-Type', 'text/html; charset=utf-8')
//     res.end("内容")
// })

// //4.调用服务器实例.listen()方法，启动当前服务器实例
// server.listen(80, () => {
//     console.log('http server running at http://127.0.0.1')
// })

// 根据不同url返回不同内容
/*
1.获取请求的URL地址
2.设置默认的响应内容为404 Not found
3.判断用户请求是否为/ 或 /index.html首页
4.判断用户请求是否为 /about.html
5.设置Content-Type响应头，防止中文乱码
6.使用res.end()把内容响应给客户端
*/
const http = require('http');
const server1 = http.createServer();
//检测服务
server1.on('request', (req, res) => {
    const url = req.url
    console.log(url);
    let content = "<h1>404 NOT Found</h1>"
    if (url == "/" || url == "/index.html") {
        content = "首页"
    } else if (url == "/about.html") {
        content = "about"
    }
    //设置请求头
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end(content)
})

//启动服务
server1.listen(80, () => {
    console.log('http server running at http://127.0.0.1');
})