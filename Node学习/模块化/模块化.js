/*
1。模块化：解决一个复杂问题时，自顶向下逐层把系统划分成若干模块的过程；
    对于系统来说，模块是可组合，分解，更换的单元；
    提高代码的复用，可维护性，实现按需加载
2.模块化规范：
    例如：使用什么语法格式来引用模块；使用什么语法格式向外暴露成员；
3.模块的分类：
    1.内置模块  const fs = require('fs)
    2.自定义模块 const custom = require('./custom.js')
    3.第三方模块 const moment = require('monent')
4.加载模块
    require()    注意在加载用户自定义模块期间，可以省略.js后缀名
5.模块作用域
    只能在当前模块使用；
    防止全局变量污染问题；
    1.向外共享模块作用域中的成员
        在每个.js自定义模块中都有module对象，它存储了和当前模块有关的信息
        module.exports属性可以向外共享成员
        module.exports.属性
        module.exports.sayhello=()=>console.log('hello')
    注意：require()导入模块时，导入的结果，永远以module.exports指向的对象为准
    2.exports对象
        默认下，exports和module.exports指向同一个对象；
        最终共享结果，还是以module.exports指向对象为准；
        用exports挂载在属性和方法；

6.CommonJS规定
    1。每个模块内部，module变量代表当前模块；
    2.module变量是一个对象，它的exports属性（即module.exports）是对外接口；
    3.加载某个模块，其实是加载该模块的module.exports属性，require()用于加载模块；        
*/