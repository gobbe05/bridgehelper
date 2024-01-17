<?php
require_once __DIR__.'/router.php';

get('/', 'client.php');
get('/login', 'views/login.php');
get('/logout', 'api/logout.php');
get('/admin', 'views/admin.php');
get('/createtheme', 'views/createtheme.php');
get('/visitcount', 'api/visitcount.php');

post("/login", 'api/login.php');
post('/createtheme', 'api/createtheme.php');

any('/404','views/404.php');

?>