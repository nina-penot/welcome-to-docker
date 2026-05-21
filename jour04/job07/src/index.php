<?php
phpinfo();

$DB_NAME = getenv("DB_NAME") or "db";
$DB_USER = getenv("DB_USER") or "myuser";
$DB_PASS = getenv("DB_PASS") or "pass";
$DB_HOST = getenv("DB_HOST") or "db";

// try {
//     $db_pdo = new PDO("mysql:host=" . $DB_HOST . "dbname=" . $DB_NAME, $DB_USER, $DB_PASS);
//     if ($db_pdo) {
//         echo ("Connecté à la base.");
//     }
// } catch (PDOException $err) {
//     echo ($err);
// }
