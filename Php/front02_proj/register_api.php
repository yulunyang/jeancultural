<?php
require __DIR__.'/__db_connect.php';

$result = [
    'success' => false,
    'resultCode' => 400,
    'errorMsg' => '註冊資料不足',
    'postData' => '',
];
if(
    !empty($_POST['email']) and
    !empty($_POST['password']) and
    !empty($_POST['nickname'])
){
    $result['postData'] = $_POST;

    // 請自己做資料的檢查

    $hash = sha1($_POST['email']. uniqid());
    $sql = "INSERT INTO `members`(
        `email`, `password`, `mobile`, `address`,
         `birthday`, `hash`, `activated`, `nickname`,
          `created_at`) VALUES (
            ?, ?, ?, ?,
            ?, '$hash', 0, ?,
            NOW()
          )";
    try{
        $stmt = $pdo->prepare($sql);
        $stmt->execute([
            $_POST['email'],
            sha1($_POST['password']),
            $_POST['mobile'],
            $_POST['address'],
            $_POST['birthday'],
            $_POST['nickname'],
        ]);
        $result['success'] = true;
        $result['resultCode'] = 200;
        $result['errorMsg'] = '';
    }catch (PDOException $ex){
        $result['resultCode'] = 402;
        $result['errorMsg'] = $ex->getMessage();
    }
}
echo json_encode($result, JSON_UNESCAPED_UNICODE);
