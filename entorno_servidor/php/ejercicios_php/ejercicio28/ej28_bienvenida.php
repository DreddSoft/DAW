<?php
session_start();

// echo $_SESSION['nombre'];
// echo $_SESSION['email'];
// echo $_SESSION['color'];

if (isset($_SESSION['color'])) {
    $color = $_SESSION['color'];
} else {
    $color = "linear-gradient(233deg, rgba(233, 225, 233, 1) 1%, rgba(190, 168, 188, 1) 57%, rgba(75, 59, 71, 1) 100%)";
}

// Comprobamos que la cookie este rellena para evitar warnings
if (isset($_COOKIE['nombre_usu'])) {
    $nombreUsuario = $_COOKIE['nombre_usu'];

} else {
    $nombreUsuario = "";
}

?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Página de bienvenida">
    <meta name="author" content="@Dreddsoft">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

        :root {
            --base--50: #f8f7f8;
            --base--100: #f3f0f3;
            --base--200: #e9e1e9;
            --base--300: #d8c9d6;
            --base--400: #bea8bc;
            --base--500: #a88ca4;
            --base--600: #91718a;
            --base--700: #795d73;
            --base--800: #664e60;
            --base--900: #4b3b47;
            --base--950: #32252f;
        }

        body {
            margin: 0;
            box-sizing: border-box;
            font-family: 'Poppins', sans-serif;
            font-size: 16px;
            background: <?= $color ?>;
        }

        h1 {
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            font-size: 48px;
            font-weight: 600;
            color: var(--base--950);
        }

        h2 {
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            font-size: 40px;
            font-weight: 500;
            color: var(--base--950);
        }

        h3 {
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            font-size: 32px;
            font-weight: 400;
            color: var(--base--950);
        }

        header {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            justify-content: center;
            align-items: center;
            border-bottom: 1px solid grey;
        }

        main {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 2rem 0;
        }

        form {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: rgba(243, 240, 243, 0.2);
            border: 2px solid var(--base--950);
            border-radius: 15px;
            color: var(--base--950);
            width: 400px;
            padding: 2rem 0.7rem;
            gap: 2rem;
            box-shadow: 12px 12px 12px var(--base--100);

        }

        input[type="text"],
        input[type="email"],
        select {
            text-align: center;
            border: 2px solid var(--base--950);
            border-radius: 8px;
            padding: 1rem 1.4rem;
            min-width: 200px;
            font-size: 18px;
            transition: 0.3s;

        }

        input[type="text"]:focus,
        input[type="email"]:focus,
        select:focus {
            box-shadow: 0 0 0 3px var(--base--100);

        }

        input[type="text"]::placeholder,
        input[type="email"]::placeholder,
        select::placeholder {
            font-size: 20px;
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            letter-spacing: 2px;
            color: #91718a;

        }

        input[type="color"] {
            min-width: 200px;
            border: 2px solid var(--base--950);
            border-radius: 8px;
        }


        img {
            display: grid;
            place-self: center;
            margin-bottom: 2rem;
        }

        .btns-wrap {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 1rem;
        }

        button {

            padding: 0.4rem 2rem;
            background-color: transparent;
            border: 2px solid var(--base--950);
            border-radius: 8px;
            transition: 0.3s;
            cursor: pointer;

            & a {
                text-decoration: none;
                color: inherit;
                padding: 0.7rem 1rem;
            }
        }

        button:hover {
            background-color: var(--base--600);
            border: 2px solid var(--base--100);
            color: var(--base--100);

        }

        button:active {
            transform: translateY(5px);
        }

        footer {
            background-color: var(--base--950);
            color: var(--base--50);
            padding: 1rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            & h3 {
                color: var(--base--50);
            }
        }
    </style>
    <title>Bienvenida</title>
</head>

<body style="background-color: <?= $nombreUsuario ?> !important;">

    <header>
        <img src="https://imgs.search.brave.com/n47Kd35ttgRyl7BLjYZ3wgbmDxQS-UIZbetG1tGbeqQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8yLzI3L1BI/UC1sb2dvLnN2Zy82/NDBweC1QSFAtbG9n/by5zdmcucG5n"
            alt="" style="place-self: center; width: 200px;">

        <h1>Entorno Servidor</h1>
        <h2>Ejercicio 28</h2>
    </header>
    <main>
        <h3>¡Hola <?= $nombreUsuario ?>!</h3>
        <p>Tu correo es: <?= $_SESSION['email'] ?></p>
        <button><a href="ej28_cerrar_sesion.php">Cerrar sesión</a></button>
    </main>
    <footer>
        <h3>Ejercicios de PHP - Entorno Servidor</h3>
        <span>@AndresBonilla</span>
    </footer>

</body>

</html>