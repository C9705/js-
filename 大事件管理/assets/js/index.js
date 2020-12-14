$(function() {
    //调用函数获取用户基本信息
    getUserInfo();
    //退出
    $('#exit').on('click', function() {
        exit();
    })
})


//获取用户基本信息
function getUserInfo() {
    $.ajax({
        method: 'GET',
        url: '/my/userinfo',
        success: function(res) {
                if (res.status !== 0) {
                    return layui.layer.msg('获取用户失败！')
                }
                // console.log(res);
                // 调用renderAvater用户头像
                renderAvater(res.data)
            }
            // //不论成功还是失败，ajax都会调用complete回调函数
            // complete: function(res) {
            //     //在complete中，可以使用res.responseJSON拿到服务器响应的数据
            //     // console.log(res.responseJSON);
            // if (res.responseJSON.status === 1 &&
            //     res.responseJSON.message === "身份认证失败！") {
            //     // 1.强制清空token
            //     localStorage.removeItem('token');
            //     // 2.强制跳转
            //     location.href = '/大事件管理/home/login.html';
            // }
            // }
    })
}
//渲染头像 
function renderAvater(user) {
    // 1.获取用户名称
    var name = user.nickname || user.username
    $('.welcome').html(`欢迎&nbsp&nbsp${name}`);
    // 2.渲染头像
    if (user.user_pic !== null) {
        $('.layui-nav-img').attr('src', user.user_pic).show();
        $('.text-avater').hide()
    } else {
        $('.text-avater').html(name[0].toUpperCase()).show();
        $('.layui-nav-img').hide()
    }

}
//退出
function exit() {
    localStorage.removeItem('token');
    location.href = '/大事件管理/home/login.html';
}