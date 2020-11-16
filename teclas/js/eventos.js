var teclas = {
    LEFT: 37,
    UP: 38,
    DOWN: 40,
    RIGHT: 39
};
document.addEventListener("keydown", dibujarTeclado);
document.addEventListener("mousedown",presionarMouse);  //cuando presionas click
document.addEventListener("mouseup",soltarMouse);       //cuando sueltas click
document.addEventListener("mousemove",dibujarMouse);    //cuando mueves el mouse
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 100;
var y = 100;

dibujarLinea("blue", x-1, y-1, x+1, y+a, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
    lienzo.beginPath(); //Arrancal dibujo
    lienzo.strokeStyle = color; //color de la línea
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial); // empieze en
    lienzo.lineTo(xfinal, yfinal); // termine en y es una línea
    lienzo.stroke(); //
    lienzo.closePath(); //termina dibujo
}

function dibujarTeclado(evento) {

    var colorcito = "blue";
    var movimiento = 5;

    switch (evento.keyCode) {
        case teclas.UP:
            dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
            y = y - movimiento;
            break;
        case teclas.DOWN:
            dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
            y = y + movimiento;
            break;

        case teclas.LEFT:
            dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
            x = x - movimiento;
            break;

        case teclas.RIGHT:
            dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
            x = x + movimiento;
            break;
    }
}

var estado = 0;          // estado del click      
var colorLinea = "blue";    // color a la linea

// Funcion para mousemove
function dibujarMouse(evento){
  if (estado == 1) {   // solo se dibujara si esta el click del mouse presionado
    dibujarLinea(colorLinea, x, y, evento.layerX, evento.layerY, papel);
  }
  x = evento.layerX;
  y = evento.layerY;
}

// Funcion para mousedown
function presionarMouse(evento){
  estado = 1;         //click presionado  
  x = evento.layerX;
  y = evento.layerY;
}

// Funcion para mouseup
function soltarMouse(evento){
  estado = 0;         // click suelto
  x = evento.layerX;
  y = evento.layerY;
}