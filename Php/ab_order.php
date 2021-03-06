<?php
require __DIR__. '/__connect_db.php';
$pname = 'order'; // 自訂的頁面名稱

$per_page = 20;
$page = isset($_GET['page']) ? intval($_GET['page']) : 1;

$t_sql = "SELECT COUNT(1) FROM order_list";
$total_rows = $pdo->query($t_sql)->fetch()[0];
$page_num = ceil($total_rows / $per_page) ;


$sql = sprintf("SELECT * FROM order_list ORDER BY sid ASC LIMIT %s, %s",
    ($page-1)*$per_page, $per_page);
$stmt = $pdo->query($sql);


// $sql = "SELECT `sid`, `name`, `mobile`, `email`, `members`, `birthday`, `creat_at` FROM `address_book` ORDER BY creat_at";
?>
<?php include __DIR__. '/_db_header.php'; ?>
<?php include __DIR__. '/_db_nav.php'; ?>
<div class="container" style="margin-top: 20px">

<div class="seachBar border border-info mb-3">
<div class="row mb-3 mr-3">
<div class="col-md-6"></div>
<div class="col-md-6"></div>
<div class="col-md-6 mr-3">
<div class="input-group mr-3 mt-3">
  <select class="custom-select mr-3 ml-3" id="inputGroupSelect04" aria-label="Example select with button addon">
    <option selected>訂單狀態</option>
    <option value="1" type="radio" name="done" id="done" value="未付款">未付款</option>
    <option value="1" type="radio" name="done" id="done" value="未出貨">未出貨</option>
    <option value="2" type="radio" name="done" id="done" value="已出貨">已出貨</option>
    <option value="3" type="radio" name="done" id="done" value="已完成">已完成</option>
  </select>
  <input type="text" placeholder="請輸入關鍵字" class="mr-3 ">
  <div class="input-group-append" >
    <button class="btn btn-outline-secondary" type="button">搜尋</button>
  </div>
</div></div>

</div>
</div>

<!-- <button type="button" class="btn btn-dark" href="./ab_add.php">新增</button> -->
<nav aria-label="Page navigation example">
  <ul class="pagination">
    
    <!-- <li class="page-item"><a class="page-link" href="#">Previous</a></li> -->
    <?php for($i=1; $i<=$page_num; $i++): ?>
    <li class="page-item <?=$i==$page ? 'active' :'' ?>" >
        <a class="page-link" href="?page=<?=$i?> "><?=$i?> </a>
    </li>
    
  
<?php endfor; ?>
<!-- <li class="page-item"><a class="page-link" href="#">Next</a></li> -->
  </ul>

</nav>
    <table class="table table-striped table-bordered">
        <thead>
        <tr>
        <th scope="col">del</th>
        
            <th scope="col">#</th>
            <th scope="col">訂單編號</th>
            <th scope="col">訂單成立時間</th>
            <th scope="col">處理狀態</th>
            <th scope="col">更新時間</th>
            <th scope="col">數量</th>
            <th scope="col">會員編號</th>
            <th scope="col">總金額</th>
            <th scope="col">編輯</th>
        </tr>
        </thead>
        <tbody>
        <?php while($r = $stmt->fetch(PDO::FETCH_ASSOC)): ?>
        <tr>
            <td><a href="javascript:del_it(<?= $r['sid'] ?>)"><i class="fas fa-trash-alt"></i></a></td>
            <th scope="row"><?= $r['sid'] ?></th>
            <td><?= $r['order_number'] ?></td>
            <td><?= $r['order_at'] ?></td>
            <td><?= $r['Processing_status'] ?></td>
            <td><?= $r['Processing_time'] ?></td>
            <td><?= $r['quantity'] ?></td>
            <td><?= $r['member_sid'] ?></td>
            <td><?= $r['total'] ?></td>

            <td><a href="ab_edit.php?sid=<?= $r['sid'] ?>"><i class="fas fa-edit"></a></i></td>
          
           
        </tr>
        <?php endwhile; ?>
        </tbody>
    </table>
    <nav aria-label="Page navigation example">
        <ul class="pagination">
            <li class="page-item <?= $page==1 ? 'disabled' : ''; ?>"><a class="page-link" href="?page=1">&lt;&lt;</a></li>
            <li class="page-item <?= $page==1 ? 'disabled' : ''; ?>"><a class="page-link" href="?page=<?= $page-1 ?>">&lt;</a></li>
            <li class="page-item"><a class="page-link"><?= $page. '/'. $page_num ?></a></li>
            <li class="page-item <?= $page==$page_num ? 'disabled' : ''; ?>"><a class="page-link" href="?page=<?= $page+1 ?>">&gt;</a></li>
            <li class="page-item <?= $page==$page_num ? 'disabled' : ''; ?>"><a class="page-link" href="?page=<?= $page_num ?>">&gt;&gt;</a></li>
        </ul>
    </nav>
</div>
<script>
        function del_it(sid){
            if(confirm('你確定要刪除編號為 '+sid+' 的資料嗎?')){
                location.href = 'ab_del_order.php?sid=' + sid;
            }
        }

    </script>

<?php include __DIR__. '/_db_foot.php';