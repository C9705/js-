$(function() {
    //定义一个查询对象，请求数据的时候，需要将参数对象提交到服务器
    var q = {
        pagenum: 1, //页码
        pagesize: 1, //每页数量
        cate_id: "", //分类
        state: "" //状态
    }

    // 时间过滤器
    template.defaults.imports.filterName = function(date) {
        const dt = new Date(date);
        return dt.getFullYear() + '-' + zero(dt.getMonth() + 1) + '-' + zero(dt.getDay()) + " " + zero(dt.getHours()) + ":" + zero(dt.getMinutes()) + ":" +
            zero(dt.getSeconds())
    }

    //补零
    function zero(n) {
        if (n > 9) {
            return n
        }
        return n = "0" + n;
    }

    //获取文章列表
    getArt_list(q);
    initCate()




    function getArt_list(q) {
        $.ajax({
            method: 'GET',
            url: '/my/article/list',
            data: q,
            success: function(res) {
                if (res.status !== 0) {
                    return layui.layui.msg('获取失败');
                }
                console.log(res);
                var htmlList = template('tpl', res);
                $('tbody').empty()
                $('tbody').append(htmlList);
                // 调用分页方法
                renderPage(res.total);
            }
        })
    }


    // 获取文章分类
    function initCate() {
        $.ajax({
            method: 'GET',
            url: '/my/article/cates',
            success: function(res) {
                if (res.status !== 0) {
                    return layui.layer.msg("失败");
                }
                var statetpl = template('tplstate', res);
                $('#ate-id').append(statetpl);
                //layui需要重新渲染表单
                layui.form.render();
            }
        })
    }

    //实现筛选
    $('#form-Search').on('submit', function(e) {
        e.preventDefault();
        // 获取选择器中表单的值
        var cateid = $('[name="ate_id"]').val();
        var state = $('[name="state"]').val();
        // 填充到q
        q.cate_id = cateid;
        q.state = state;
        // 根据最新条件重新渲染表格
        getArt_list(q);

    })

    // 分页方法
    function renderPage(total) {
        // total是数据总数
        // console.log(total);
        //layui渲染分页
        // total = total || 1;
        // q.pagesize = q.pagesize || 1;
        // q.pagenum = q.pagenum || 1;
        layui.use('laypage', function() {
            var laypage = layui.laypage;
            //执行一个laypage实例
            laypage.render({
                elem: 'test1', //注意，这里的 test1 是 ID，不用加 # 号
                count: total, //数据总数，从服务端得到
                limit: q.pagesize,
                curr: q.pagenum,
                limits: [1, 3, 5],
                layout: ['count', 'limit', 'prev', 'page', 'next', 'skip'],
                // 分页切换时，拿到页码值
                // 只要调用renderPage方法，就会调用jump回调函数
                jump: function(obj, first) {
                    // 最新的页码值赋值给q
                    // console.log(obj.curr); //得到当前页，以便向服务端请求对应页的数据。
                    // console.log(obj.limit); //得到每页显示的条数
                    q.pagenum = obj.curr;
                    q.pagesize = obj.limit;
                    // 通过判断first的布尔值，来结束死循环
                    if (!first) {
                        getArt_list(q);
                    }
                }
            });
        });
    }

    // 通过代理， 为删除按钮绑定事件
    $('tbody').on('click', '#btn-delete', function() {
        // 获取删除按钮的个数
        var len = $('#btn-delete').length
            // 使用layui弹出层进行询问是否删除数据
        var ind = $(this).attr('data-id')
        layer.confirm('确认删除？', { icon: 3, title: '提示' }, function(index) {
            //do something
            $.ajax({
                method: 'GET',
                url: '/my/article/delete/' + ind,
                success: function(res) {
                    if (res.status !== 0) {
                        console.log(res);
                        return layui.layer.msg('删除失败')
                    }
                    layui.layer.msg('删除成功')
                        //当数据删除完成后，需要判断当前页是否有剩余数据，如果没有，则让页码值-1，在重新调用加载页面数据 
                    if (len === 1) {
                        // 证明页面中没有数据了
                        // 页码最小为1  
                        q.pagenum = q.pagenum === 1 ? 1 : q.pagenum - 1
                    }

                    getArt_list(q)
                    initCate()
                }
            })
            layer.close(index);
        });


    })

})