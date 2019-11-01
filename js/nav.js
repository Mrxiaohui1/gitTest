// 定义模块，依赖列表，回调函数
define(['evt','jquery'],function (evt,$){
    var nav = {
        setAvatar: function (name) {
            $('.nav').text('渲染' + name + '的导航列表模块...');
        }
    }
    evt.addlisten('loginSucc', function (data) { //订阅登录成功的消息
        nav.setAvatar(data.name);
    });
    return {};
});