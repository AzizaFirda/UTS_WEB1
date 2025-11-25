<?php
require_once '../koneksi/connection.php';

try {
    $sql="SELECT * FROM `users`";
    $connect = $database_connection->prepare($sql);
    $connect->execute();

    $data = array();
    while($row = $connect->fetch(PDO::FETCH_ASSOC)){
        array_push($data, $row);
    }

    echo json_encode($data);

} catch (PDOException $e) {
    die("Tidak dapat memuat basis data $database_name :" . $e->getMessage());
}

?>