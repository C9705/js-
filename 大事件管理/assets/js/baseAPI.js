$.ajaxPrefilter(function(options) {
    //注意每次调用$.get/post/ajax会先调用这个函数
    //这个函数能拿到我们给ajax提供的配置对象
    //在发送真正的请求之前，会自动调用，拼接路径
    options.url = 'http://ajax.frontend.itheima.net' + options.url;
})