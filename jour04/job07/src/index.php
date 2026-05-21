<?php
phpinfo();

$DB_NAME = getenv("MYSQL_DATABASE") ? getenv("MYSQL_DATABASE") : "db";
$DB_USER = getenv("MYSQL_USER") ? getenv("MYSQL_USER") : "dev";
$DB_PASS = getenv("MYSQL_PASSWORD") ? getenv("MYSQL_PASSWORD") : "pass";
$DB_HOST = getenv("DB_HOST") ? getenv("DB_HOST") : "db";

try {
    $db_pdo = new PDO("mysql:host=db;dbname=lamp_demo", "dev", "pass");
    if ($db_pdo) {
        echo ("Connecté à la base.");
    }
} catch (PDOException $err) {
    echo ($err);
}

// try {
//     $db = new SQLite3("db.db");
//     if ($db) {
//         echo ("Connecté à la base.");
//         print_r($db);
//     }
// } catch (Error $err) {
//     echo ($err);
// }

// try {
//     $db = mysqli_connect("db", "dev", "pass", "lamp_demo");
//     if (!$db) {
//         echo ("Could not find database");
//     } else {
//         echo ("Connexion to database successful");
//     }
// } catch (Error $err) {
//     print_r($err);
// }
