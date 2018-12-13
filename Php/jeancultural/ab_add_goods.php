<?php
require __DIR__. '/__connect_db.php';
$pname = 'goods'; // 自訂的頁面名稱
if(!empty($_POST['good_name']) ){

    
    try {

        $sql = "INSERT INTO `goods`(
   `good_name`, `narrative`, `color`, 
  `size`, `price`, `mainpic_dir`, `secondpic_dir`, 
  `stock`, `items`, `brand`, `category`, `hot`
 ) VALUES (?, ?, ?, ?, ?,?, ?,?, NOW(),?, ?,)";

    if(mysql_query($_insert)){
        move_uploaded_file( $_FILES['image'],['tmp_name'],"picture/$img");
    }
        $stmt->execute([
            $_POST['good_name'],
            $_POST['narrative'],
            $_POST['color'],
            $_POST['size'],
            $_POST['price'],
            $_POST['mainpic_dir'],
            $_FILES['image1']['name'],
            $_POST['secondpic_dir'],
            $_FILES['image2']['name'],
            $_POST['stock'],
            $_POST['items'],
            $_POST['brand'],
            $_POST['category`'],
            $_POST['hot'],
            
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
                <h5 class="card-title">新增商品資料 <?= isset($result)? $result : '' ?></h5>
                <form method="post" >
                    <div class="form-group">
                        <label for="name">商品名稱</label>
                        <input type="text" class="form-control"
                               id="name" name="name"
                               placeholder="Enter name">
                    </div>
                    <div class="form-group">
                        <label for="narrative">簡述</label>
                        <input type="text" class="form-control"
                               id="narrative" name="narrative" placeholder="Enter narrative">
                    </div>

                    <div class="form-group">
                        <label for="color">顏色</label>
                        <input type="text" class="form-control"
                               id="mcolor" name="color" placeholder="Enter color">
                    </div>
                    <div class="form-group">
                        <label for="size">尺寸</label>
                        <input type="text" class="form-control"
                               id="size" name="size" placeholder="Enter size">
                    </div>
                    <div class="form-group">
                        <label for="price">價格</label>
                        <input type="text" class="form-control"
                               id="price" name="price" placeholder="Enter price">
                    </div>

                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroupFileAddon01">主要圖片</span>
                        </div>
                        <div class="custom-file">
                            <input name="image1" type="file" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01">
                            <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                        </div>
                        </div>
                        <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroupFileAddon01">次要圖片</span>
                        </div>
                        <div class="custom-file">
                            <input name="image2"  type="file" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01">
                            <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                        </div>
                        </div>

                    <div class="input-group mb-3 mt-3">
                        <div class="input-group-prepend">
                            <label class="input-group-text" for="inputGroupSelect01">庫存</label>
                        </div>
                        <select class="custom-select" id="inputGroupSelect01">
                            <option selected>Choose...</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                        </div>
                        <div class="input-group mb-3 mt-3">
                        <div class="input-group-prepend">
                            <label class="input-group-text" for="inputGroupSelect01">品項</label>
                        </div>
                        <select class="custom-select" id="inputGroupSelect01">
                            <option selected>Choose...</option>
                            <option value="1">音樂盒</option>
                            <option value="2">紙膠帶</option>
                            <option value="3">Three</option>
                            <option value="3">Three</option>
                            <option value="3">Three</option>
                            <option value="3">Three</option>
                        </select>
                        </div>
                    <div class="input-group mb-3 mt-3">
                        <div class="input-group-prepend">
                            <label class="input-group-text" for="inputGroupSelect01">品牌</label>
                        </div>
                        <select class="custom-select" id="inputGroupSelect01">
                            <option selected>Choose...</option>
                            <option value="知音文創">知音文創</option>
                            <option value="來趣">來趣</option>
                            <option value="WonderFul">WonderFul</option>
                            <option value="3">Three</option>
                            <option value="3">Three</option>
                            <option value="3">Three</option>
                        </select>
                        </div>

                        <div class="input-group mb-3 mt-3">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputGroupSelect01">類別</label>
                    </div>
                    <select class="custom-select" id="inputGroupSelect01">
                        <option selected>Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="3">Three</option>
                        <option value="3">Three</option>
                        <option value="3">Three</option>
                        <option value="3">Three</option>
                        
                    </select>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>

            </div>
        </div>
    </div>
</div>
    <!-- <script>
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

    </script> -->
<?php include __DIR__. '/_db_foot.php';
