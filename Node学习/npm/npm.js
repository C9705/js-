/*
包：基于内置模块封装出来的，提升开发效率；
自行搜索包：https://www.npmjs.com/
服务器下载包：https://registry.npmjs.org/
安装包
npm install 包的完整名称 
npm i 包的完整名称

项目目录中node_modules文件夹用来存放所有已安装的包
package-lock.json配置文件用来记录node_modules目录下每一个包的下载信息
*/
//格式化时间包http://momentjs.cn/
const moment = require('moment');
const { type } = require('os');
//参考momentAPI文档，进行使用
const dt = moment().format('YYYY-MM-DD HH:mm:ss');

console.log(dt);
console.log(type(dt));