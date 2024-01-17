<?php 

include 'db.php';

$name = $_POST['name'];
$theme = $_POST['name'];
$file = "";

$sql = "INSERT INTO Themes (Name, Theme, File) VALUES ('$name', '$theme', '$file')";

$mysqli -> query($sql);

?>