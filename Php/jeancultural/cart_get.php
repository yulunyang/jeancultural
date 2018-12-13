<?php

if(! isset($from_cart)){
    $result['errorMsg'] = '請從 cart.php 訪問';
    echo json_encode($result, JSON_UNESCAPED_UNICODE);
    exit;
};

$keys = array_keys($_SESSION['cart']);

// 購物車裡面要有商品才可以找產品資料
if(!empty($keys)){
    $sql = sprintf("SELECT * FROM goods WHERE sid IN (%s)",
            implode(',', $keys)
        );

    //echo $sql;
    //exit;
    $stmt = $pdo->query($sql);

    $result = [
        'success' => true,
        'resultCode' => 200,
        'errorMsg' => '',
        'method' => $method,
        'cart' => $_SESSION['cart'],
        'sequence' => $keys,    //索引式陣列，可以保有順序
        'cartProducts' => $stmt->fetchAll(PDO::FETCH_ASSOC),
    ];
} else{
    $result = [
        'success' => true,
        'resultCode' => 200,
        'errorMsg' => '',
        'method' => $method,
        'cart' => $_SESSION['cart'],
        'cartProducts' => [],
    ];
}

echo json_encode($result, JSON_UNESCAPED_UNICODE);










