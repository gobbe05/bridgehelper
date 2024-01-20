<?php 
include 'db.php';
include 'rootpath.php';
session_start();
if(!isset($_SESSION['loggedin'])) {
    header('Location: '. $root .'/login');
    $mysqli -> close();
    exit();
}

if(!isset($_GET['id'])){
    header('Location: '. $root .'/admin');
    $mysqli -> close();
    exit();
}
$id = $_GET['id'];

$sql = "DELETE FROM Themes WHERE Id=?";
$stmt = $mysqli -> prepare($sql);
$stmt -> bind_param("i", $id);

if(!$stmt -> execute()){
    header('Location: '. $root .'/admin/?error=There was an error deleting the theme!');
    $stmt -> close();
    $mysqli -> close();
    exit();
}
header('Location: '. $root .'/admin/?message=The theme was successfully deleted!');
$stmt -> close();
$mysqli -> close();
exit();
?>