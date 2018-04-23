<?php
$result = ($_POST['username'] === 'admin' && $_POST['password'] === 'bwsupport');

if ($result) {
    $_SESSION['login'] = true;
}

header('Content-type: application/json');
?>{
    "login": true
}