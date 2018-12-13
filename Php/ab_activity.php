<?php
require __DIR__. '/__connect_db.php';
$pname = 'markting'; // 自訂的頁面名稱

$per_page = 20;
$page = isset($_GET['page']) ? intval($_GET['page']) : 1;

$t_sql = "SELECT COUNT(1) FROM marketing";
$total_rows = $pdo->query($t_sql)->fetch()[0];
$page_num = ceil($total_rows / $per_page) ;


$sql = sprintf("SELECT * FROM marketing ORDER BY sid ASC LIMIT %s, %s",
    ($page-1)*$per_page, $per_page);
$stmt = $pdo->query($sql);



// $sql = "SELECT `sid`, `name`, `mobile`, `email`, `members`, `birthday`, `creat_at` FROM `address_book` ORDER BY creat_at";
?>
<?php include __DIR__. '/_db_header.php'; ?>
<?php include __DIR__. '/_db_nav.php'; ?>
<div class="container" style="margin-top: 20px">
<button type="button" class="btn btn-dark mb-3"><a href="ab_add_activity.php">新增</a></button>
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
            <th scope="col">活動編號</th>
            <th scope="col">活動名稱</th>
            <th scope="col">促銷碼</th>
            <th scope="col">折扣</th>
            <th scope="col">開始時間</th>
            <th scope="col">結束時間</th>
            <th scope="col">edit</th>
        </tr>
        </thead>
        <tbody>
        <?php while($r = $stmt->fetch(PDO::FETCH_ASSOC)): ?>
        <tr>
            <td><a href="javascript:del_it(<?= $r['sid'] ?>)"><i class="fas fa-trash-alt"></i></a></td>
            <th scope="row"><?= $r['sid'] ?></th>
            <td><?= $r['activity_number'] ?></td>
            <td><?= $r['activity_name'] ?></td>
            <td><?= $r['discount_key'] ?></td>
            <td><?= $r['discount_off'] ?></td>
            <td><?= $r['start_time'] ?></td>
            <td><?= $r['end_time'] ?></td>

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
                location.href = 'ab_del_members.php?sid=' + sid;
            }
        }

    </script>

<?php include __DIR__. '/_db_foot.php';