window.onload = function () {

var pelotita
var vasos=document.getElementsByClassName("opcion")
var numRandom = Math.floor(Math.random() * 3)
var mensaje = document.querySelector(".mensaje")
var mostrarRestart = document.querySelector(".restart")
var restart = document.querySelector("button")

vasos[numRandom].innerHTML += '<div class="pelotita"></div>'


for (var i = 0; i < vasos.length; i++) {
  vasos[i].addEventListener("click", handleClick)
}

function handleClick() {
  pelotita = document.querySelector(".pelotita")
  if (this.childNodes[3] == pelotita) {
    pelotita.style.top = "135%"
    mensaje.innerHTML = "<h2> Ganaste! </h2>"
    terminarJuego()
  }else {
    mensaje.innerHTML = "<h2> Perdiste! </h2>"
    terminarJuego()
  }
  this.style.top = "-100px"
}


function terminarJuego() {
  for (var i = 0; i < vasos.length; i++) {
    vasos[i].removeEventListener("click", handleClick)
  }
  mostrarRestart.style.display = "flex"
}
restart.addEventListener("click", function () {
  location.reload()
})




// <<<<<<<------>>>>>>>
}
