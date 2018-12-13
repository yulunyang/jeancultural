<?php
require __DIR__. '/__connect_db.php';
$pname = 'index';
?>
<?php include __DIR__. '/_db_header.php'; ?>
<?php include __DIR__. '/_db_nav.php'; ?>


<style>
.num{
    font-size:4em;
    text-aline:center;
}

</style>
<div class="container mt-5">

<div class="card-group ">
  <div class="card border border-info mr-2">
  
    <div class="card-body">
      <h5 class="card-title text-center">訂單總數</h5>
      <p class="card-text num text-center">98</p>
      <p class="card-text text-center"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card border border-info mr-2">
    
    <div class="card-body">
      <h5 class="card-title text-center">未付款</h5>
      <p class="card-text num text-center">30</p>
      <p class="card-text text-center"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card border border-info mr-2">
 
    <div class="card-body">
      <h5 class="card-title text-center">已出貨</h5>
      <p class="card-text num text-center">33</p>
      <p class="card-text text-center"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card border border-info mr-2">
 
    <div class="card-body">
      <h5 class="card-title text-center">已完成</h5>
      <p class="card-text num text-center">42</p>
      <p class="card-text text-center"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card border border-info">
 
    <div class="card-body">
      <h5 class="card-title text-center">註冊會員</h5>
      <p class="card-text num text-center">55</p>
      <p class="card-text text-center"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
<div class="chart mt-4"></div>
<div class="g mt-4"></div>
</div>

<script>
var chart = c3.generate({
  bindto: '.chart',
    data: {
        x: 'x',
//        xFormat: '%Y%m%d', // 'xFormat' can be used as custom format of 'x'
        columns: [
            ['x', '2018-12-01', '2019-01-02', '2019-02-03', '2019-03-04', '2019-04-05', '2019-05-06'],
//            ['x', '20130101', '20130102', '20130103', '20130104', '20130105', '20130106'],
            ['月訂單數', 90, 280, 190, 490, 180, 850],
            ['未付款訂單數', 130, 340, 200, 500, 250, 350],
            ['處理中數', 30, 200, 100, 400, 150, 250]
        ]
    },
    
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%Y-%m'
            }
        }
    }
});

setTimeout(function () {
    chart.load({
        columns: [
            ['總訂單數', 400, 500, 450, 700, 600, 500]
        ]
    });
}, 1000);


</script>

<!-- Load d3.js and c3.js -->
<script src="/path/to/d3.v5.min.js" charset="utf-8"></script>
<script src="/path/to/c3.min.js"></script>
<?php include __DIR__. '/_db_foot.php';
