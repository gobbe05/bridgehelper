<?php 
include 'db.php';
include 'rootpath.php';

session_start();
if(!isset($_SESSION['loggedin'])) {
  header('Location: '. $root . '/login');
  $mysqli -> close();
  exit();
}

if(!isset($_FILES["document"]["name"][0]) || !isset($_POST['name']) || !isset($_POST['theme'])){
  header('Location: '. $root . '/createtheme/?error=Please fill in the required fields!');
}
$name = $_POST['name'];
$theme = $_POST['theme'];

$target_dir = "uploads/";
$target_file = $target_dir . basename($_FILES["document"]["name"]);
$fileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

if($fileType != "docx" && $fileType != "doc" && $fileType != "odt" && $fileType != "pdf") {
  header('Location: '. $root . '/admin/?error=The file format is not supported!');
  $mysqli -> close();
  exit();
}
// Check if file already exists
if (!file_exists($target_file)) {
  if (!move_uploaded_file($_FILES["document"]["tmp_name"], $target_file)) {
    header('Location: '. $root . '/admin/?error=File upload failed!');
    $mysqli -> close();
    exit();
  }
}

$sql = "INSERT INTO Themes (Name, Theme, File) VALUES (?, ?, ?)";
$stmt = $mysqli -> prepare($sql);
$stmt -> bind_param('sss', $name, $theme, $target_file);

if(!$stmt -> execute()){
  header('Location: '. $root . '/admin/?error=There was an error creating the object!');
}
$stmt -> close();
$mysqli -> close();
header('Location: '. $root . '/admin/?message=The theme was successfully created!');
?>