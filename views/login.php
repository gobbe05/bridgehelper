<?php 
    include dirname(__DIR__) . '/api/rootpath.php';
    session_start();
    if(isset($_SESSION['loggedin'])) {
        header('Location: ' . $root . '/admin');
        exit();
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
</head>
<body class="d-flex justify-content-center align-items-center vw-100 vh-100">
    <form action="<?php echo $root;?>/login" method="post" class="d-flex flex-column gap-2 w-50">
        <h4>Admin</h4>
        <div class="form-floating">
            <input class="form-control" type="text" name="username" id="username">
            <label for="username">Username</label>
        </div>
        <div class="form-floating">
            <input class="form-control" type="password" name="password" id="password">
            <label for="password">Password</label>
        </div>
        <button class="btn btn-primary">Login</button>
    </form>
</body>
</html>