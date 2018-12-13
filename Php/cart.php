<?php
require __DIR__.'/__connect_db.php';

header('Content-Type:application/json');
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");

if(! isset($_SESSION['cart'])){
    $_SESSION['cart']=[];
}

$method = $_SERVER['REQUEST_METHOD'];


$result =[
  'success' => false,
  'resultCode' => 400,
  'method'=> $method,
  'errorMsg' => '',
  'cart'=> null,
];

$from_cart = true;

$body = file_get_contents('php://input');
$body = json_decode($body,true);

switch ($method){
    case 'GET':
        require __DIR__. '/cart_get.php';
        exit;
    case 'POST':
        require __DIR__.'/cart_post.php';
        exit;
    case 'PUT':
        require __DIR__.'/cart_put.php';
        exit;
    case 'DELETE':
        require __DIR__.'/cart_delete.php';
        exit;
}

// echo json_encode($result,JSON_UNESCAPED_UNICODE);