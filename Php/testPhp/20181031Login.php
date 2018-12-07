<!DOCTYPE html>
<html>
<head>
<title>example</title>
<meta http-equiv="content-type" content="text/html; charset=utf-8">
</head>
<style type="text/css">.titleCol { float:left; width:100px; }</style>
<body>
    <?php
        if( isset($_POST['email']) ) {
        echo '<pre>' . print_r($_POST, true) . '</pre>';
        print_r($_POST);
        } else :
        ?>
        <form name="form1" method="post" action="">
        <div class="titleCol">Email:</div>
        <input type="text" id="email" name="email" />
        <br />
        <div class="titleCol">Password:</div>
        <input type="password" id="password" name="password" />
        <br />
        <div class="titleCol">&nbsp;</div>
        <input type="submit" value="登入" />
        </form>
    <?php
    endelse
    ?>



</body>