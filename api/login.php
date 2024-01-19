<?php
    session_start();
    if(isset($_SESSION['loggedin'])) {
        header('Location: /admin');
        exit();
    }

    if(isset($_POST['username']) && isset($_POST['password'])) {
        if($_POST['username'] == "admin" && $_POST['password'] == "admin") {
            $_SESSION['loggedin'] = true;
            header('Location: /admin');
            exit();
        }
        header('Location: /login');
        exit();
    }
?>