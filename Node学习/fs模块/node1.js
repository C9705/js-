// fs文件系统模块
// 导入
const fs = require('fs')

//fs.readFile(path[,options],callback)---读取文件内容
fs.readFile("./成绩_ok.txt", 'utf-8', function(err, dataStr) {
    console.log(err); // err--失败结果
    if (err == null) {
        console.log(dataStr) // dataStr--成功结果

    }
})

// fs.writeFile(Path, data[, options], callback) -- - 写入, 会替换原内容
fs.writeFile("./成绩_ok.txt", "哈哈", (err) => err)
fs.writeFile("./成绩_ok.txt", "哈哈", function(err) {
    if (err == null) {
        console.log("success");
    }
    // console.log(err)
})

// 动态路径拼接
// __dirname表示当前文件所处目录