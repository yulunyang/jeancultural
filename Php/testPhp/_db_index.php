<?php
require __DIR__. '/__connect_db.php';
$stmt = $pdo->query("SELECT * FROM address_book");
?>

!<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="main.css" />
   
    <link rel="stylesheet" href="boostrap/css/bootstrap.css" />    
    <script src="main.js"></script>
</head>
<body>
<nav class="navbar navbar-expand-lg navbar-light bg-light container">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>

  </div>
</nav>
<div class="container">
<table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">name</th>
      <th scope="col">email</th>
      <th scope="col">mobile</th>
      <th scope="col">birthday</th>
      <th scope="col">creat_at</th>
    </tr>
  </thead>
  <tbody>
  <?php while($r = $stmt->fetch(PDO::FETCH_ASSOC)): ?>
    <tr>
      <th scope="row"><?= $r['sid'] ?></th>
      <td><?= $r['name'] ?></td>
      <td><?= $r['email'] ?></td>
      <td><?= $r['mobile'] ?></td>
      <td><?= $r['birthday'] ?></td>
      <td><?= $r['creat_at'] ?></td>
    </tr>
    <?php endwhile; ?>
  </tbody>
</table>
</div>
<style>
li.active{
    background-color:lightblue;
}

</style>

 <script
  src="https://code.jquery.com/jquery-3.3.1.min.js"
  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
  crossorigin="anonymous"></script>
  <script src="boostrap/js/"></script>
</body>
</html>