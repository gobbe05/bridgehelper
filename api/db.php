<?php
$mysqli = new mysqli("sql11.freesqldatabase.com","sql11677398","jGVphLaFgW", "sql11677398");

// Check connection
if ($mysqli -> connect_errno) {
  echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
  exit();
}
?>