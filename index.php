<?php
require_once __DIR__.'/router.php';

get('/', 'client.php');
get('/login', 'views/login.php');
get('/logout', 'api/logout.php');
get('/admin', 'views/admin.php');
get('/admin/$message', 'views/admin.php');
get('/admin/$error', 'views/admin.php');
get('/edittheme/$id', 'views/update.php');
get('/edittheme/$id/$error', 'views/update.php');
get('/edithighlight', 'views/edithighlight.php');
get('/createtheme', 'views/createtheme.php');
get('/createtheme/$error', 'views/createtheme.php');
get('/deletetheme/$id', 'api/deletetheme.php');
get('/visitcount', 'api/visitcount.php');
get('/getthemes', 'api/getthemes.php');
get('/getcentralthemes', 'api/getcentralthemes.php');

post("/login", 'api/login.php');
post('/createtheme', 'api/createtheme.php');
post('/updatetheme/$id', 'api/updatetheme.php');
post('/edithighlight', 'api/edithighlight.php');

any('/404','client.php');

?>