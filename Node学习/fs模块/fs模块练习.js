// 处理成绩
const fs = require('fs')
fs.readFile('./成绩.txt', 'utf-8', function(err, dataStr) {
    if (err == null) {
        const arrOld = dataStr.split(" ")
        const arrNew = []
        arrOld.forEach((Ele) => {
            arrNew.push(Ele.replace("=", "："))
        })
        fs.writeFile('./成绩_ok.txt', arrNew.join("\r\n"), err => {
            if (err) {
                return console.log('写入失败' + err)
            }
            console.log('写入成功');
        })
    } else {
        console.log('读取失败');
    }
})
console.log(__dirname);