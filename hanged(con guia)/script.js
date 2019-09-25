window.onload = function() {
  //PASO 1) GENERAR TODAS LAS VARIABLES QUE NECESITAMOS USAR EN MULTIPLES FUNCIONES AQUI
  var botonJuegoNuevo = document.querySelector("#botonJuegoNuevo")
  var teclado
  var listaPalabras
  var arrayLetrasUsadas
  var intentos
  var contadorDeRonda
  var palabraRandom
  var arrayPalabraRandom
  var mostrarPalabra
  var ultimoIndex;

//PASO 2) AL HACER CLICK EN EL BOTON "EMPEZAR JUEGO" DEBE:
  // - OCULTAR EL BOTON
  // - MOSTRAR EL TECLADO
  // - ACTIVAR FUNCION DE "empezarJuego"
  botonJuegoNuevo.onclick = function () {
  ocultarMostrar("botonJuegoNuevo")
  ocultarMostrar("tablero")
  empezarJuego()
  }

// PASO 3): DECLARAR LA FUNCION "empezarJuego" LA CUAL DEBE:
    // - ACTIVAR LA FUNCION "iniciarListaPalabras"

    // - ARMAR UN ARRRAY VACIO DONDE GUARDAREMOS LAS LETRAS USADAS

    // - DECLARAR LA VARIABLE GLOBAL DE ULTIMO INDEX EN 0 PARA HACER EL RECUENTO DE LAS LETRAS USADAS

    // - DECLARAR UNA VARIABLE PARA GUARDAR LOS INTENTOS DEL JUGADOR

    // - ESCRIBIR EL NUMERO DE RONDA POR DONDE COMIENZA EL USUARIO (innerHTML)

    // - ACTIVAR LA FUNCION "prepararJuego"
  function empezarJuego() {
    iniciarListaPalabras()
    arrayLetrasUsadas = []
    ultimoIndex = 0
    intentos = 1
    contadorDeRonda = document.querySelector("#contadorDeRonda")
    contadorDeRonda.innerHTML += "Ronda 1"

    prepararJuego()
  }
  //PASO 4.1) DECLARAR LA FUNCION iniciarListaPalabras, DENTRO TENDRA UN ARRAY CON TODAS LAS POSIBLES PALABRAS PARA EL JUEGO <-- SOLO ESO -->
  function iniciarListaPalabras() {
    listaPalabras = ["javascript", "html", "css", "apple", "android", "cellphone", "tablet", "rogramacion"]
  }



// PASO 4.2) CREAR LA FUNCION "prepararJuego" LA CUAL DEBE:

  // - INICIAR EN 1 LA VARIABLE CONTADOR

  // - DEFINIR UNA GLOBAL VARIABLE "palabraRandom" QUE GUARDE LA FUNCION "obtenerPalabraRandom"

  // - DEFINIR UNA VARIABLE GLOBAL "arrayPalabraRandom" QUE GUARDE LA VARIABLE "palabraRandom.split()" PARA PODER SEPARAR LAS LETRAS DE LA PALABRA SELECCIONADA

  // - DEFINIR LA VARIABLE GLOBAL "mostrarPalabra" QUE GUARDE UN ARRAY VACIO

  // - DEFINIR EL LARGO DE LA VARIABLE "mostrarPalabra", QUE SEA IGUAL AL LARGO DEL ARRAY "arrayPalabraRandom" (mostrarPalabra.length = arrayPalabraRandom.length)

  // - CON UN LOOP RECORRER LA VARIABLE "mostrarPalabra" Y POR CADA UNA DE LAS LETRAS GENERAR UN "_" (GUION BAJO) NOTA: ESTO DARA EL ESPACIO VISUAL DE LA CANTIDAD DE LETRAS

  // - POR ULTIMO... ACTIVAR LA FUNCION "recargarDisplay"
  function prepararJuego() {
    contador = 1
    palabraRandom = obtenerPalabraRandom()
    arrayPalabraRandom = palabraRandom.split("")
    mostrarPalabra = []
    mostrarPalabra.length = arrayPalabraRandom.length
    for (var i = 0; i < mostrarPalabra.length; i++) {
      mostrarPalabra[i] = "_"
    }
    recargarDisplay()
  }




//PASO 5.1) DECLARAR LA FUNCION "obtenerPalabraRandom" LA CUAL DEBE:
  // - DECLARAR UNA VARIABLE QUE GENERE UN NUMERO ENTERO RANDOM POR LA CANTIDAD DE PALABRAS QUE TENEMOS EN "listaPalabras"
  // - DECLARAR LA VARIABLE QUE GUARDE LA PALABRA QUE SE ENCUENTRA EN LA "POSICION" RANDOM DE NUESTA LISTA DE PALABRAS (ES DECIR "listaPalabras[numeroRandom]")
  // DEVOLVER LA VARIABLE DONDE SE GUARDO LA PALABRA GENERADA (RETURN PALABRA)
function obtenerPalabraRandom() {
  var numeroRandom = Math.floor(Math.random() * listaPalabras.length)
  var palabra = listaPalabras[numeroRandom]
  return palabra;
}

//PASO 5.2) DECLARAR LA FUNCION recargarDisplay() LA CUAL DEBE:
// CREAR UNA VARIABLE LOCAL DONDE GUARDAREMOS LAS LETRAS QUE SE HAYA ADIVINADO
// CON UN LOOP RECORRER TODAS LAS POSICIONES DE LA VARIABLE mostrarPalabra (ESTA VARIABLE GUARDA LO QUE QUEREMOS MOSTRAR, SEA LETRAS SI SE ADIVINO ALGUNO O GUIONES SI NO SE ADIVINO NADA AUN)
// AL RECORRER DEFINIR LA VARIABLE palabra CON LO QUE TENGA GUARDADO EN CADA POSICION DE mostrarPalabra
// IMPRIMIR EN EL HTML LA VARIABLE palabra
function recargarDisplay() {
  var palabra = ""
  for (var i = 0; i < mostrarPalabra.length; i++) {
    palabra += mostrarPalabra[i] + " "
  }
  document.querySelector("#palabra").innerHTML = palabra
}

//PASO 6) GENERAR UN EVENTO QUE ESCUCHE CUANDO SE HACE CLICK
// - GUARDAR EL TARGET DEL CLICK EN UNA VARIABLE

// - DECLARAR UNA VARIABLE QUE GUARDE EN UN ARRAY LA SELECCION DE TODOS LOS BOTONES DEL TECLADO EN PANTALLA

// - HACER UN LOOP QUE RECORRA LA COLECCION DE BOTONES Y POR CADA UNA REVISE SI ESE ELEMENTO ES IGUAL AL TARGET QUE GUARDAMOS EN LA VARIABLE

// CUANDO LLEGUE AL OBJETIVO CONVERTIR LA LETRA A MINUSCULA Y ACTIVAR LA FUNCION "chequeaLetra" ENVIANDO COMO PARAMETRO LA LETRA SELECCIONADA
teclado = document.querySelector("#tablero")
teclado.addEventListener("click", function (e) {
  var objetivo = e.target
  var botonLetra = document.querySelectorAll(".botonLetra")
  for (var i = 0; i < botonLetra.length; i++) {
    if (objetivo == botonLetra[i]  ) {
      console.log(objetivo.innerText.toLowerCase());
      var letraChequear = botonLetra[i].innerText.toLowerCase()
      chequeaLetra(letraChequear)
    }
  }
})

// PASO 7.1) DECLARAR LA FUNCION "chequeaLetra" LA CUAL DEBE:
  // - TENER COMO PARAMETRO LA "LETRA" A CHEQUEAR
  // - DEHSABILITAR LA LETRA ELEGIDA
  // - SUMAR LA LETRA USADA AL ARRAY DE LETRAS USADAS
  // - INCREMENTAR LA VARIABLE
  // - INVOCAR LA FUNCION "getInput" QUE LLEVE COMO PARAMETRO LA LETRA
function chequeaLetra(letter) {
  habilitarDeshabilitar(letter)
  arrayLetrasUsadas[ultimoIndex] = letter
  ultimoIndex++
  getInput(letter)
}

// PASO 8.1) DECLARAR LA FUNCION "getInput" LA CUAL DEBE:
  // - TENER COMO PARAMETRO EL "ACIERTO" O "LETRA"
  // - DECLARAR LA VARIALBE "match" CON EL VALOR "false"
  // - CON UN LOOP RECORRER LAS LETRAS DE LA PALABRA SELECCIONADA
  // - POR CADA LETRA CHEQUEAR "SI" EL ACIERTO ES IGUAL A ESTA LETRA
  // - SI ESO SE CUMPLE:
  // -- MODIFICAR LA VARIABLE GLOBAL "mostrarPalabra" PARA QUE EN LA POSICION QUE CORRESPONDA, ASIGNE LA LETRA INGRESADA
  // -- CAMBIAR LA VARIABLE "match" A TRUE
  function getInput(letter) {
    var match = false
    for (var i = 0; i < arrayPalabraRandom.length; i++) {
      if (letter == arrayPalabraRandom[i]) {
          mostrarPalabra[i] = letter
          match = true
      }
    }
// PASO 8.1) [CONTINUACION DE FUNCION "getInput"]
    if (match == false) {
      contador++
      contadorDeRonda.innerHTML = "Ronda " +  contador.toString()
      chequeaPerdio()
    }
    recargarDisplay()
    console.log(mostrarPalabra);
  palabra = mostrarPalabra.join("")
  console.log(palabra);
  if (palabraRandom == palabra) {
    console.log(true);
    ocultarMostrar("letras")
    palabra = palabra.toUpperCase()
    alert('"Tu palabra es: '+palabra+'" Ganaste en ' + contador + ' intentos')
    ocultarMostrar("botonJuegoNuevo")
    botonJuegoNuevo.onclick = function () {
      location.reload()
    }
  }
}

// PASO 9 - FUNCION chequeaPerdio() LA CUAL DEBE:
// CHEQUEAR SI EL CONTADOR DE ERRORES ES MAYOR O IGUAL A 6 INTENTOS
// SI ESTO SE CUMPLE DEBE: OCULTAR EL TECLADO, MOSTRAR EL BOTON DE REINICIAR
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

// FUNCIONES NO NECESARIAS PERO UTILES (EMPIEZA)
function ocultarMostrar(id) { //OCULTA CONTENIDO
  var x = document.querySelector("#"+id)
  x.hidden = !x.hidden
}

function habilitarDeshabilitar(id) { //DESHABILITA CONTENIDO
  var x = document.querySelector("#"+id)
  x.disabled = !x.disabled
}
// FUNCIONES NO NECESARIAS PERO UTILES (TERMINA)


//Termina onload
}
