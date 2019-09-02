  window.onload = function () {
    //EMPIEZA EL JUEGO AL CARGAR LA PÁGINA
    var palabraRandom;
    var arrayPalabraRandom;
    var arrayLetrasUsadas;
    var mostrarPalabra;
    var ultimoIndex;
    var contadorDeRonda;
    var contador;
    var listaPalabras;

    document.querySelector("#botonJuegoNuevo").addEventListener("click", empezarJuego)}
function empezarJuego() {
    iniciarListaPalabras();
    arrayLetrasUsadas = [];
    ultimoIndex = 0;
    contadorDeRonda = document.querySelector("#contadorDeRonda");
    contadorDeRonda.innerHTML = "1";
    ocultarMostrar("tablero");
    ocultarMostrar("botonJuegoNuevo");
    prepararJuego();
}
function iniciarListaPalabras() {
  listaPalabras = [
    "test",
    "table",
    "banana",
    "superman",
    "computer",
    "cellphone",
    "javascript"
  ];
}
function prepararJuego() {
  contador = 1;
  palabraRandom= obtenerPalabraRandom();
  if(palabraRandom == undefined){
    alert("Hay un error en la palabra!");
    return;
  }
  arrayPalabraRandom = palabraRandom.split("");
  mostrarPalabra = [];
  mostrarPalabra.length = arrayPalabraRandom.length;
  for (var i = 0; i < mostrarPalabra.length; i++) {
    mostrarPalabra[i] = "_";   //Genera espacios condicionales de la palabra elegida
  }
  var text = document.querySelector("#guessButton");
  recargarDisplay();
}
function chequeaLetra(letter) {
    habilitarDeshabilitar(letter);
    getInput(letter.toLowerCase()); //Hace que la letra este en minuscula SIEMPRE!!
    arrayLetrasUsadas[ultimoIndex] = letter;
    ultimoIndex++;
}

function getInput(acierto) {
    var match = false;
    for (var i = 0; i < arrayPalabraRandom.length; i++) {
        if (acierto == arrayPalabraRandom[i]) {
            mostrarPalabra[i] = acierto;
            match = true;
        }
    }
    if (match==false) { //si la letra elegida es incorrecta aumenta el contador y escribe la cantida de intentos
        contador++;
        contadorDeRonda.innerHTML = contador.toString();
        chequeaPerdio()
    }
    recargarDisplay();
    palabra = mostrarPalabra.join("");
    console.log(palabra);
    if (palabraRandom == palabra) {
        ocultarMostrar("letras");
        alert("Ganaste!!")
        ocultarMostrar("botonJuegoNuevo")
        botonJuegoNuevo.onclick = function(){
          location.reload()
        }
    }
}
  function recargarDisplay() {
      var palabra = "";
      for (var i = 0; i < mostrarPalabra.length; i++) {
          palabra += mostrarPalabra[i] + " ";
          console.log(mostrarPalabra[i]);
      }
      document.querySelector("#palabra").innerHTML = palabra;
  }
function obtenerPalabraRandom() { //ELIGE LA PALABRA RANDOM DE NUESTRO ARRAY DE PALABRAS
    var numeroRandom = Math.floor(Math.random() * listaPalabras.length);
    var palabra = listaPalabras[numeroRandom];
    listaPalabras.splice(numeroRandom, 1);
    return palabra;
}
function chequeaPerdio() {
  if (contador >= 6) {
    ocultarMostrar("gif")
    ocultarMostrar("botonJuegoNuevo")
    // ocultarMostrar("letras")
    var botonJuegoNuevo = document.querySelector("#botonJuegoNuevo")
    alert("Has sido ahorcado...")
    botonJuegoNuevo.addEventListener("click", function(){
      location.reload()
    })
  }
}
function ocultarMostrar(id) { //ESTA FUNCION SE PUEDE OBVIAR POR ALGO MAS SIMPLE
  var x = document.querySelector("#" + id);
  x.hidden = !x.hidden; //Si esta oculto lo muestra y viceversa [chequera metodo mas simple]
}

function habilitarDeshabilitar(id) { //HABILITA O DESHABILITA LETRAS
  var x = document.querySelector("#"+id);
  x.disabled = !x.disabled;
} //ESTA FUNCION SE PUEDE OBVIAR POR ALGO MAS SIMPLE
