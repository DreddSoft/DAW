<?php

?>

<main>
    <section>
        <img src="<?= $data["poster_url"] ?>" alt="Poster de <?= $data["title"] ?>" width="200">
        <h2>La proxima pelicula de MARVEL</h2>
    </section>

    <hgroup>
        <h3><?= $title . ". " . $until_message ?></h3>
        <p>Fecha de estreno: <?= date("d/M/y", strtotime($release_date)) ?></p>
        <p>La siguiente es: <b><?= $following_production["title"] ?></b></p>
    </hgroup>
</main>