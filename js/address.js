// 定义模块，依赖列表，回调函数
define(['evt','jquery'],function (evt,$){
    var address = {
        setAvatar: function (name) {
            $('.address').text('渲染' + name + '的地址列表模块...');
        }
    }
    evt.addlisten('loginSucc', function (data) { //订阅登录成功的消息
        address.setAvatar(data.name);
    });
    return {};
});