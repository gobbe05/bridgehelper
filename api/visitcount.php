<?php 
include "db.php";

$sql = "SELECT COUNT(*) FROM Visits";
$result = $mysqli->query($sql);

$data = mysqli_fetch_assoc($result);

echo json_encode($data["COUNT(*)"]);
$mysqli -> close();
exit();
?>