<?php
    include "conn.php";
    $dbh=connDB();

    $act=$_REQUEST['act'];
    if($act=="checkUsername"){
        $username=$_GET["username"];
        $sql="select * from user where username='$username'";
        $rs=$dbh->query($sql)->fetchAll();
        $returnValue = count($rs)==0?"no":"yes";
       
        echo(json_encode(array("rs"=>$returnValue)));
        
    }
    else if($act=="createNewuser"){
        $username=$_POST['username'];
        $trueName=$_POST['trueName'];
        $password=$_POST['userpwd'];
        $sex=$_POST['sex'];
        $age=$_POST['age'];
        $favor=$_POST['favor'];
        $province=$_POST['province'];
        $intro=$_POST['brief'];
        
        $sql="insert into user(username,trueName,password,sex,age,favor,province,intro) values('$username','$trueName','$password','$sex','$age','$favor','$province','$intro')";
        $rs=$dbh->exec($sql);
        $data=($rs>0)?"yes":"no";
        echo(json_encode(array("rs"=>$data)));
    }


?>