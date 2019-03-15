<?php
    $username = $_POST["username"];
    $password = $_POST["password"];

    if(!$username || !$password){
        die('{"state":"error","errorType":"参数不能为空","stateCode":"2"}');
    }
    require("./connect.php");
    $select = "SELECT * FROM user";
    $select_res = mysql_query($select);

    while($row = mysql_fetch_array($select_res)){
        if($row["username"] === $username){
            if($row["password"] === $password){
                die("成功登录");
            }
        }
    }
?>