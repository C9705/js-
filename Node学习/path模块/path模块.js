//导入
const path = require('path')

// path.join() -- - 多个路径片段拼接成一个完整的路径
path.join('/目录1', '/目录2'); //返回'/目录1/目录2'

// path.basename(path,[,扩展名])---从字符串中，文件名解析出来
path.basename('C:\\temp\\myfile.html')
console.log(path.basename('C:\\temp\\myfile.html')); //'myfile.html'
console.log(path.basename('C:\\temp\\myfile.html', '.html')); //'myfile'

//path.extname()---返回扩展名
path.extname('index.html') //'.html'