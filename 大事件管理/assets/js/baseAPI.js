$.ajaxPrefilter(function(options) {
    //注意每次调用$.get/post/ajax会先调用这个函数
    //这个函数能拿到我们给ajax提供的配置对象
    //在发送真正的请求之前，会自动调用，拼接路径
    options.url = 'http://ajax.frontend.itheima.net' + options.url;
    //同一为有权限的接口，设置headers请求头
    if (options.url.indexOf('/my/') !== -1) {
        options.headers = {
            //请求头配置对象
            Authorization: localStorage.getItem('token') || ''
        }
    }
    //全局统一挂载complete函数
    options.complete = function(res) {
        if (res.responseJSON.status === 1 &&
            res.responseJSON.message === "身份认证失败！") {
            // 1.强制清空token
            localStorage.removeItem('token');
            // 2.强制跳转
            location.href = '/大事件管理/home/login.html';
        }
    }

})