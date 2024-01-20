<?php 
include dirname(__DIR__) . '/api/rootpath.php';
session_start();
if(!isset($_SESSION['loggedin'])) {
    header('Location: '. $root .'/login');
    exit();
}

include(dirname(__DIR__).'/api/db.php');

if(!isset($_GET['id'])){
    header('Location: /admin');
}
$id = $_GET['id'];

$sql = "SELECT * FROM Themes WHERE Id='$id'";
$result = $mysqli -> query($sql);
$themes = mysqli_fetch_all($result, MYSQLI_ASSOC); # all rows to array
$theme = $themes[0];
$mysqli -> close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Update</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>
<body class="d-flex justify-content-center align-items-center vw-100 vh-100">
    <form class="d-flex flex-column gap-2" action="<?php echo $root; ?>/updatetheme/?id=<?php echo $theme['Id']; ?>" method="post" onkeydown="return event.key != 'Enter';">
        
        <div class="d-flex mb-5 justify-content-between">
            <h3>Edit - <?php echo $theme['Name']; ?></h3>
            <a href="<?php echo $root; ?>/admin" class="btn btn-dark d-flex align-items-center gap-1 ms-4"><span class="material-icons">arrow_back</span> Back</a>
        </div>
        <?php 
            if(isset($_GET['error'])){
                echo "
                <div class='alert alert-danger'>
                    ". $_GET['error'] ."
            </div>";
        }
        ?>
        <div class="form-floating">
            <input class="form-control" type="text" name="name" id="name" value="<?php echo $theme['Name']; ?>">
            <label for="name">Name</label>
        </div>
        <div class="form-floating">
            <input class="form-control" type="text" name="theme" id="theme" value="<?php echo $theme['Theme']; ?>">
            <label for="theme">Theme</label>
        </div>
        <span class="mt-4"><h6>File path</h6> <p><?php echo $theme['File']; ?></p></span>
        <!-- Modal -->
        <div id="modal" class="modal" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title">Save changes?</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <p>Are you sure that you want to save changes to theme?</p>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                    <button class="btn btn-success" type="submit">Submit</button>
                  </div>
                </div>
            </div>
        </div>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal">Save</button>
    </form>
</body>
<script>
    const nameInput = document.querySelector("#name");
    const themeInput = document.querySelector("#theme");

</script>
</html>