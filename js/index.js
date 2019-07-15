'use strict'
// Variables para carrusel
var maxcarrousel = 0;
var conteo = 0;
var ant = 0;

$(document).ready(function () {
    // Variable para máximo de carrel
    maxcarrousel = ($(".contenedor12").children().length - 1);
    // Intervalo de tiempo de 4s para ejecutar carrusel automatico
    // setInterval(() => {
    //     carruselnext();
    // }, 4000);
});

// Eventos de mouse encima y mouse fuera para botones de llamada de accion
document.querySelector(".boton").addEventListener("mouseout", () => {
    setTimeout(() => {
        document.querySelector(".boton img").classList.add("imgblanco");
    }, 400);
});
document.querySelector(".boton").addEventListener("mouseover", () => {
    document.querySelector(".boton img").classList.remove("imgblanco");
});
document.querySelector(".botonn").addEventListener("mouseout", () => {
    setTimeout(() => {
        document.querySelector(".botonn img").classList.remove("imgblanco");
    }, 400);
});
document.querySelector(".botonn").addEventListener("mouseover", () => {
    document.querySelector(".botonn img").classList.add("imgblanco");
});

/**
 *Funcion para avanzar en carrusel
 *
 */
function carruselnext() {
    conteo = conteo + 1;
    ant = conteo - 1;
    if (maxcarrousel == conteo) {
        conteo = 0;
        ant = 3;
    }
    $(".contenedor12").children().eq(ant).hide("slide");
    $(".posicion-carrusel").children().eq(ant).attr("src", "img/oval-2.png");

    setTimeout(() => {
        $(".contenedor12").children().eq(conteo).show("slide", { direction: "right" });
        $(".posicion-carrusel").children().eq(conteo).attr("src", "img/oval.png");
    }, 600);
}

/**
 *Funcion para retroceder en carrusel
 *
 */
function carruselprev() {
    if (conteo == 0) {
        conteo = 3;
        ant = 0;
    } else {
        conteo = conteo - 1;
        ant = conteo + 1;
    }
    $(".contenedor12").children().eq(ant).hide("slide", { direction: "right" });
    $(".posicion-carrusel").children().eq(ant).attr("src", "img/oval-2.png");

    setTimeout(() => {
        $(".contenedor12").children().eq(conteo).show("slide", { direction: "left" });
        $(".posicion-carrusel").children().eq(conteo).attr("src", "img/oval.png");
    }, 600);
}

// Eventos click para controles de carrusel
$("#next").click(function (e) {
    e.preventDefault();
    carruselnext();
});

$("#prev").click(function (e) {
    e.preventDefault();
    carruselprev();
});

$(".navmob").click(function (e) {
    e.preventDefault();
    $(".backmenu").toggle("slide", { direction: "right" });
});