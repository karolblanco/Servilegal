<?php
$nombre = $_POST['name'];
$apellido = $_POST['lastname'];
$email = $_POST['email'];
$telefono = $_POST['phone'];
$mensaje = $_POST['message'];
$para = 'karolblanco0824@gmail.com';
$titulo = 'Mensaje de pagina web';

$msjCorreo = "Nombre: $nombre\n Apellido: $apellido\n
E-Mail: $email\n  Telefono: $telefono \n Mensaje:\n $mensaje";

if ($_POST['submit']) {
if (mail($para, $titulo, $msjCorreo)) {
echo "<script language='javascript'>
alert('Mensaje enviado');
</script>";
} else {
echo 'Falló el envio';
}
}
?>
