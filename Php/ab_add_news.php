<?php
require __DIR__. '/__connect_db.php';
$pname = 'news'; // 自訂的頁面名稱
if(!empty($_POST['title']) and !empty($_POST['simple_narrative'])){

    
    try {

        // $sql = "INSERT INTO `news`(`title`, `simple_narrative`, `detailed_description`, `uptime`, `downtime`, `up`, `post_time`) VALUES (?, ?,?, ?, ?, ?, NOW())";
        $sql = "INSERT INTO `news`(`title`, `simple_narrative`, `detailed_description`, `main_title`, `second_title`, 
                            `article_title-1`, `second_title-1`, `content-1`, 
                            `main_title-2`, `second_title-2`, `content-2`, 
                            `shop_active`, `shop_content`, `news_pic`, 
                            -- `Slider1-1`, `Slider1-2`, `Slider1-3`, `Slider2-1`, `Slider2-2`, `Slider2-3`,
                             `post_time`,  `uptime`, `downtime`,`value`) 
                             VALUES (?,?,?,?,?,
                             ?,?,?,
                             ?,?,?,
                             ?,?,?,
                             NOW(),?,?,?)";
        $stmt = $pdo->prepare($sql);
        
        $stmt->execute([
            $_POST['title'],
            $_POST['simple_narrative'],
            $_POST['detailed_description'],
            $_POST['main_title'],
            $_POST['second_title'],
            $_POST['article_title-1'],
            $_POST['second_title-1'],
            $_POST['content-1'],
            $_POST['main_title-2'],
            $_POST['second_title-2'],
            $_POST['content-2'],
            $_POST['shop_active'],
            $_POST['shop_content'],
            $_POST['detailed_description'],
            $_POST['post_time'],
            $_POST['uptime'],
            $_POST['downtime'],
            $_POST['value'],
                    
            
        ]);
        // 新增圖片
        // for ($i=0; $i<count($_FILES["ap_picurl"]["name"]); $i++) {
        //     if ($_FILES["ap_picurl"]["tmp_name"][$i] != "") {
        //         $query_insert = "INSERT INTO albumphoto (album_id, ap_date, ap_picurl, ap_subject) VALUES (?, NOW(), ?, ?)";
        //         $stmt = $db_link->prepare($query_insert);
        //         $stmt->bind_param("iss", 
        //          GetSQLValueString($album_pid, "int"),
        //          GetSQLValueString($_FILES["ap_picurl"]["name"][$i], "string"),
        //          GetSQLValueString($_POST["ap_subject"][$i], "string"));
        //         $stmt->execute();
        //         if(!move_uploaded_file($_FILES["ap_picurl"]["tmp_name"][$i] , "photos/" . $_FILES["ap_picurl"]["name"][$i])) die("檔案上傳失敗！");
        //         $stmt->close();
        //     }
        //   }


        // echo "1";
        $result = $stmt->rowCount();
        if($result==1){
            $info = [
                'type' => 'success',
                'text' => '資料新增完成'
            ];
            header('Location: ab_news.php');

            
        } elseif($result==0) {
            $info = [
                'type' => 'danger',
                'text' => '資料沒有新增'
            ];
        }



    } catch(PDOException $ex){

        // 如果 email 欄設定為唯一鍵, 不可重複輸入相同的 email
        // SQLSTATE[23000]: Integrity constraint violation: 1062 Duplicate entry 'aaa@bbb.com' for key 'email'

        echo $ex->getMessage();
        $info = [
            'type' => 'danger',
            'text' => '新增失敗'
        ];
    }
}
    
    ?>
<?php include __DIR__. '/_db_header.php'; ?>
<?php include __DIR__. '/_db_nav.php'; ?>


