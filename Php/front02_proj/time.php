<?php
date_default_timezone_set('Asia/Taipei');
echo date("Y-m-d H:i:s");
echo '<br>';

echo time(); //現在 timestamp
echo '<br>';

echo time()-6*30*24*60*60; //半年前
echo '<br>';
echo date("Y-m-d H:i:s", time()-6*30*24*60*60);

echo '<br>';
//$str = '2018-7-5';
$str = '7/1/2018';
$t = strtotime($str); // 字串轉換為 timestamp
echo date("Y-m-d H:i:s", $t);
