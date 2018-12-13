<?php

if(! isset($from_cart)){
    $result['errorMsg'] = '請從 cart.php 訪問';
    echo json_encode($result, JSON_UNESCAPED_UNICODE);
    exit;
};

if($body===null){
    $result['errorMsg'] = '輸入的 json 格式錯誤';
    echo json_encode($result, JSON_UNESCAPED_UNICODE);
    exit;
}

// 需要參數: sid(必要)
if (empty($body['sid'])){
    $result['errorMsg'] = '參數不足';
    $result['resultCode'] = 431;
    echo json_encode($result, JSON_UNESCAPED_UNICODE);
    exit;   
} else{
    $sid=$body['sid'];

    // 如果購物車目前沒有該產品
    if(! isset($_SESSION['cart'][$sid])){
        $result['errorMsg'] = '購物車裡沒有該產品';
        $result['resultCode'] = 432;
        $result['cart'] = $_SESSION['cart'];
        echo json_encode($result, JSON_UNESCAPED_UNICODE);
        exit;
    }
    
    // 購物車有該產品，進行刪除
    else{
        unset($_SESSION['cart'][$sid]);
        $result['success'] = true;
        $result['resultCode'] = 200;
        $result['cart'] = $_SESSION['cart'];
        echo json_encode($result, JSON_UNESCAPED_UNICODE);
    }
}










