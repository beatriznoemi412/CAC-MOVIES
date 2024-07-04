<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CAC-MOVIES</title>
    <link rel="icon" href="img/luz-camara.png" type="accion/png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body class="popkorn">
    <header class="header">
            
                <a href="index.html" class="anclaLogo animate__pulse">
                    <img class="logo" src="img/cinta-filmacion.png" alt="Logo de CAC-MOVIES"> 
                    CAC-MOVIES
                </a>
    
    </header>
       <main>
        <div class="tabla">
            <h1 class="tablaTitulo">Administrador de Películas</h1>
            <table id="tablaPeliculas">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Director</th>
                        <th>Estrellas</th>
                        <th>Género</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
            
                    <?php
                   
                    include 'index.php';
            
                    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {  
                // Obtener los datos de las películas
                    $sql = "SELECT id_registro, nombre, descripcion, director, estrellas, genero FROM registropeliculas";
                    $result = $conn->query($sql);

                    if ($result->num_rows > 0) {
                    //Mostrar los datos en la tabla
                       while ($row = $result->fetch_assoc()) {
                        echo "<tr>";
                        echo "<td>" . $row["id_registro"] . "</td>";
                        echo "<td>" . $row["nombre"] . "</td>";
                        echo "<td>" . $row["descripcion"] . "</td>";
                        echo "<td>" . $row["director"] . "</td>";
                        echo "<td>" . $row["estrellas"] . "</td>";
                        echo "<td>" . $row["genero"] . "</td>";
                           
                        }
                   } else {
                        echo "<tr><td colspan='7'>No hay películas registradas</td></tr>";
                  }

                   $conn->close();
                }
                    ?>
                   
                </tbody>
            </table>
        </div>
    </main>
</body>
</html>-->
