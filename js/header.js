// 定义模块，依赖列表，回调函数
define(['evt','jquery'],function (evt,$){
    var header = {
        setAvatar: function (name,url) {
            $('.header').text('渲染' + name + '的头部列表模块...');
            $('.user').attr('src',url);
        }
    }
    evt.addlisten('loginSucc', function (data) { //订阅登录成功的消息
        header.setAvatar(data.name,data.imgurl);
    });
    return {};
});