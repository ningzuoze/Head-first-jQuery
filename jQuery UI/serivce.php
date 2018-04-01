<?php
     function fail($message){
        die(json_encode(array('status'=>'fail','message'=>$message)));
    }
    function success($message){
        die(json_encode(array('status'=>'success','message'=>$message)));
    }
    function db_connerction($query){
        $con=mysqli_connect('127.0.0.1','runner_db_user','123123') OR die ('链接失败！');//mysqli_connect('服务器名','数据库名','链接口令') OR die ("链接失败提示");
        mysqli_select_db($con,"add_monster");//要使用的表
    
        return  mysqli_query($con,$query);//执行查询语句mysql_query(查询语句);
    }//链接数据库并查询
        @$date=htmlspecialchars($_POST['sighting_date']);
        @$type=htmlspecialchars($_POST['creture_type']);
        @$distance=htmlspecialchars($_POST['creature_distance']);
        @$weight=htmlspecialchars($_POST['creature_weight']);
        @$height=htmlspecialchars($_POST['creature_height']);
        @$latitude=htmlspecialchars($_POST['creature_latitude']);
        @$longitude=htmlspecialchars($_POST['creature_longitude']);
        @$color=htmlspecialchars($_POST['creatuere_color']);

        echo  $date;
        //获取添加的内容
        $query="INSERT INTO add_monster (sighting_date,creture_type,creature_distance,creature_weight,creature_height,creature_latitude,creature_longitude,creatuere_color) VALUES('123','123','123','123','123','123','123','123');";
        $result =db_connerction($query);
        if($result){
            $msg="添加成功！";
            success($msg);
        }else{
            fail('添加失败！');
        }exit;


    
?>