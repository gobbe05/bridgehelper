<?php 
include 'db.php';
include 'rootpath.php';
session_start();
if(!isset($_SESSION['loggedin'])) {
    header('Location: '. $root .'/login');
    $mysqli -> close();
    exit();
}

if(!isset($_GET['id']) || !isset($_POST['theme']) || !isset($_POST['name'])){
    header('Location: '. $root .'/admin/?error=Please fill in the required fields');
    $mysqli -> close();
    exit();
}
$theme = $_POST['theme'];
$name = $_POST['name'];
$id = $_GET['id'];
$sql = "UPDATE Themes SET Name=?, Theme=? WHERE Id=?";
$stmt = $mysqli -> prepare($sql);
$stmt -> bind_param("ssi", $name, $theme, $id);

if(!$stmt -> execute()){
    header('Location: '. $root .'/admin/?message=There was an error updating the Theme!');
    $mysqli -> close();
    $stmt -> close();
    exit();
}
header('Location: '. $root .'/admin/?message=Successfully updated the theme!');
$mysqli -> close();
$stmt -> close();
exit();
?>