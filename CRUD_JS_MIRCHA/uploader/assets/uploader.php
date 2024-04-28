<?php 

if(isset($_FILES["form_file"])){
    $name = $_FILES["form_file"]["name"];
    $file = $_FILES["form_file"]["tmp_name"];
    $error = $_FILES["form_file"]["error"];
    $destination = "files/$name";
    $uploade = move_uploaded_file($file,$destination);
    if($uploade){
        $res = array(
            "Err"=>false,
            "status"=>http_response_code(200),
            "statusText"=> "Archivo $name subido con exito",
            "files"=>$_FILES["form_file"]
        );
    }else{
        $res = array(
            "Err"=>true,
            "status"=>http_response_code(400),
            "statusText"=> "Error al Subir el archivo $name",
            "files"=>$_FILES["form_file"]
        );
    }
echo json_encode($res);
};
?>