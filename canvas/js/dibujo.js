

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var ancho = d.width;

var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick );

function dibujoPorClick() {

    var l = 0;
    var yi, xf, xf2, yf2;
    var lineas = parseInt(texto.value);
    var espacio = ancho / lineas;

    for  (l = 0; l < lineas; l++) {
        yi = l * espacio;
        xf = espacio * (l + 1);
        xf2 = ancho - xf;
        yf2 = ancho - yi;

        dibujarLinea("purple", 0, yi, xf, 300);
        dibujarLinea("purple", yi, 300, 300, xf2);
        dibujarLinea("purple", 300, yf2, xf2, 0);
        dibujarLinea("purple", yf2, 0, 0, xf);
    }

}


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
    lienzo.beginPath(); //Arrancal dibujo
    lienzo.strokeStyle = color; //color de la línea
    lienzo.moveTo(xinicial, yinicial); // empieze en
    lienzo.lineTo(xfinal, yfinal); // termine en y es una línea
    lienzo.stroke(); //
    lienzo.closePath(); //termina dibujo
}