<?php

if(! isset($from_cart)){
    $result['errorMsg'] = '請從cart.php進入';
    echo json_encode($result,JSON_UNESCAPED_UNICODE);
    exit;
};

if($body===null){
    $result['errorMsg'] = '輸入的 json 格式錯誤';
    echo json_encode($result, JSON_UNESCAPED_UNICODE);
    exit;
}

if(empty($body['sid'])){
    $result['errorMsg'] = '沒有產品的sid';
    echo json_encode($result,JSON_UNESCAPED_UNICODE);
    exit;
}

// 需要兩個參數: sid(必要)、qty

// $json = json_decode(file_get_contents('php://input'), true);
// var_dump($json['sid'],$json['qty']);


$sid = $body['sid'];
$qty = empty($body['qty']) ? 1 : intval($body['qty']);
$sql = sprintf(
    "SELECT * FROM `goods` WHERE `sid`=%s AND `on_sale`=1",
    // 是否要將條件加進stock<0
    $pdo->quote($sid)
);
$stmt = $pdo->query($sql);


if($stmt->rowCount()!=1){
    $result['errorMsg'] = '資料庫沒有這個產品';
    echo json_encode($result,JSON_UNESCAPED_UNICODE);
    exit;
};

if(isset($_SESSION['cart'][$sid])){
    $result['errorMsg'] = '該產品先前已加入購物車';
    $result['resultCode'] = 410;
    $result['cart'] = $_SESSION['cart'];
    echo json_encode($result, JSON_UNESCAPED_UNICODE);
    exit;
}

// 加入購物車
$_SESSION['cart'][$sid] = $qty;

$result['success']=true;
$result['resultCode']=200;
$result['cart']=$_SESSION['cart'];

echo json_encode($result, JSON_UNESCAPED_UNICODE);