<?php
     function fail($message){
        die(json_encode(array('status'=>'fail','message'=>$message)));
    }
    function success($message){
        die(json_encode(array('status'=>'success','message'=>$message)));
    }
    function db_connerction($query){
        $con=mysqli_connect('127.0.0.1','runner_db_user','123123') OR die ('链接失败！');//mysqli_connect('服务器名','数据库名','链接口令') OR die ("链接失败提示");
        mysqli_select_db($con,"hfjq_race_info");//要使用的表
    
        return  mysqli_query($con,$query);//执行查询语句mysql_query(查询语句);
    }//链接数据库并查询



    if(@$_POST['action']=='addRunner'){
        $fname=htmlspecialchars($_POST['txtFirstName']);
        $lname=htmlspecialchars($_POST['txtLastName']);
        $gender=htmlspecialchars($_POST['ddlGender']);
        $minutes=htmlspecialchars($_POST['txtMinutes']);
        $seconds=htmlspecialchars($_POST['txtSeconds']);
        //获取添加的内容
        if(preg_match('/[^\w\s]/i',$fname)||preg_match('/[^\w\s]/i',$lname)){
            fail('Invalid name provided.');
        }
        if(empty($fname)||empty($lname)){
            fail('please select a first and last name.');
        }
        if(empty($gender)){
            fail('Please select a gender.');
        }
        $time=$minutes.":".$seconds;
        $query="INSERT INTO runners SET first_name='$fname',last_name='$lname',gender='$gender',finish_time='$time'";
        $result =db_connerction($query);
        if($result){
            $msg="添加成功！";
            success($msg);
        }else{
            fail('添加失败！');
        }exit;
    }elseif($_GET['action']=='getRunners'){
        $query = "SELECT first_name,last_name,gender,finish_time FROM runners order by finish_time ASC";//查询语句
        $result=db_connerction($query);//创建变量储存查询的内容
    
        $runners=array();//用来储存JSON
    
        while($row=mysqli_fetch_array($result,MYSQLI_ASSOC)){
            array_push($runners,array('fname'=>$row['first_name'],'lname'=>$row['last_name'],'gender'=>$row['gender'],'time'=>$row['finish_time']));
        }//循环查找
        echo json_encode(array("runners"=>$runners));//进行json编码
        exit;//
    }



















    
?>