
function seleccionarMascotaJugador() {
    if (document.getElementById("charmander").checked) {
        document.getElementById("tu-mascota").innerHTML = "Charmander";
        document.getElementById("tu-mascota1").innerHTML = "Charmander";
        document.getElementById("tu-mascota").style.color = "orangered";
        document.getElementById("tu-mascota1").style.color = "orangered";

        alert("Has elegido a Charmander");

    }
    else if (document.getElementById("squirtle").checked) {
        document.getElementById("tu-mascota").innerHTML = "Squirtle";
        document.getElementById("tu-mascota1").innerHTML = "Squirtle";
        document.getElementById("tu-mascota").style.color = "rgb(114, 226, 189)";
        document.getElementById("tu-mascota1").style.color = "rgb(114, 226, 189)";
        alert("Has elegido a Squirtle");
    }

    else if (document.getElementById("bulbasur").checked) {
        document.getElementById("tu-mascota").innerHTML = "Bulbasur";
        document.getElementById("tu-mascota1").innerHTML = "Bulbasur";

        document.getElementById("tu-mascota").style.color = "rgb(19, 196, 19)";
        document.getElementById("tu-mascota1").style.color = "rgb(19, 196, 19)";
        alert("Has elegido a Bulbasur");
    }

    else {
        alert("No has elegido nada")
    }
}
function seleccionarMascotaEnemiga() {
    if (pc == 1) {
        document.getElementById("su-mascota").innerHTML = "Charmander";
        document.getElementById("su-mascota").style.color = "orangered";
        document.getElementById("su-mascota1").innerHTML = "Charmander";
        document.getElementById("su-mascota1").style.color = "orangered";
    } else if (pc == 2) {
        document.getElementById("su-mascota").innerHTML = "Squirtle";
        document.getElementById("su-mascota").style.color = "rgb(114, 226, 189)";
        document.getElementById("su-mascota1").innerHTML = "Squirtle";
        document.getElementById("su-mascota1").style.color = "rgb(114, 226, 189)";
    }
    else if (pc == 3) {
        document.getElementById("su-mascota").innerHTML = "Bulbasur";
        document.getElementById("su-mascota").style.color = "rgb(19, 196, 19)";
        document.getElementById("su-mascota1").innerHTML = "Bulbasur";
        document.getElementById("su-mascota1").style.color = "rgb(19, 196, 19)";
    }
}
function ataqueEnemigoAl() {
    if (pc == 1) {
        ataqueEnemigo = "FUEGO";
        document.getElementById("ataque-enemigo").innerHTML = "Llamarada🔥";
        document.getElementById("ataque-enemigo").style.color = "orangered";
        document.getElementById("ataque-enemigo1").innerHTML = "Llamarada🔥";
        document.getElementById("ataque-enemigo1").style.color = "orangered";
    } else if (pc == 2) {
        ataqueEnemigo = "AGUA";
        document.getElementById("ataque-enemigo").innerHTML = "Pistola Agua💧"
        document.getElementById("ataque-enemigo").style.color = "rgb(114, 226, 189)";
        document.getElementById("ataque-enemigo1").innerHTML = "Pistola Agua💧"
        document.getElementById("ataque-enemigo1").style.color = "rgb(114, 226, 189)";

    }
    else if (pc == 3) {
        ataqueEnemigo = "PLANTA";
        document.getElementById("ataque-enemigo").innerHTML = "Hoja Afilada🌿"
        document.getElementById("ataque-enemigo").style.color = "rgb(19, 196, 19)";
        document.getElementById("ataque-enemigo1").innerHTML = "Hoja Afilada🌿"
        document.getElementById("ataque-enemigo1").style.color = "rgb(19, 196, 19)";
    }
    combate()
    victoria()
}
function cargaCompleta() {
    let mascotaJugador = document.getElementById("mascota");
    mascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    mascotaJugador.addEventListener('click', seleccionarMascotaEnemiga)
    // alert("Carga completa")

    let botonFuego = document.getElementById('Fuego');
    botonFuego.addEventListener('click', ataqueFuego);
    botonFuego.addEventListener('click', ataqueEnemigoAl)

    let botonAgua = document.getElementById('Agua');
    botonAgua.addEventListener('click', ataqueAgua);
    botonAgua.addEventListener('click', ataqueEnemigoAl)

    let botonPlanta = document.getElementById('Planta');
    botonPlanta.addEventListener('click', ataquePlanta);
    botonPlanta.addEventListener('click', ataqueEnemigoAl)
}

