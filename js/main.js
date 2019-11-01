require.config({
    baseUrl: 'js',
    paths: {
        'evt': 'event',
        'lgi': 'login',
        'hed': 'header',
        'nav': 'nav',
        'adr': 'address',
        'msg': 'message',
        'jquery': 'http://libs.baidu.com/jquery/2.0.3/jquery'
    }
});

require(['jquery','evt','hed','nav','adr','msg','lgi'],function ($){
    $('.status').text('页面渲染完成！');
});

