<?php
require_once '../koneksi/connection.php';

$username = $_POST['user'];
$password = $_POST['pass'];
$email = $_POST['mail'];

// untuk update
if (!empty($_POST["id"])) {

    // tetap pakai created & updated dari request
    $created_at = $_POST['created'];
    $updated_at = date("Y-m-d H:i:s"); // otomatis update timestamp

    $sql = "UPDATE `users` 
        SET `username` = ?, 
            `email` = ?, 
            `password` = ?, 
            `created_at` = ?,
            `updated_at` = ?
        WHERE `id` = ?;";

    $connect = $database_connection->prepare($sql);
    $connect->execute([
        $username,
        $email,
        $password,
        $created_at,
        $updated_at,
        $_POST["id"]
    ]);

    echo "Update Data Berhasil";

} else {

    // INSERT — otomatis generate waktu
    $created_at = date("Y-m-d H:i:s");
    $updated_at = date("Y-m-d H:i:s");

    $sql = "INSERT INTO `users` 
        (`username`, `email`, `password`, `created_at`, `updated_at`)
        VALUES (?, ?, ?, ?, ?);";   // FIX → hanya 5 placeholder

    $connect = $database_connection->prepare($sql);
    $connect->execute([
        $username,
        $email,
        $password,
        $created_at,
        $updated_at
    ]);

    echo "Insert Data Berhasil";
}
?>
