<?php
require __DIR__. '/__connect_db.php';
$pname = 'list'; // 自訂的頁面名稱

$per_page = 5;
$page = isset($_GET['page']) ? intval($_GET['page']) : 1;

$t_sql = "SELECT COUNT(1) FROM address_book";
$total_rows = $pdo->query($t_sql)->fetch()[0];
$page_num = ceil($total_rows / $per_page) ;

// 限定頁碼範圍
// if($page<1){
//     header('Location: ab_list.php');
//     exit;
// }
// if($page>$total_pages) {
//     header('Location: ab_list.php?page='. $total_pages);
//     exit;
// }

$sql = sprintf("SELECT * FROM address_book ORDER BY sid DESC LIMIT %s, %s",
    ($page-1)*$per_page, $per_page);
$stmt = $pdo->query($sql);
// $sql = "SELECT `sid`, `name`, `mobile`, `email`, `address`, `birthday`, `creat_at` FROM `address_book` ORDER BY creat_at";
?>
<?php include __DIR__. '/_db_index_header.php'; ?>
<?php include __DIR__. '/_db_index_nav.php'; ?>
<div class="container" style="margin-top: 20px">
<div></div>
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
            <th scope="col">name</th>
            <th scope="col">email</th>
            <th scope="col">mobile</th>
            <th scope="col">address</th>
            <th scope="col">birthday</th>
            <th scope="col">edit</th>
        </tr>
        </thead>
        <tbody>
        <?php while($r = $stmt->fetch(PDO::FETCH_ASSOC)): ?>
        <tr>
            <td><a href="javascript:del_it(<?= $r['sid'] ?>)"><i class="fas fa-trash-alt"></i></a></td>
            <th scope="row"><?= $r['sid'] ?></th>
            <td><?= $r['name'] ?></td>
            <td><?= $r['email'] ?></td>
            <td><?= $r['mobile'] ?></td>
            <td><?= $r['address'] ?></td>
            <td><?= $r['birthday'] ?></td>
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
                location.href = 'ab_del.php?sid=' + sid;
            }
        }

    </script>
<?php include __DIR__. '/_db_index_foot.php';
