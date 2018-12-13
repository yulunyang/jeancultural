<?php
require __DIR__. '/__connect_db.php';
$pname = 'add'; // 自訂的頁面名稱
if(!empty($_POST['name']) and !empty($_POST['email'])){

    //    $sql = sprintf("INSERT INTO `address_book`(
    // `name`, `email`, `mobile`, `address`, `birthday`, `created_at`
    // ) VALUES (%s, %s, %s, %s, %s, NOW())",
    //        $pdo->quote($_POST['name']),
    //        $pdo->quote($_POST['email']),
    //        $pdo->quote($_POST['mobile']),
    //        $pdo->quote($_POST['address']),
    //        $pdo->quote($_POST['birthday'])
    //
    //        );
    //
    //    echo $sql;
    
    try {

        $sql = "INSERT INTO `members`(
  `members`(`member_sid`, `member_name`, `member_email`, `member_birthday`,
   `member_address`, `member_mobile`, `member_gender`, `member_vip`,
    `creat_at`, `amount_spent`, `member_keyword`
 ) VALUES (?, ?, ?, ?, ?,?, ?,?, NOW(),?, ?,)";
        $stmt = $pdo->prepare($sql);

        $stmt->execute([
            $_POST['member_name'],
            $_POST['memberemail'],
            $_POST['member_mobile'],
            $_POST['member_address'],
            $_POST['member_birthday'],
            $_POST['member_gender'],
            $_POST['member_vip'],
            $_POST['amount_spent'],
            $_POST['member_keyword'],
            
        ]);

        $result = $stmt->rowCount();
        if($result==1){
            $info = [
                'type' => 'success',
                'text' => '資料新增完成'
            ];
        } elseif($result==0) {
            $info = [
                'type' => 'danger',
                'text' => '資料沒有新增'
            ];
        }

//        if($result) {
//            echo '<script>alert("資料新增完成")</script>';
//        }

    } catch(PDOException $ex){

        // 如果 email 欄設定為唯一鍵, 不可重複輸入相同的 email
        // SQLSTATE[23000]: Integrity constraint violation: 1062 Duplicate entry 'aaa@bbb.com' for key 'email'

        echo $ex->getMessage();
        $info = [
            'type' => 'danger',
            'text' => 'email 請勿重複'
        ];
    }
}
    
    ?>
<?php include __DIR__. '/_db_header.php'; ?>
<?php include __DIR__. '/_db_nav.php'; ?>


<div class="container" style="margin-top: 20px">
    <?php if(isset($info)): ?>
    <div class="col-md-6">
        <div class="alert alert-<?= $info['type'] ?>" role="alert">
            <?= $info['text'] ?>
        </div>
    </div>
    <?php endif; ?>
    <div class="col-md-6">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">新增會員資料 <?= isset($result)? $result : '' ?></h5>
                <form method="post" >
                    <div class="form-group">
                        <label for="member_name">姓名</label>
                        <input type="text" class="form-control"
                               id="member_name" name="member_name"
                               placeholder="Enter name">
                    </div>
                    <div class="form-group">
                        <label for="member_email">電郵</label>
                        <input type="email" class="form-control"
                               id="member_email" name="member_email" placeholder="Enter email">
                    </div>
                    <div class="form-group">
                        <label for="member_mobile">手機</label>
                        <input type="text" class="form-control"
                               id="member_mobile" name="member_mobile" placeholder="Enter mobile">
                    </div>
                    <div class="form-group">
                        <label for="member_birthday">生日</label>
                        <input type="date" class="form-control"
                               id="member_birthday" name="member_birthday" placeholder="YYYY-MM-DD">
                    </div>
                    <div class="form-group">
                        <label for="member_address">地址</label>
                        <input type="text" class="form-control"
                               id="member_address" name="member_address" placeholder="Enter address">
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>

            </div>
        </div>
    </div>
</div>
    <script>
        var name = $('#name'),
            email = $('#email'),
            i;

        function formCheck(){
            var birthday_pattern = /\d{4}\-\d{1,2}\-\d{1,2}/;
            var isPass = true;

            if(! name.val()){
                alert('請填寫姓名');
                isPass = false;
            }
            if(! email.val()){
                alert('請填寫電子郵箱');
                isPass = false;
            }
            return isPass;
        }

    </script>
<?php include __DIR__. '/_db_foot.php';
