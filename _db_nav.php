<style>
    li.active{
        border-bottom:3px solid #3581bf;
    }
    li a {
        font-family:微軟正黑體;
    }
    
</style>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
        <a class="navbar-brand font-weight-bold" href="/jeancultural/_db_index.php">後台管理</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <?php  if(isset($_SESSION['user'])): ?> 
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto ">
                <li class="nav-item <?= $pname=='index' ? 'active' : '' ?>">
                    <a class="nav-link" href="_db_index.php">Home</a>
                </li>
                <li class="nav-item <?= $pname=='members' ? 'active' : '' ?>">
                    <a class="nav-link" href="ab_member.php">會員管理</a>
                </li>
                <li class="nav-item <?= $pname=='order' ? 'active' : '' ?>">
                    <a class="nav-link" href="ab_order.php">訂單管理</a>
                </li>
                <li class="nav-item <?= $pname=='goods' ? 'active' : '' ?>">
                    <a class="nav-link" href="ab_goods.php">商品管理</a>
                </li>
                <li class="nav-item <?= $pname=='markting' ? 'active' : '' ?>">
                    <a class="nav-link" href="ab_activity.php">行銷活動管理</a>
                </li>
                <li class="nav-item <?= $pname=='news' ? 'active' : '' ?>">
                    <a class="nav-link" href="ab_news.php">最新消息管理</a>
                </li>
                <li class="nav-item <?= $pname=='account' ? 'active' : '' ?>">
                    <a class="nav-link" href="ab_accounts.php">後台帳號管理</a>
                </li>

            
                 
            </ul>
            <ul class="navbar-nav justify-content-end">
                    <li class="nav-item  justify-content-end <?= $pname=='add' ? 'active' : '' ?>">
                        <a class="nav-link justify-content-end" href="logout.php">登出</a>
                    </li>
                
                </ul><?php endif; ?>
        </div>
    </div>
</nav> 