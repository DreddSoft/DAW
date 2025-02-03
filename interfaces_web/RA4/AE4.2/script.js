// Capturamos todos los botones
const video = document.getElementById("video");
const play = document.getElementById("play");
const playContent = document.getElementById("playContent");
const restart = document.getElementById("restart");
const rewind = document.getElementById("rewind");
const forward = document.getElementById("forward");
const mute = document.getElementById("mute");
const volumeDown = document.getElementById("downVolume");
const volumeUp = document.getElementById("upVolume");

// GESTION DE LOS EVENTOS
play.addEventListener('click', () => {

    // Si esta parado el video
    if (video.paused) {
        video.play();   // Play
        // Cambiamos el boton a pause
        playContent.innerHTML = "pause";
        document.body.classList.add("modoOscuro");
    } else {    // Si esta en play
        video.pause();  // Pause
        // Cambiamos el boton a play
        playContent.innerHTML = "play_arrow";
        document.body.classList.remove("modoOscuro");

    }
}); 

// Reiniciar
restart.addEventListener("click", () => {
    // Ponemos el tiempo a 0
    video.currentTime = 0;
    // Iniciamos el video
    video.play();
    // Ponemos el simbolo de pausa
    playContent.innerHTML = "pause";
});

// Hacia atras...
rewind.addEventListener("click", () => {
    // Le quitamos 5 segundos al timepo del video.
    video.currentTime = video.currentTime - 5;
});
// Hacia delante...
forward.addEventListener("click", () => {
    // Sumamos 5 segundos al tiempo del video
    video.currentTime = video.currentTime + 5;
});

// Mute
mute.addEventListener("click", () => {
    // Si el video esta muteado 
    if (video.muted) {
        // Cambiamos le simbolo a mutear 
        document.getElementById("muteContent").innerHTML = "no_sound";
        // Lo desmuteamos
        video.muted = false;
    } else { // Si el video no esta muteado
        // Cambiamos el simbolo a desmutear
        document.getElementById("muteContent").innerHTML = "brand_awareness";
        // Muteamos
        video.muted = true;
    }

});

// Bajar el volumen
volumeDown.addEventListener("click", () => {
    // quitamos 0.1 al volumen
    let newVolume = video.volume - 0.1;
    video.volume = newVolume.toFixed(1);
    console.log(video.volume);

    // Controlamos botones
    controlBtnsSonido();
});
volumeUp.addEventListener("click", () => {
    // Suvimos 0.1 al volumen
    let newVolume = video.volume + 0.1;
    video.volume = newVolume.toFixed(1);

    console.log(video.volume);

    // Controlamos btns
    controlBtnsSonido();

});

const audios = [
    { title: "Naturaleza", src: "https://sound-effects-media.bbcrewind.co.uk/mp3/NHU05104275.mp3" },
    { title: "Industria", src: "https://sound-effects-media.bbcrewind.co.uk/mp3/07076051.mp3" },
    { title: "Base Aérea", src: "https://sound-effects-media.bbcrewind.co.uk/mp3/07001043.mp3" }
];

let actual = new Audio();
const cambiaAudio = document.getElementById("cambiaAudio");
const audioMsj = document.getElementById("audioMsj");
const audioTitle = document.getElementById("audioTitle");

cambiaAudio.addEventListener("click", () => {
    if (actual.paused) {
        let randomAudio = audios[Math.floor(Math.random() * audios.length)];
        actual.src = randomAudio.src;
        audioTitle.textContent = randomAudio.title;
        audioMsj.style.display = "block";
        actual.play();
        cambiaAudio.textContent = "Detener sonido ambiente";
    } else {
        actual.pause();
        audioMsj.style.display = "none";
        cambiaAudio.textContent = "Iniciar sonido ambiente";
    }
});

// funcion para control de botones de sonida
function controlBtnsSonido() {

    // Esto aplicara true o false dependiendo de si se cumple la condicon
    volumeDown.disabled = video.volume === 0;
    volumeUp.disabled = video.volume === 1;
    
}