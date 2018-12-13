<?php
require __DIR__. '/__connect_db.php';

$page_name = 'login';


if(isset($_POST['account'])){

    $doChecked = true;

    $sql = sprintf("SELECT `sid`, `account`, `keywords`, `permission`
            FROM `acccount` WHERE `account`=%s AND `keywords`=%s",
            $pdo->quote($_POST['account']),
            $pdo->quote($_POST['keywords'])

        );
// echo $sql;exit;
    $stmt = $pdo->query($sql);

    if($stmt->rowCount()==1){
        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        $_SESSION['user'] = $row;
       
    }
} else {

    unset($_SESSION['come_from']);
    if(!empty($_SERVER['HTTP_REFERER'])){
        $_SESSION['come_from'] = $_SERVER['HTTP_REFERER'];
        // 

    }
    // echo $_SERVER['HTTP_REFERER'];
}

?>
<?php include __DIR__. '/_db_header.php'; ?>
<?php include __DIR__. '/_db_nav.php'; ?>
<div class="container">
    <?php if(isset($doChecked)):  ?>
        <?php if(isset($_SESSION['user'])):  ?>
            <div id="main_alert" class="alert alert-success" role="alert">
               Hi! Hope you’re great today :)             
                
            </div>         
                    
            <script>
                setTimeout(function(){
                    <?php if(empty($_SESSION['come_from'])): ?>
                        location.href = 'login.php';
                    <?php else: ?>
                        location.href = '<?= $_SESSION['come_from'] ?>';
                        location.href = '_db_index.php';
                    <?php
                        unset($_SESSION['come_from']);

                    endif; ?>
                }, 3000);
            </script>
        <?php else: ?>
            <div id="main_alert" class="alert alert-danger" role="alert">
                帳號或密碼錯誤
            </div>
        <?php endif;  ?>
    <?php endif;  ?>


    <div class="row" style="margin-top: 20px">
        <div class="col-md-6">
            <div class="card d-flex ">
                <div class="card-header">
                    會員登入
                </div>
                <div class="card-body">

                    <form id="myform" method="post" onsubmit="return checkForm();">
                        <div class="form-group">
                            <label for="account">** 帳號</label>
                            <input type="text" class="form-control" id="account" name="account" placeholder="請輸入帳號"
                                   value="">
                            <small id="email_info" class="form-text text-muted">請輸入正確的帳號</small>
                        </div>


                        <div class="form-group">
                            <label for="keywords">** 密碼</label>
                            <input type="keywords" class="form-control" id="keywords" name="keywords" placeholder="請輸入密碼"
                                   value="">
                            <small id="keywords" class="form-text text-muted">請輸入密碼</small>
                        </div>                 

                        <?php if(isset($doChecked)):  ?>
                            <?php if(isset($_SESSION['user'])):  ?>
                            <?php endif;  ?>
                        <?php else: ?>
                            <button type="submit" class="btn btn-primary login_btn">登入</button>
                        <?php endif;  ?>
                    </form>
                </div>
            </div>
        </div>
    </div>


</div>

<style>
    small.form-text.text-muted {
        color: red !important;
        display: none;
    }
</style>
<script
  src="https://code.jquery.com/jquery-3.3.1.min.js"
  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
  crossorigin="anonymous"></script>


<script>
    let myform = $('#myform');

    function checkForm(){
        let isPass = true;

        if(! myform[0].account.value){
            isPass = false;
            alert('請填寫 email');
        }

        if(! myform[0].keywords.value){
            isPass = false;
            alert('請填寫密碼');
        }

        return isPass;

    }

</script>
<?php include __DIR__. '/_db_foot.php';
