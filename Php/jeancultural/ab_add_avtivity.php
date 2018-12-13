<?php
require __DIR__. '/__connect_db.php';
$pname = 'add'; // 自訂的頁面名稱
if(!empty($_POST['account']) and !empty($_POST['keywords'])){

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

        $sql = "INSERT INTO `acccount`(`account`, `keywords`, `permission`) VALUES (?, ?, ?)";
 
        $stmt = $pdo->prepare($sql);
        
        $stmt->execute([
            $_POST['account'],
            $_POST['keywords'],
            $_POST['permission']

        ]);

        $result = $stmt->rowCount();
        if($result==1){
            $info = [
                'type' => 'success',
                'text' => '資料新增完成'
            ];
            header('Location: ab_accounts.php');

            
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
                <h5 class="card-title">新增促銷代碼 <?= isset($result)? $result : '' ?></h5>
                <form method="post" >
                    <div class="form-group">
                        <label for="account">帳號</label>
                        <input type="text" class="form-control"
                               id="account" name="account"
                               placeholder="Enter name">
                    </div>
                    <div class="form-group">
                        <label for="keywords">密碼</label>
                        <input type="keywords" class="form-control"
                               id="keywords" name="keywords" placeholder="Enter email">
                    </div>
                    <div class="form-group">
                        <label for="permission">權限</label>
                        <input type="text" class="form-control"
                               id="permission" name="permission" placeholder="Enter mobile">
                    </div>
                  
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>

            </div>
        </div>
    </div>
</div>
    <script>
        var name = $('#account'),
            email = $('#account'),
            i;

        function formCheck(){
            var birthday_pattern = /\d{4}\-\d{1,2}\-\d{1,2}/;
            var isPass = true;

            if(! name.val()){
                alert('請填寫帳號');
                isPass = false;
            }
            if(! email.val()){
                alert('請填寫密碼');
                isPass = false;
            }
            return isPass;
        }

    </script>
<?php include __DIR__. '/_db_foot.php';
