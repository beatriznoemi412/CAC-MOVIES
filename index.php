<?php
$servername = "localhost";
$username = "id22386891_user";
$password = "MisPeliculas1234!!";
$dbname = "id22386891_registrarpeliculas";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
} else {
    echo "Conexión exitosa a la base de datos.<br>";
}

// Incluir el archivo de conexión

//verifica si la solicitud HTTP es de tipo POST.
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $errores = [];

    // Validación y filtrado de datos
    if (isset($_POST['nombre'])) {
        $nombrePelicula = trim($_POST['nombre']);
    } else {
        $errores[] = "El nombre de la película es obligatorio.";
    }

    if (isset($_POST['descripcion'])) {
        $descripcion = trim($_POST['descripcion']);
    } else {
        $errores[] = "La descripción es obligatoria.";
    }

    if (isset($_POST['director'])) {
        $director = trim($_POST['director']);
    } else {
        $errores[] = "El nombre del director es obligatorio.";
    }

    if (isset($_POST['estrellas'])) {
        $estrellas = trim($_POST['estrellas']);
    } else {
        $errores[] = "El campo estrellas es obligatorio.";
    }

    if (isset($_POST['genero'])) {
        $genero = trim($_POST['genero']);
    } else {
        $errores[] = "El campo género es obligatorio.";
    }

    // Si no hay errores, procesar los datos
    if (empty($errores)) {
        // Preparar consulta SQL para insertar datos
        $sql = "INSERT INTO registropeliculas (nombre, descripcion, director, estrellas, genero) 
                VALUES ('$nombrePelicula', '$descripcion', '$director', '$estrellas', '$genero')";

        // Ejecutar consulta SQL
        if (mysqli_query($conn, $sql)) {
            echo "<p>Datos insertados correctamente.</p>";

            // Mostrar los datos insertados
            echo "<p>Nombre: $nombrePelicula</p>";
            echo "<p>Descripción: $descripcion</p>";
            echo "<p>Director: $director</p>";
            echo "<p>Estrellas: $estrellas</p>";
            echo "<p>Género: $genero</p>";
        } else {
            echo "Error al insertar datos: " . mysqli_error($conn);
        }
    } else {
        // Mostrar errores al usuario
        foreach ($errores as $error) {
            echo "<p>Error: $error</p>";
        }
    }
}
?>

