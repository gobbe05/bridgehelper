<?php
require_once __DIR__.'/router.php';

get('/', 'client.php');
get('/createtheme', 'views/createtheme.html');
get('/visitcount', '/api/visitcount.php');

post('/createtheme', '/api/createtheme.php');

any('/404','views/404.php');

?>