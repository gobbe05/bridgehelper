<?php 
    include dirname(__DIR__) . '/api/rootpath.php';
    session_start();
    if(!isset($_SESSION['loggedin'])) {
        header('Location: '. $root .'/login');
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
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>
<body>
    <?php 
    if(isset($_GET['error'])){
        echo "
        <div class='alert alert-success fixed-bottom m-5'>
            ". $_GET['error'] ."
        </div>";
    }
    if(isset($_GET['message'])){
        echo "
        <div class='alert alert-success fixed-bottom m-5'>
            ". $_GET['message'] ."
        </div>";
    }
    
    ?>
    <?php include('header.php'); ?>
    <div class="p-5 m-5">
        
        <form action="<?php echo $root; ?>/edithighlight" method="post">
            <div class="d-flex my-2">
                <h3>Themes</h3>
                <a href="<?php echo $root; ?>/admin" class="btn btn-dark ms-auto d-flex align-items-center gap-1"><span class="material-icons">arrow_back</span> Back</a>
                <!-- Button trigger modal -->
                <button type="button" class="btn btn-success ms-1 d-flex align-items-center gap-1" data-bs-toggle="modal" data-bs-target="#modal">Submit <span class="material-icons">done</span></button>
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
                            <button class="btn btn-success ms-1 d-flex align-items-center gap-1" type="submit">Submit <span class="material-icons">done</span></button>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
            <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Theme</th>
                    <th scope="col">File Path</th>
                    <th scope="col"></th>

                  </tr>
                </thead>
                <tbody>
                <?php 

                    foreach($themes as $theme) {
                    
                        echo "<tr>";
                            echo "<th scope='row'>". $theme['Id']. "</th>";
                            echo "<td>". $theme['Name']. "</td>";
                            echo "<td>". $theme['Theme']. "</td>";
                            echo "<td>". $theme['File']. "</td>";
                            if($theme['Highlight']) {
                            echo "  <td>
                                        <input value='off' name='". $theme['Id'] ."' hidden />
                                        <input type='checkbox' name='". $theme['Id'] ."' checked/>
                                    </td>";
                            } else {
                                echo "<td><input type='checkbox' name='". $theme['Id'] ."'/></td>";
                            }
                        echo "</tr>";;
                    }

?>  
                </tbody>
            </table>
        </form>
    </div>
    <script>
        const alert = document.querySelector(".alert");
        setTimeout(() => {
            alert.remove()
        }, 3000)
    </script>
</body>
</html>