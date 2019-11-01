// 定义模块，依赖列表，回调函数
define(['evt','jquery'],function (evt,$){
    var message = {
        setAvatar: function (name) {
            $('.message').text('渲染' + name + '的消息列表模块...');
        }
    }
    evt.addlisten('loginSucc', function (data) { //订阅登录成功的消息
        message.setAvatar(data.name);
    });
    return {};
});