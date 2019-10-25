// var botones = document.getElementsByClassName("boton");     // NO ME FUNCIONA
var botones = [];       // -> obtenerBotones()

window.onload = function (e) {                      // MEZCLAR BOTONES AL CARGAR LA PÁGINA.

    obtenerBotones();
    mezclar();
    acciones();

    function acciones() {

        for (let i = 0; i < botones.length; i++) {
            if (botones[i].innerHTML == "") {
                botones[i].style.visibility = "hidden";
            }

            botones[i].addEventListener("click", function (e) {
                var clicked = this.innerText;
                var visible = -1;
                var oculto = -1;

                for (let i = 0; i < botones.length; i++) {
                    if (document.getElementById(botones[i].id).innerText == clicked) {
                        visible = i;
                    }
                    if (document.getElementById(botones[i].id).innerText === "") {
                        oculto = i;
                    }
                }

                if (visible + 1 == oculto || visible - 1 == oculto || visible + 4 == oculto || visible - 4 == oculto) {
                    // SI LO ANTERIOR SE CUMPLE QUIERE DECIR, HAY INTERCAMBIO YA QUE SE HA CLICKADO UN BOTON EN DONDE EL
                    // OCULTO ESTA AL LADO.

                    // REALIZAR INTERCAMBIO.
                    var textoVisible = botones[visible].innerText;

                    botones[visible].innerText = botones[oculto].innerText;
                    botones[visible].style.visibility = "hidden";

                    botones[oculto].innerText = textoVisible;
                    botones[oculto].style.visibility = "visible";
                }
            });
        }
    }
}

function mezclar() {
    var longitud = botones.length;
    var aleatorio, aux;

    while (longitud > 0) {
        aleatorio = Math.floor(Math.random() * longitud);
        longitud--;

        aux = botones[longitud].innerHTML;
        botones[longitud].innerHTML = botones[aleatorio].innerHTML;
        botones[aleatorio].innerHTML = aux;
    }
}

function obtenerBotones() {
    var uno = document.getElementById("1");
    var dos = document.getElementById("2");
    var tres = document.getElementById("3");
    var cuatro = document.getElementById("4");
    var cinco = document.getElementById("5");
    var seis = document.getElementById("6");
    var siete = document.getElementById("7");
    var ocho = document.getElementById("8");
    var nueve = document.getElementById("9");
    var diez = document.getElementById("10");
    var once = document.getElementById("11");
    var doce = document.getElementById("12");
    var trece = document.getElementById("13");
    var catorce = document.getElementById("14");
    var quince = document.getElementById("15");
    var dieciseis = document.getElementById("16");

    botones.push(uno);
    botones.push(dos);
    botones.push(tres);
    botones.push(cuatro);
    botones.push(cinco);
    botones.push(seis);
    botones.push(siete);
    botones.push(ocho);
    botones.push(nueve);
    botones.push(diez);
    botones.push(once);
    botones.push(doce);
    botones.push(trece);
    botones.push(catorce);
    botones.push(quince);
    botones.push(dieciseis);
}

function reiniciar() {
    window.location.reload();
}
