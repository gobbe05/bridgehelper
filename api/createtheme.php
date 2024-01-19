<?php 
include 'db.php';

session_start();
if(!isset($_SESSION['loggedin'])) {
  header('Location: /login');
  $mysqli -> close();
  exit();
}

if(!isset($_FILES["document"]["name"][0]) || isset($_POST['name']) || isset($_POST['theme'])){
  header('Location: /createtheme/?error=Please fill in the required fields!');
}
$name = $_POST['name'];
$theme = $_POST['theme'];

$target_dir = "uploads/";
$target_file = $target_dir . basename($_FILES["document"]["name"]);
$fileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

if($fileType != "docx" && $fileType != "doc" && $fileType != "odt" && $fileType != "pdf") {
  header('Location: /admin/?error=The file format is not supported!');
  $mysqli -> close();
  exit();
}
// Check if file already exists
if (!file_exists($target_file)) {
  if (!move_uploaded_file($_FILES["document"]["tmp_name"], $target_file)) {
    header('Location: /admin/?error=File upload failed!');
    $mysqli -> close();
    exit();
  }
}

$sql = "INSERT INTO Themes (Name, Theme, File) VALUES (?, ?, ?)";
$stmt = $mysqli -> prepare($sql);
$stmt -> bind_param('sss', $name, $theme, $target_file);

if(!$stmt -> execute()){
  header('Location: /admin/?error=There was an error creating the object!');
}
$stmt -> close();
$mysqli -> close();
header('Location: /admin/?message=The theme was successfully created!');
?>