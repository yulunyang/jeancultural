<?php
require __DIR__. '/__connect_db.php';

$pname = 'edit'; // 自訂的頁面名稱

if(!isset($_GET['sid'])){
    header('Location: ab_list.php');
    exit;
}
$sid =  intval($_GET['sid']);

if(!empty($_POST['account']) ){
    try {

        $sql = "UPDATE `acccount` SET `account`=?,`keywords`=?,`permission`=? WHERE `sid`=?";
        $stmt = $pdo->prepare($sql);

        $stmt->execute([
            $_POST['account'],
            $_POST['keywords'],
            $_POST['permission'],
            $sid
        ]);

        $result = $stmt->rowCount();
        if($result==1){
            $info = [
                'type' => 'success',
                'text' => '資料修改成功'
            ];
        } elseif($result==0) {
            $info = [
                'type' => 'danger',
                'text' => '資料修改失敗'
            ];
        }

    } catch(PDOException $ex){
        echo $ex->getMessage();
        //echo '---'. $ex->getCode(). '---';
//        $info = [
//            'type' => 'danger',
//            'text' => 'email 請勿重複'
//        ];
    }
}

$r_sql = "SELECT * FROM acccount WHERE sid=$sid";
$r_row = $pdo->query($r_sql)->fetch(PDO::FETCH_ASSOC);

if(empty($r_row)){
    // 如果沒有該筆資料,就到列表頁
    header('Location: ab_list.php');
    exit;
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
                <h5 class="card-title">修改資料</h5>
                <form method="post" >
                    <div class="form-group">
                        <label for="account">帳號</label>
                        <input type="text" class="form-control"
                               id="account" name="account" value="<?= htmlentities($r_row['account']) ?>"
                               placeholder="Enter account">
                    </div>
                    <div class="form-group">
                        <label for="keywords">密碼</label>
                        <input type="keywords" class="form-control"
                               id="keywords" name="keywords" value="<?= htmlentities($r_row['keywords']) ?>"
                               placeholder="Enter keywords" >
                    </div>
                    <div class="form-group">
                        <label for="permission">權限</label>
                        <input type="text" class="form-control"
                               id="permission" name="permission" value="<?= htmlentities($r_row['permission']) ?>"
                               placeholder="Enter permission">
                    </div>                
                    <button type="submit" class="btn btn-primary">修改</button>
                </form>

            </div>
        </div>
    </div>
</div>
    <script>
        var name = $('#account'),
            email = $('#keywords'),
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