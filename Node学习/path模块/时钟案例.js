const path = require('path')
const fs = require('fs')

//读取
fs.readFile(path.join(__dirname, './/index.html'), 'utf-8', function(err, dataStr) {
    var source = dataStr
    if (err) {
        return console.log('fail' + err.message);
    }
    // 使用正则拆分
    // \s\S任意字符， * 多次
    var regstyle = /<style>[\s\S]*<\/style>/
    var regscript = /<script>[\s\S]*<\/script>/
    source = resolve(source, regstyle, 'style', 'css', '<link rel="stylesheet" href="./index.css"/>')

    resolve(source, regscript, 'script', 'js', '<script src="./index.js"></script>')
})

function resolve(source, reg, tag, dis, s) {
    // 1.使用正则提取内容
    const data = reg.exec(source)
    source = source.replace(data, "")
        // 将提取出来的文本进行处理
    const newData = data[0].replace('<' + tag + '>', s).replace('</' + tag + '>', "")
        //保存
    fs.writeFile(path.join(__dirname, './/index.' + dis), newData, 'utf-8', (err) => {
        if (err) return console.log(err.message)
        console.log('success---' + path.join(__dirname, './/index.', dis))
    })
    fs.writeFile(path.join(__dirname, './/index.html'), source, 'utf-8', (err) => {
        if (err) return console.log(err.message)
        console.log('success---' + path.join(__dirname, './/index.html'))
    })
    return source
}