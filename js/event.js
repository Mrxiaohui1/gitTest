// 定义模块回调函数
define(function (){
    return { //消息事件
        clientList: {}, //缓存列表，存放订阅者的回调函数
        addlisten: function (key,fn) { //添加订阅者
            if (!this.clientList[key]) { //未订阅过此类消息，创建一个缓存列表
                this.clientList[key] = [];
            }
            this.clientList[key].push(fn); //订阅的消息添加进消息缓存列表
        },
        trigger: function (key,msg) { //发布消息方法
            var fnArr = this.clientList[key]; //取出该消息对应的回调函数集合
            if (!fnArr || fnArr.length == 0) {
                return false; // 如果未订阅该消息，则返回
            }
            for (var i = 0; i < fnArr.length; i++) {
                fnArr[i](msg); //执行所有回调函数
            }
        }
    }
});




var loginEvent = { //登录成功的消息事件
    clientList: {}, //缓存列表，存放订阅者的回调函数
    addlisten: function (key,fn) { //添加订阅者
        if (!this.clientList[key]) { //未订阅过此类消息，创建一个缓存列表
            this.clientList[key] = [];
        }
        this.clientList[key].push(fn); //订阅的消息添加进消息缓存列表
    },
    trigger: function (key,msg) { //发布消息方法
        var fnArr = this.clientList[key]; //取出该消息对应的回调函数集合
        if (!fnArr || fnArr.length == 0) {
            return false; // 如果未订阅该消息，则返回
        }
        for (var i = 0; i < fnArr.length; i++) {
            fnArr[i](msg); //执行所有回调函数
        }
    }
}