<?php

	$user = $_GET["user"];
	$pass = $_GET["pass"];

	if ($user == "xiaocuo" && $pass == "123456"){
		echo '{"name":"景甜","sex":"女","age":"27","nicename":"甜甜","imgurl":"img/jt1.png","id":"abc1001"}';
	}else{
		if ($user == "" || $pass == "") {
			echo '账号密码不能为空';
		} else if ($user != "xiaocuo"){
			echo '账号错误';
		}else if ($pass != "123456"){
			echo '密码错误';
		};
	};

?>