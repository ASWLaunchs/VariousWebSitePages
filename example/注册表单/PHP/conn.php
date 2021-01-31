<?php
function connDB()
{
    $dbh = new PDO("mysql:host=localhost;dbname=mydemo","root","");
    $dbh->query("set names utf8");
    return($dbh);
}


?>