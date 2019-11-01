// 定义模块，依赖列表，回调函数
define(['evt','jquery'],function (evt,$){
    $.ajax({
        type: 'get',
        url: 'data/user.php',
        data: 'user=xiaocuo&pass=123456',
        dataType: 'json',
        success: function (json) {
            evt.trigger('loginSucc', json); // 发布登录成功消息\
            $('.login').text('用户登录成功！');
        }
    })
    return {};
});