function ataqueFuego() {
    ataqueJugador = 'FUEGO';
    document.getElementById("tu-ataque").innerHTML = "Llamarada🔥";
    document.getElementById("tu-ataque").style.color = "orangered";
    document.getElementById("tu-ataque1").innerHTML = "Llamarada🔥";
    document.getElementById("tu-ataque1").style.color = "orangered";
    alert("Llamarada🔥")
}
function ataqueAgua() {
    ataqueJugador = 'AGUA';
    document.getElementById("tu-ataque").innerHTML = "Pistola Agua💧";
    document.getElementById("tu-ataque").style.color = "rgb(114, 226, 189)";
    document.getElementById("tu-ataque1").innerHTML = "Pistola Agua💧";
    document.getElementById("tu-ataque1").style.color = "rgb(114, 226, 189)";
    alert("Pistola Agua💧")
}
function ataquePlanta() {
    ataqueJugador = 'TIERRA';
    document.getElementById("tu-ataque").innerHTML = "Hoja Afilada🌿";
    document.getElementById("tu-ataque").style.color = "rgb(19, 196, 19)";
    document.getElementById("tu-ataque1").innerHTML = "Hoja Afilada🌿";
    document.getElementById("tu-ataque1").style.color = "rgb(19, 196, 19)";
    alert("Hoja Afilada🌿")
}
function combate() {
    let spanNuestra = document.getElementById("nuestra-vida");
    let spanSuya = document.getElementById("su-vida");

    if (ataqueEnemigo == ataqueJugador) {
        crearMensaje("Empate")
    }
    else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
        crearMensaje("Le quitaste 1 corazon")
        vidasEnemigo--
        spanSuya.innerHTML = vidasEnemigo;
    }
        else if (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
            crearMensaje("Le quitaste 2 corazones")
            vidasEnemigo -= 2;
            spanSuya.innerHTML = vidasEnemigo;
        }
        else if (ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
            crearMensaje("Le quitaste 2 corazones")
            vidasEnemigo -= 2;
            spanSuya.innerHTML = vidasEnemigo;
        }
       
        else if (ataqueEnemigo == 'TIERRA' && ataqueJugador == 'AGUA') {
            crearMensaje("Te quito 2 corazones")
            vidasJugador-= 2;
            spanNuestra.innerHTML = vidasJugador;
        }
        else if (ataqueEnemigo == 'AGUA' && ataqueJugador == 'FUEGO') {
            crearMensaje("Te quito 2 corazones")
            vidasJugador-= 2;
            spanNuestra.innerHTML = vidasJugador;
        }
        else if (ataqueEnemigo == 'FUEGO' && ataqueJugador == 'TIERRA') {
            crearMensaje("Te quito 1 corazon")
            vidasJugador--;
            spanNuestra.innerHTML = vidasJugador;
        }
       
        else {
        }   
    }
    function victoria() {
        if (vidasJugador == 0) {
            crearMensaje("perdiste la partida")
        } else if(vidasEnemigo == 0) {
            crearMensaje("ganaste la partida")
        }
        else{
        }
    }
    
    
    
    function crearMensaje(resultado) {
        let sectionMensajes = document.getElementById('mensaje')

        let parrafo = document.createElement('p')
        parrafo.innerHTML = resultado;

        sectionMensajes.appendChild(parrafo)
    }


    function aleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    let pc = aleatorio(1, 3);
    let ataqueJugador;
    let ataqueEnemigo;
    let vidasJugador = 3;
    let vidasEnemigo = 3;

    window.addEventListener('load', cargaCompleta);

