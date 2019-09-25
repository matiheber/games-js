window.onload = function () {
var tamañoObjetivo = 80
var x
var y
var tablero = document.querySelector(".tablero")
var objetivo = document.querySelector(".objetivo")
var contenedorPuntos = document.querySelector("h6")
var puntos = 0
var clicks = 0
var ganador = document.querySelector(".ganador")

function ejesRandom() {
    if (tamañoObjetivo == 80) {
      y = Math.floor(Math.random() * 490)
      x = Math.floor(Math.random() * 1210)

    }
}


function moverObjetivo() {
  ejesRandom()
  objetivo.style.left = x.toString() + "px"
  objetivo.style.top = y.toString() + "px"
}

objetivo.addEventListener("click", moverObjetivo)
tablero.addEventListener("click", chequearPunto)

setInterval( moverObjetivo, 2000)

function chequearPunto(e) {
  if (e.target == objetivo) {
    puntos++
    chequearGanador()
  }else {
    puntos--
  }
  contenedorPuntos.innerText = "Points: " + puntos
  clicks++
}

function chequearGanador() {
  if (puntos == 10) {
    ganador.style.display = "block"
    ganador.innerHTML = '<h2>Ganaste en ' + clicks + ' clicks<h2>'
  }
}

// SUMAR COUNTDOWN ????




}
