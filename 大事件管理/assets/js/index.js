$(function() {
    //调用函数获取用户基本信息
    getUserInfo()
})


//获取用户基本信息
function getUserInfo() {
    $.ajax({
        method: 'GET',
        url: '/my/userinfo',
        //请求头配置对象
        headers: {
            Authorization: localStorage.getItem('token') || ''
        },
        success: function(res) {
            if (res.status !== 0) {
                return layui.layer.msg('获取用户失败！')
            }
            console.log(res);
            // 调用renderAvater用户头像
            renderAvater(res.data)
        }
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