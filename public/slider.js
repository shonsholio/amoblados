console.log('SI ESTAMOS TRABAJANDO EL JS');

var slider = [
                "409/1.jpg",
                "409/2.jpg",
                "409/3.jpg"
              ];

document.Imagen.src = slider[0];

var sliderDerecha = document.querySelector("#slider-derecho");
var sliderIzquierda = document.querySelector("#slider-izquierdo");

var contador = 0;

function moverDerecha(){
  contador ++ ;
  if (contador > slider.length - 1) {
    contador = 0
  }
  document.Imagen.src = slider[contador];
}

sliderDerecha.addEventListener("click", moverDerecha);

function moverIzquierda(){
  contador -- ;
  if (contador < 0) {
    contador = slider.length - 1
  }
  document.Imagen.src = slider[contador];
}

sliderIzquierda.addEventListener("click", moverIzquierda);