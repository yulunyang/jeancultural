<?php
require __DIR__. '/__connect_db.php';

$pname = 'edit'; // 自訂的頁面名稱

if(!isset($_GET['sid'])){
    header('Location: ab_member.php');
    exit;
}
$sid =  intval($_GET['sid']);

if(!empty($_POST['members']) ){
    try {

        $sql = "UPDATE `members` SET `member_name`=?,`member_email`=?,`member_address`=? ,`member_birthday`=?,`member_mobile`=?,`member_gender`=?,`member_vip`=?,`amount_spent`=?,`member_keyword`=? WHERE `sid`=?";
        $stmt = $pdo->prepare($sql);
        $stmt->execute([
            $_POST['member_name'],
            $_POST['member_email'],
            $_POST['member_address'],
            $_POST['member_birthday'],
            $_POST['member_mobile'],
            $_POST['member_gender'],
            $_POST['member_vip'],
            $_POST['amount_spent'],
            $_POST['member_keyword'],
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

$r_sql = "SELECT * FROM members WHERE sid=$sid";
$r_row = $pdo->query($r_sql)->fetch(PDO::FETCH_ASSOC);

if(empty($r_row)){
    // 如果沒有該筆資料,就到列表頁
    header('Location: ab_member.php');
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
                <h5 class="card-title">修改會員資料</h5>
                <form method="post" >
                    <div class="form-group">
                        <label for="member_name">姓名</label>
                        <input type="text" class="form-control"
                               id="member_name" name="member_name" 
                               placeholder="Enter name" value="<?= htmlentities($r_row['member_name']) ?>">
                    </div>
                    <div class="form-group">
                        <label for="member_email">email</label>
                        <input type="email" class="form-control" value="<?= htmlentities($r_row['member_email']) ?>"
                               id="member_email" name="member_email" placeholder="Enter email" disabled>
                    </div>
                    <div class="form-group">
                        <label for="member_keyword">密碼</label>
                        <input type="text" class="form-control" value="<?= htmlentities($r_row['member_keyword']) ?>"
                               id="member_keyword" name="member_keyword" placeholder="Enter passwords">
                    </div>
                    <div class="form-group">
                        <label for="member_mobile">手機</label>
                        <input type="text" class="form-control" value="<?= htmlentities($r_row['member_mobile']) ?>"
                               id="member_mobile" name="member_mobile" placeholder="Enter mobile">
                    </div>
                    <div class="form-group">
                        <label for="member_birthday">生日</label>
                        <input type="date" class="form-control" value="<?= htmlentities($r_row['member_birthday']) ?>"
                               id="member_birthday" name="member_birthday" placeholder="YYYY-MM-DD">
                    </div>
                    <div class="form-group">
                        <label for="member_address">地址</label>
                        <input type="text" class="form-control" value="<?= htmlentities($r_row['member_address']) ?>"
                               id="member_address" name="member_address" placeholder="Enter address">
                    </div>
                    <div class="form-group">
                        <label for="member_gender">性別</label>
                        <select class="form-control" id="member_gender" name="member_gender" value="<?= $r_row['member_gender'] ?>">
                        <option value="男" <?php if($r_row['member_gender']=="男") echo"selected";?>>男</option>
                        <option value="女" <?php if($r_row['member_gender']=="女") echo"selected";?>>女</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="member_vip">會員等級</label>
                        <select class="form-control" id="member_vip" name="member_vip" >
                        <option value="0"<?php if($r_row['member_vip']=="0") echo"selected";?>>普通</option>
                        <option value="1"<?php if($r_row['member_vip']=="1") echo"selected";?>>VIP</option>
                        <option value="2"<?php if($r_row['member_vip']=="2") echo"selected";?>>VVIP</option>
=
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="creat_at">註冊時間</label>
                        <input type="text" class="form-control" value="<?= htmlentities($r_row['creat_at']) ?>"
                               id="creat_at" name="creat_at" placeholder="" disabled>
                    </div>
                    <div class="form-group">
                        <label for="amount_spent">消費額度</label>
                        <input type="text" class="form-control" value="<?= htmlentities($r_row['amount_spent']) ?>"
                               id="amount_spent" name="amount_spent" placeholder="Enter amount">
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>

            </div>
            
        </div>
        
    </div>
</div>

    <!-- <script>
        var name = $('#member_email'),
            email = $('#member_keywords'),
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

    </script> -->