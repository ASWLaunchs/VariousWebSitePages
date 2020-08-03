<?php
$t= "'".$_POST["info"]."'";


$servername = "localhost";
$username = "root";
$password = "";
$dbname = "mydemo";
 
// 创建连接
$conn = new mysqli($servername, $username, $password, $dbname);
// 检测连接
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
} 
 
$sql = "insert into newdata(txt) values(".$t.")";
 
if ($conn->query($sql) === TRUE) {
    echo "新记录插入成功";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}