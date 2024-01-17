<?php 

    session_start();
    if(!isset($_SESSION['loggedin'])) {
        header('Location: /login');
        exit();
    }

    include(dirname(__DIR__).'/api/db.php');

    $sql = "SELECT * FROM Themes";
    $result = $mysqli -> query($sql);
    $themes = mysqli_fetch_all($result, MYSQLI_ASSOC); # all rows to array
    $mysqli -> close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin</title>
</head>
<body>
    <div>
        <?php 

        foreach($themes as $theme) {
            echo $theme['Name'];
        }
        
        ?>
    </div>
</body>
</html>