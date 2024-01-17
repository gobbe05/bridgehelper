<?php 
include "client/dist/static.html";
include "api/db.php";

$sql = "INSERT INTO Visits (Date) 
        VALUES (now())";
if ($mysqli->query($sql) != TRUE) {
  echo "Error: " . $sql . "<br>" . $mysqli->error;
} 
  
$mysqli->close();