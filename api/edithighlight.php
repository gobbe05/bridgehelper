<?php 
include 'db.php';
include 'rootpath.php';
session_start();
if(!isset($_SESSION['loggedin'])) {
    header('Location: '. $root .'/login');
    $mysqli -> close();
    exit();
}

foreach($_POST as $key => $val) {
    $bool;
    if($val == "on") {$bool = 1;}
    else {$bool = 0;}
    $sql = "UPDATE Themes SET Highlight='$bool' WHERE Id=?";
    $stmt = $mysqli -> prepare($sql);
    $stmt -> bind_param("i", $key);

    if(!$stmt -> execute()) {
        header('Location: '. $root .'/admin?error=There was an error updating value!');
        $mysqli -> close();
        $stmt -> close();
        exit();
    }
}
header('Location: '. $root .'/admin?message=Successfully updated highlights');
$mysqli -> close();
$stmt -> close();
exit();
?>