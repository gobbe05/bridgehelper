<?php 
include 'db.php';
session_start();
if(!isset($_SESSION['loggedin'])) {
    header('Location: /login');
    $mysqli -> close();
    exit();
}

foreach($_POST as $key => $val) {
    $bool;
    if($val == "on") {$bool = true;}
    else {$bool = false;}
    $sql = "UPDATE Themes  SET Highlight='$bool' WHERE Id=?";
    $stmt = $mysqli -> prepare($sql);
    $stmt -> bind_param("i", $key);

    if(!$stmt -> execute()) {
        header('Location: /admin?error=There was an error updating value!');
        $mysqli -> close();
        $stmt -> close();
        exit();
    }
}
header('Location: /admin?message=Successfully updated highlights');
$mysqli -> close();
$stmt -> close();
exit();
?>