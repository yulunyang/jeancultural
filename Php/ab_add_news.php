<?php
require __DIR__ . '/__connect_db.php';

$pname = 'add_news'; // 自訂的頁面名稱
if (!empty($_POST['title'])) {

    // 檔案存放的目錄
    $dir = "D:\\proj\\react-app\\src\\components\\news\\img\\";

    if (!is_dir($dir)) {
        die("沒有目錄");
    }

    if (!is_writeable($dir)) {
        die("目錄無法寫入");
    }

    
    if (($Slider1_1 = upload('Slider1_1', $dir)) === false) {
        die("檔案上傳失敗！ 1-1");
    }


    if (($Slider1_2 = upload('Slider1_2', $dir)) === false) {
        die("檔案上傳失敗！ 1-2");
    }

    if (($Slider1_3 = upload('Slider1_3', $dir)) === false) {
        die("檔案上傳失敗！ 1-3");
    }

    if (($Slider2_1 = upload('Slider2_1', $dir)) === false) {
        die("檔案上傳失敗！ 2-1");
    }

    if (($Slider2_2 = upload('Slider2_2', $dir)) === false) {
        die("檔案上傳失敗！ 2-2");
    }

    if (($Slider2_3 = upload('Slider2_3', $dir)) === false) {
        die("檔案上傳失敗！ 2-3");
    }

    if (($News_pic = upload('news_pic', $dir)) === false) {
        die("檔案上傳失敗！ 2-3");
    }

    try {
        $sql = "INSERT INTO `news`(
            `title`,
            `simple_narrative`, 
            `detailed_description`,
            `main_title`, 
            `second_title`,
            `article_title_1`, 
            `second_title_1`,
            `content-1`, 
            `main_title_2`, 
            `second_title_2`, 
            `content_2`,
            `shop_active`, 
            `shop_content`, 
            `news_pic`, 
            `Slider1_1`,
            `Slider1_2`, 
            `Slider1_3`,
            `Slider2_1`, 
            `Slider2_2`, 
            `Slider2_3`, 
            `description1_1`, 
            `description1_2`, 
            `description1_3`,
            `description2_1`, 
            `description2_2`, 
            `description2_3`,
            `value`) 
                             VALUES (?,?,?,?,
                                    ?,?,?,?,
                                    ?,?,?,?,
                                    ?,?,?,?,
                                    ?,?,?,?,
                                    ?,?,?,?,?,?,
                                   ?)";
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
            $News_pic,
            $Slider1_1,
            $Slider1_2,
            $Slider1_3,
            $Slider2_1,
            $Slider2_2,
            $Slider2_3,
            $_POST['description1_1'],
            $_POST['description1_2'],
            $_POST['description1_3'],
            $_POST['description2_1'],
            $_POST['description2_2'],
            $_POST['description2_3'],
            $_POST['value']
        ]);
        // 新增圖片
        // for ($i=0; $i<count($_FILES["ap_picurl"]["name"]); $i++) {
        //     if ($_FILES["ap_picurl"]["tmp_name"][$i] != "") {
        //         $query_insert = "INSERT INTO albumphoto (ap_date, ap_picurl, ap_subject) VALUES (?, NOW(), ?, ?)";
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
        if ($result == 1) {
            $info = [
                'type' => 'success',
                'text' => '資料新增完成'
            ];
            header('Location: ab_news.php');


        } elseif ($result == 0) {
            $info = [
                'type' => 'danger',
                'text' => '資料沒有新增'
            ];
        }


    } catch (PDOException $ex) {

        // 如果 email 欄設定為唯一鍵, 不可重複輸入相同的 email
        // SQLSTATE[23000]: Integrity constraint violation: 1062 Duplicate entry 'aaa@bbb.com' for key 'email'

print_r($e);

        echo $ex->getMessage();
        $info = [
            'type' => 'danger',
            'text' => '新增失敗'
        ];
    }
}

?>
<?php include __DIR__ . '/_db_header.php'; ?>
<?php include __DIR__ . '/_db_nav.php'; ?>


    <div class="container mb-5" style="margin-top: 20px">
        <?php if (isset($info)): ?>
            <div class="col-md-6">
                <div class="alert alert-<?= $info['type'] ?>" role="alert">
                    <?= $info['text'] ?>
                </div>
            </div>
        <?php endif; ?>

        <div class="card ">
            <div class="card-body">
                <h5 class="card-title">新增最新消息 <?= isset($result) ? $result : '' ?></h5>
                <form method="post" enctype="multipart/form-data">
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

                    <!-- <div class="form-row">
                    
                        <div class="col-3">
                        <label for="uptime">上架時間</label>
                        <input type="date" class="form-control" id="uptime" name="uptime" placeholder="">
                        </div>
                       
                        <div class="col-3">
                        <label for="downtime">下架時間</label>
                        <input type="date" class="form-control" id="downtime" name="downtime" placeholder="">
                        </div>               

                    </div> -->
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
                    <div class="container">
                        <p>Banner<input type="file" name="news_pic" id="news_pic"/></p>
                        <p>Slider1-1<input type="file" name="Slider1_1" id="Slider1-1"/>說明：<input type="text"
                                                                                                  name="description1_1"
                                                                                                  id="description1_1"/>
                        </p>
                        <p>Slider1-2<input type="file" name="Slider1_2" id="Slider1-2"/>說明：<input type="text"
                                                                                                  name="description1_2"
                                                                                                  id="description1_2"/>
                        </p>
                        <p>Slider1-3<input type="file" name="Slider1_3" id="Slider1-3"/>說明：<input type="text"
                                                                                                  name="description1_3"
                                                                                                  id="description1_3"/>
                        </p>
                        <p>Slider2-1<input type="file" name="Slider2_1" id="Slider2-1"/>說明：<input type="text"
                                                                                                  name="description2_1"
                                                                                                  id="description2_1"/>
                        <p>
                        <p>Slider2-2<input type="file" name="Slider2_2" id="Slider2-2"/>說明：<input type="text"
                                                                                                  name="description2_2"
                                                                                                  id="description2_2"/>
                        <p>
                        <p>Slider2-3<input type="file" name="Slider2_3" id="Slider2-3"/>說明：<input type="text"
                                                                                                  name="description2_3"
                                                                                                  id="description2_3"/>
                        <p>
                    </div>
                    <div class="form-group d-flex justify-content-end">
                        <button type="submit" class="btn btn-primary " onclick='processData()'>Submit</button>
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


    <!-- <script>
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

    </script> -->
<?php include __DIR__ . '/_db_foot.php';

/**
 * 上傳檔案
 *
 * @param $key The file's key in $_FILES
 * @param $dir 檔案放置的目錄位置
 *
 * @return bool|string
 */
function upload($key, $dir)
{
    if (isset($_FILES[$key]) && !empty($_FILES[$key]['name'])) {
        // 上傳至暫存路徑錯誤
        if ($_FILES[$key]['error'] !== 0) {
            return false;
        }

        if (!move_uploaded_file($_FILES[$key]["tmp_name"], $dir . $_FILES[$key]["name"])) {
            return false;
        }

        return $_FILES[$key]["name"];
    }

    return '';
}