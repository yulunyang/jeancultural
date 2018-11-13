<?php
require __DIR__. '/__connect_db.php';

$result = [
    'success' => false,
    'resultCode' => 400,
    'errorMsg' => '註冊資料不足',
    'postData' => '',
];
if(
    !empty($_POST['account']) and
    !empty($_POST['keywords'])
){
    $result['postData'] = $_POST;
    // 請自己做資料的檢查
    $sql = "SELECT `sid`, `account`, `keywords`, `permission` 
        FROM `acccount` WHERE `account`=? AND `keywords`=?";
    try{
        $stmt = $pdo->prepare($sql);
        $stmt->execute([
            $_POST['keywords'],
            $_POST['keywords'],
        ]);
        if($stmt->rowCount()==1){
            // 記錄到 session
            $_SESSION['user'] = $stmt->fetch(PDO::FETCH_ASSOC);
            $result['success'] = true;
            $result['resultCode'] = 200;
            $result['errorMsg'] = '';
            // 丟回 client
            $result['user'] = $_SESSION['user'];
        } else{
            $result['resultCode'] = 404;
            $result['errorMsg'] = '帳號或密碼錯誤';
        }

    }catch (PDOException $ex){
        $result['resultCode'] = 402;
        $result['errorMsg'] = $ex->getMessage();
    }

}
echo json_encode($result, JSON_UNESCAPED_UNICODE);