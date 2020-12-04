//1.创建服务器
const http = require('http');
const server = http.createServer();

//创建path
const path = require('path');
//创建读取文件
const fs = require('fs')
server.on('request', (req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    //讲请求地址url映射为文件存放地址
    const url = req.url;
    let fpath = '';
    if (url == "/") {
        fpath = path.join(__dirname, './Clock/index_copy.html')
    } else {
        fpath = path.join(__dirname, './Clock', url)
    }
    fs.readFile(fpath, 'utf-8', (err, dataStr) => {
            if (err) return res.end('404 NOT FOUND')
            res.end(dataStr)
        })
        //设置请求头
})

//启动服务器
server.listen(80, () => {
    console.log('http server running at http://127.0.0.1/Clock/index_copy.html');
})