<?php 
include 'db.php';

$sql = "SELECT * FROM Themes";
$result = $mysqli -> query($sql);
$themes = mysqli_fetch_all($result, MYSQLI_ASSOC); # all rows to array
echo json_encode($themes);
$mysqli -> close();
exit();

?>