<div class="container mb-5" style="margin-top: 20px">
    <?php if(isset($info)): ?>
    <div class="col-md-6">
        <div class="alert alert-<?= $info['type'] ?>" role="alert">
            <?= $info['text'] ?>
        </div>
    </div>
    <?php endif; ?>
    
        <div class="card ">
            <div class="card-body">
                <h5 class="card-title">新增最新消息 <?= isset($result)? $result : '' ?></h5>
                <form method="post" >
                    <div class="form-group">
                        <label for="title">標題</label>
                        <input type="text" class="form-control"
                               id="title" name="title"
                               placeholder="Enter title">
                    </div>
                    <div class="form-group">
                        <label for="simple_narrative">卡片簡單敘述</label>
                        <input type="text" class="form-control"
                               id="simple_narrative" name="simple_narrative" placeholder="Enter narrative">
                    </div>
                    <div class="form-group">
                        <label for="detailed_description">卡片詳細敘述</label>
                        <input type="text" class="form-control"
                               id="detailed_description" name="detailed_description" placeholder="Enter narrative">
                    </div>
                    <div class="form-group">
                        <label for="main_title">主標題</label>
                        <input type="text" class="form-control"
                               id="main_title" name="main_title" placeholder="Enter narrative">
                    </div>
                    <div class="form-group">
                        <label for="second_title">副標題</label>
                        <input type="text" class="form-control"
                               id="second_title" name="second_title" placeholder="Enter narrative">
                    </div>
                    <div class="form-group">
                        <label for="article_title-1">文章標題-1</label>
                        <input type="text" class="form-control"
                               id="article_title-1" name="article_title-1" placeholder="Enter narrative">
                    </div>
                    <div class="form-group">
                        <label for="second_title-1">副標題-1</label>
                        <input type="text" class="form-control"
                               id="second_title-1" name="second_title-1" placeholder="Enter narrative">
                    </div>
                    <div class="form-group">
                        <label for="content-1">內文-1</label>
                        <input type="textarea" class="form-control"
                               id="content-1" name="content-1" placeholder="Enter narrative">
                    </div>
                    <div class="form-group">
                        <label for="main_title-2">文章標題-2</label>
                        <input type="text" class="form-control"
                               id="main_title-2" name="main_title-2" placeholder="Enter narrative">
                    </div>
                    <div class="form-group">
                        <label for="second_title-2">副標題-2</label>
                        <input type="text" class="form-control"
                               id="second_title-2" name="second_title-2" placeholder="Enter narrative">
                    </div>
                    <div class="form-group">
                        <label for="content-2">內文-2</label>
                        <input type="textarea" class="form-control"
                               id="content-2" name="content-2" placeholder="Enter narrative">
                    </div>
                    <div class="form-group">
                        <label for="shop_active">門市活動</label>
                        <input type="text" class="form-control"
                               id="shop_active" name="shop_active" placeholder="Enter narrative">
                    </div>
                    <div class="form-group">
                        <label for="shop_content">門市活動內容</label>
                        <input type="textarea" class="form-control"
                               id="shop_content" name="shop_content" placeholder="Enter narrative">
                    </div>
                    
                    <div class="form-row">
                    
                        <div class="col-3">
                        <label for="uptime">上架時間</label>
                        <input type="date" class="form-control" id="uptime" name="uptime" placeholder="">
                        </div>
                       
                        <div class="col-3">
                        <label for="downtime">下架時間</label>
                        <input type="date" class="form-control" id="downtime" name="downtime" placeholder="">
                        </div>               

                    </div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <label class="input-group-text" for="inputGroupSelect01">選擇分類</label>
                        </div>
                        <select class="custom-select" id="value" for="value" name="value">
                            <option selected>選擇分類</option>
                            <option value="exhibition">國際展覽</option>
                            <option value="brand">品牌活動</option>
                         
                        </select>
                        </div>
                    <!-- <div class="container">
                    <p>Banner<input type="file" name="news_pic" id="news_pic" /></p>
                  <p>Slider1-1<input type="file" name="Slider1-1" id="Slider1-1" />說明：<input type="text" name="ap_subject[]" id="ap_subject[]" /></p>
                  <p>Slider2-1<input type="file" name="Slider1-2" id="Slider1-2" />說明：<input type="text" name="ap_subject[]" id="ap_subject[]" /></p>
                  <p>Slider3-1<input type="file" name="Slider1-3" id="Slider1-3" />說明：<input type="text" name="ap_subject[]" id="ap_subject[]" /></p>
                  <p>Slider2-1<input type="file" name="Slider2-1" id="Slider2-1" />說明：<input type="text" name="ap_subject[]" id="ap_subject[]" /> <p>
                  <p>Slider2-2<input type="file" name="Slider2-2" id="Slider2-2" />說明：<input type="text" name="ap_subject[]" id="ap_subject[]" /> <p>
                  <p>Slider2-3<input type="file" name="Slider2-3" id="Slider2-3" />說明：<input type="text" name="ap_subject[]" id="ap_subject[]" /> <p>
                  </div> -->
                    <div class="form-group d-flex justify-content-end">    
                    <button type="submit" class="btn btn-primary " onclick = 'processData()'>Submit</button>
                    </div>
                </form>

            </div>
        </div>
    </div>
        <script
        src="https://code.jquery.com/jquery-3.3.1.min.js"
        integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
        crossorigin="anonymous">
        </script>



        <script>
            var title = $('#title'),
                simple_narrative = $('#simple_narrative'),
                i;

            function formCheck(){
            var isPass = true;
                if(!title.val()){
                    alert('請填寫標題');
                    isPass = false;
                }
                if(!simple_narrative.val()){
                    alert('請填寫敘述');
                    isPass = false;
                }
                return isPass;
            }

        </script>
<?php include __DIR__. '/_db_foot.php';
