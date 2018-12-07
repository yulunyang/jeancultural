<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <pre>
    <?php

    $ar =  array(2,3,4,5,6);
    $ar2 =  array("name"=>"小名",
                "age"=>"30",
                "gender"=>"female");

                // print_r($ar2);
                // echo json_encode($ar2, JSON_UNESCAPED_UNICODE);

                foreach($ar2 as $v){
                    echo "$v<br>";
                }
                foreach($ar2 as $k=>$v){
                    echo "$k =&gt;$v <br>";
                }

                $ar3 = $ar2;
                $ar3["name"] = "ya";
                print_r($ar3);
    ?>
</pre>
    <?php
    $stack = array("orange", "banana");
    array_push($stack, "apple", "raspberry");
    print_r($stack);

    echo json_encode($stack);
    

    ?>
    <?php
        $br[] = 3;
        $br[] = 2;
        $br[] = 2;
        $br[] = 0;
        $br[] = 4;
        $br[] = 1;
        print_r($br);
    ?>
</body>
</html>