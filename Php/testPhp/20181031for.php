<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>




<table border="1">
    <?php for($k=1; $k<=10; $k++):  ?>
    <tr>
        <?php for($i=1; $i<=10; $i++):
            //echo '<td>'. $i*$k. '</td>';
            printf('<td>%s * %s = %s</td>', $i, $k, $i*$k);
        endfor; ?>
    </tr>
    <?php endfor; ?>
</table>



<?php 
echo "<table cellpadding='0' cellspacing='0' border='1' bordercolor='black'>";
$i=1;
while($i<=9)
{
$j=1;
echo "<tr border='0'>";
while($j<=9)
{
echo "<td border='0'> ".$j."x".$i."=".$j*$i." </td>";
$j++;
}
echo "</tr>";
$i++;
}
echo "<table>";
?>

</html>