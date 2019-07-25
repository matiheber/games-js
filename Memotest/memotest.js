// En el memotest hay 3 estados:
// - 0 cartas elegidas: quedan elegir dos cartas
// - 1 carta elegida: queda elegir 1 carta más
// - 2 cartas elegidas: se muestran las dos elecciones a la vez para que puedan ver si se equivocaron o no con su elección, y si se equivocaron se las da vuelta pero si las cartas son iguales no
// El juego progresa a medida que elegimos cartas, cuando elegimos dos que coinciden sumamos puntos y cuando elegimos dos que no tenemos que volver a probar para ganar puntos.
var cartasElegidas = 0;

// Guardamos el puntaje del juego. Cada vez que acertamos con adivinar una pareja sumamos un punto.
var puntaje = 0;

// Son variables que van a servir para guardar las cartas en las que clickeamos a medida que progresa el juego. Carta uno va a guardar la primera carta que elegimos y cartaDos la segunda.
var cartaUno;
var cartaDos;

// Este mazo guarda como cada imágen se corresponde con las tarjetas en la mesa. En la posición 0 el mazo guarda la imágen que le toca al div que tiene un texto 0, en la posición 1 guarda la imágen que le toca al div con el número 1, y así sucesivamente.
var mazo = ["imagen1", "imagen1", "imagen2", "imagen2", "imagen3", "imagen3", "imagen4", "imagen4", "imagen5", "imagen5"];
mazo.sort(function() {
   return 0.5 - Math.random()
 }); //Agrego esto para randomizar el orden del array y que sea aleatoria la posicion de las tarjetas

var mensajes = document.querySelector("#mensajes");
var puntos   = document.querySelector("h2");
var contenedor = document.querySelector("#contenedor");
contenedor.addEventListener("click", handleClick);

function handleClick(e) {
  var carta = e.target;
  console.log(carta);
  if (carta.getAttribute("id")=="contenedor") {
    mensajes.innerHTML = "Clickea una carta valida";
    return
  }

  // Qué pasa cuando el usuario elige una carta depende de cuántas elegidas ya hay.
  // Cuando todavía no elegimos ninguna: si el usuario aprieta en una carta que ya muestra la imágen hay que avisarle que elija otra; si no hay que dar vuelta la carta que eligió, guardarla para poder comparar después y registrar que elegimos una carta.
  if(cartasElegidas == 0) {
      if(carta.classList.length != 0) {
        mensajes.innerHTML = "Elegí una carta que no veas.";
      } else {
        mensajes.innerHTML = "Muy bien! Elegí otra carta.";
        carta.classList.add(mazo[carta.innerHTML]);
        cartaUno = carta;
        cartasElegidas = cartasElegidas + 1;
      }
  }
  // Cuando hay una carta elegida solamente la dinámica es parecida.
  else if(cartasElegidas == 1) {
    if(carta.classList.length != 0) {
      mensajes.innerHTML = "Elegí una carta que no veas.";
    } else {
      carta.classList.add(mazo[carta.innerHTML]);

      cartaDos = carta;

      if (mazo[cartaUno.innerHTML] == mazo[cartaDos.innerHTML]) {
        mensajes.innerHTML = "Coinciden! Clickea una vez mas para poder elegir otra carta.";
        chequeaGanador()
      } else {
        mensajes.innerHTML = "No coinciden... clickea una vez más para elegir otra carta";
      }

      cartasElegidas = cartasElegidas + 1;
    }
  }
  // Cuando ya eligió dos cartas tenemos que hacer que en el próximo click se vuelva a elegir una carta nueva.
  else {
    mensajes.innerHTML = "Elegí una carta nueva";

    if (mazo[cartaUno.innerHTML] == mazo[cartaDos.innerHTML]) {
      puntaje = puntaje + 1;
      puntos.innerHTML = puntaje;
      chequeaGanador()
    } else {
      cartaUno.classList.remove(mazo[cartaUno.innerHTML]);
      cartaDos.classList.remove(mazo[cartaDos.innerHTML]);
    }

    cartasElegidas = 0;
  }
}
function chequeaGanador() {
  if (puntaje == 5) {
    mensajes.innerHTML = "Ganaste!!"
  }
}
