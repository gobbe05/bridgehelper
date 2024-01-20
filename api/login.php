<?php
    include dirname(__DIR__) . '/api/rootpath.php';
    session_start();
    if(isset($_SESSION['loggedin'])) {
        header('Location: '. $root . '/admin');
        exit();
    }
    if(isset($_POST['username']) && isset($_POST['password'])) {
        if($_POST['username'] == "admin" && $_POST['password'] == "admin") {
            $_SESSION['loggedin'] = true;
            header('Location: ' . $root . '/admin');
            exit();
        }
        header('Location: ' . $root . '/login');
        exit();
    }
?>