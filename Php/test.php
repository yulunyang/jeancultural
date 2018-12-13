<?php
$text = $_POST['content'];
echo "##".$text."##<br>";
?>
<!doctype html>
<html>
 <head>
  <meta charset="UTF-8">
  <script src="ckeditor/ckeditor.js"></script>
  <title>CKEditor</title>
  <script>
   function processData(){
   // getting data
   var data = CKEDITOR.instances.content.getData()
  
   form.submit();
  }
 </script>
 </head>
 <body>
  <form name = 'form' action = '#' method='post'>
            <textarea name="content" id="content" rows="10" cols="80"></textarea>
            <script>
          CKEDITOR.replace( 'content', {
     //輸入客製化條件
     width: 1000,  //設定內容編輯器寬度
    });
    
            </script>
   <input type = 'button' value = '送出' onclick = 'processData()'>
        </form>
 </body>
</html>