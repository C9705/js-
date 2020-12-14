$(function() {
    // 获取文章分类列表
    initArtCaleList();

    //为添加类别添加事件
    var index = null;
    $('#btnAddCate').on('click', function() {
        // 通过layer.open()实现弹出层
        index = layer.open({
            title: '添加文章类别',
            type: 1,
            area: ['500px', '300px'],
            content: $('#dialog-add').html()

        });
    })



    // 获取文章分类列表
    function initArtCaleList() {
        $.ajax({
            method: 'GET',
            url: '/my/article/cates',
            success: function(res) {
                if (res.status !== 0) {
                    return layui.layui.msg('获取失败');
                }
                // 模板引擎
                $('tbody').empty();

                var htmlList = template('tpl', res);
                $('tbody').append(htmlList)
            }
        })
    }

    //新增分类
    // 通过代理的形式绑定submit事件
    $('body').on('submit', '#form-add', function(e) {
        e.preventDefault();
        $.ajax({
            method: 'POST',
            url: '/my/article/addcates',
            data: $(this).serialize(),
            success: function(res) {
                if (res.status !== 0) {
                    return layui.layer.msg('失败')
                }
                //根据索引关闭弹出层
                layer.close(index);
                initArtCaleList();
                layui.layer.msg('成功');
            }
        })
    })

    // 通过代理绑定实现编辑
    var indexEdit = null;
    $('tbody').on('click', '#btn-edit', function() {
        // 通过layer.open()实现弹出层
        indexEdit = layer.open({
            title: '修改文章类别',
            type: 1,
            area: ['500px', '300px'],
            content: $('#dialog-edit').html()
        });
        var id = $(this).attr('data-Id');
        $.ajax({
            method: 'GET',
            url: '/my/article/cates/' + id,
            success: function(res) {
                layui.form.val('form-edit', res.data);
            }
        })

    })

    //提交修改
    $('body').on('submit', '#form-edit', function(e) {
        e.preventDefault();
        $.ajax({
            method: 'POST',
            url: '/my/article/updatecate',
            data: $(this).serialize(),
            success: function(res) {
                if (res.status !== 0) {
                    return layui.layer.msg('更新失败');
                }
                layer.close(indexEdit)
                layui.layer.msg('Success')
                initArtCaleList()
            }
        })
    })

    // 删除
    $('tbody').on('click', '#btn-delete', function() {
        var ind = $(this).siblings().attr('data-id')
        layer.confirm('确认删除?', { icon: 3, title: '提示' }, function(index) {
            //do something
            $.ajax({
                method: 'GET',
                url: '/my/article/deletecate/' + ind,
                success: function(res) {
                    if (res.status !== 0) {
                        return layui.layer.msg('删除失败')
                    }
                    layui.layer.msg('成功')
                    initArtCaleList();
                }
            })
            layer.close(index);
        });


    })
})