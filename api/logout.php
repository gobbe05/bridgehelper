<?php 
include 'rootpath.php';
session_start();
session_destroy();

header('Location: '. $root .'/');
exit();

?>