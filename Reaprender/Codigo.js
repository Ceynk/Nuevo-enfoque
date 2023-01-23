// 1 es piedra, 2 es papel, 3 es tijera
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function eleccion(jugada) {
    let resultado = "";
    if (jugada == 1) {
        resultado = "Piedra";
    }
    else if (jugada == 2) {
        resultado = " Papel";
    }
    else if (jugada == 3) {
        resultado = "Tijera";
    }
    else {
        resultado = "No escogiste nada";
    }
    return resultado;
}
function combate(jugador,pc) {
    let resultadoo = "";
    if (jugador == pc) {
        resultadoo ="Empate";
    } else if (jugador == 1 && pc == 3 || jugador == 3 && pc == 2 || jugador == 2 && pc == 12) {
        resultadoo = "Ganaste";
    } else {
        resultadoo = "Perdiste";
    }
    return resultadoo;
}
let jugador;
let pc = aleatorio(1, 3);
jugador = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera");

alert("Tu eliges: " + eleccion(jugador))

alert("Pc elige: " + eleccion(pc))

alert(combate(jugador, pc))



