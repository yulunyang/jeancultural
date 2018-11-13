<?php
require __DIR__. '/__connect_db.php';

if(!isset($_GET['sid'])){
    exit;
    // die('hello!');
}

$sid = intval($_GET['sid']);

$sql = "DELETE FROM `goods` WHERE sid=$sid";


$stmt = $pdo->query($sql);
// $stmt = $pdo->query($sq2);

// echo $stmt->rowCount();
if(isset($_SERVER['HTTP_REFERER'])){
    header("Location: ".$_SERVER['HTTP_REFERER']);
}else{
    header("Location: ab_news.php");
}