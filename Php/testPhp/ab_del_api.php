<?php
require __DIR__. '/__connect_db.php';

$result = [
    'success' => false, //資料取得是否成功
    'resultCode' => 400, //狀態碼
    'errorMsg' => '沒有 post 資料', //錯誤訊息
    'delData' => [],
    'rowCount'=>0
];

if(!isset($_GET['sid'])){

    exit();
}
    
    $result['delData'] = $_GET;

    $sid =  intval($_GET['sid']);

    $sql = "DELETE FROM `address_book` WHERE sid=$sid";

    $stmt = $pdo->query($sql);

   
    // $result['rowCount'] = 1;

    if($stmt->rowCount()== 1){
        $result['success'] = true;
        $result['resultCode'] = 200;
        $result['errorMsg'] = '';
        $result['delData'] = $_GET['sid'];
        $result['rowCount'] = '';


    } else {
        $result['resultCode'] = 405;
        $result['errorMsg'] = '資料沒有刪除';
}




echo json_encode($result, JSON_UNESCAPED_UNICODE);

