<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Administrador de Películas</title>
    <link rel="stylesheet" href="css/styles.css">
</head>

<body>
    <header id="header">
        <nav>
            <div class="logoNav animate__animated animate__bounce">
                <a href="index.html">
                    <img class="logo" src="img/cinta-filmacion.png" alt="Logo de CAC-MOVIES">
                    CAC-MOVIES
                </a>
            </div>
            <ul class="lista-nav">
                <li class="item"><a href="index.html">Tendencias</a></li>
                <li class="item"><a href="registrarse.html">Registrarse</a></li>
                <li class="item"><a href="iniciarSesion.html">Iniciar Sesión</a></li>
                <li class="item"><a href="registroPeliculas.html">Registro de Pelis</a></li>
            </ul>
        </nav>
    </header>
    <main class="banner">
        <section class="background  animate__animated animate__zoomIn" data-aos-duration="1000">
            <h1 class="background-titulo">Películas y series ilimitadas
                <br>
                en un solo lugar
            </h1>
            <br>
            <h2>Disfruta donde quieras.</h2>
            <br>
            <h2>Cancela en cualquier momento.</h2>
            <br>
        </section>
        <div class="tabla">
            <h1>Administrador de Películas</h1>
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
                    // Incluir archivo de conexión
                    include 'conexion.php';

                    // Obtener los datos de las películas
                    $sql = "SELECT id_registro, nombre, descripcion, director, estrellas, genero FROM registropeliculas";
                    $result = $conn->query($sql);

                    if ($result->num_rows > 0) {
                        // Mostrar los datos en la tabla
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
                    ?>
                </tbody>
            </table>
        </div>
    </main>
    <footer id="footer">
        <nav>
            <h1>
                <a href="index.html">
                    <img class="logo" src="img/cinta-filmacion.png" alt="Logo de CAC-MOVIES">
                    CAC-MOVIES
                </a>
            </h1>
            <ul class="lista-nav">
                <li class="item"><a href="">Términos y condiciones</a></li>
                <li class="item"><a href="">Preguntas frecuentes</a></li>
                <li class="item"><a href="">Ayuda</a></li>
                <li class="item"><a href="administradorPeliculas.php">Administrador Peliculas</a></li>
            </ul>
        </nav>
    </footer>
</body>

</html>