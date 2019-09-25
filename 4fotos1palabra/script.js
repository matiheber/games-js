window.onload = function () {
  var contenedorFotos = document.querySelector(".photo-container")
  var contenedorPalabra = document.querySelector(".palabra")
  var contenedorLetras = document.querySelector(".letras")
  var contenedorPista = document.querySelector(".hint")
  var palabraRandom
  var fotosAdivinanza
  var hint
  var mostrarHint
  var botonLetra
  var ultimoIndex = 0
  var ultimaLetraelegida
  var numRandom

  var adivinanza = [
    {
      palabra: "auto",
      fotos: ["img/auto.jpg", "img/auto1.jpg", "img/auto2.jpg", "img/auto3.jpg"],
      hint: "Tiene cuatro ruedas"
    },
    {
      palabra: "moto",
      fotos: ["img/moto.jpg", "img/moto1.jpg", "img/moto2.jpg", "img/moto3.jpg"],
      hint: "Tiene dos ruedas"
    }
  ];



  generarAdivinanza()

  function generarAdivinanza() {
    numRandom = Math.floor(Math.random()*adivinanza.length)

    palabraRandom = adivinanza[numRandom].palabra
    fotosAdivinanza = adivinanza[numRandom].fotos
    hint = adivinanza[numRandom].hint

    // Coloco las fotos de la palabra a adivinar
    for (var i = 0; i < fotosAdivinanza.length; i++) {
      contenedorFotos.innerHTML += '<img src="'+fotosAdivinanza[i]+'" alt="">'
    }
    // genero los espacios de la palabra
    // palabra=["a","r",slfaklfsd]
    for (var i = 0; i < palabraRandom.length; i++) {
      if (i != palabraRandom.length -1) {

        contenedorPalabra.innerHTML += "_ "
      }else {
        contenedorPalabra.innerHTML += "_"
      }
      // contenedorPalabra.innerHTML += '<div class="bloque"> </div>'
    }
    palabraRandom = palabraRandom.split("")

    palabraRandom.sort(function() {
       return 0.5 - Math.random()
     });
    // ARMO BOTONES DE LAS LETRAS DESORDENADAS
     for (var i = 0; i < palabraRandom.length; i++) {
       contenedorLetras.innerHTML += '<div class="letra-boton" >'+palabraRandom[i]+'</div>'
       // contenedorLetras.innerHTML += '<div class=""><a href="#" class="letra-boton" >'+palabraRandom[i]+' </a></div>'
     }

     contenedorPista.innerHTML= '<p>HINT: '+hint+'</p>'

   }


// COMPLETAR PALABRA Y CHEQUEAR QUE ESTE BIEN
  contenedorPalabra=contenedorPalabra.innerHTML.split(" ")
   botonLetra = document.getElementsByClassName('letra-boton')
   for (var i = 0; i < botonLetra.length; i++) {
     botonLetra[i].addEventListener("click", function(e) {
       e.preventDefault()
       ultimaLetraelegida = e.target
       ultimaLetraelegida.classList.toggle("ocultar")
       contenedorPalabra[ultimoIndex] = ultimaLetraelegida.innerText
       document.querySelector(".palabra").innerText = contenedorPalabra.join(" ")
       ultimoIndex++
       console.log(palabraRandom.length);
       console.log(ultimoIndex);

       if (palabraRandom.length == ultimoIndex) {
       chequearPalabraCompleta()
       return
     }
    })
   }


   function chequearPalabraCompleta() {
       console.log("Palabra completa");
       var palabraCorrecta = adivinanza[numRandom].palabra.toUpperCase()
       var palabraGenerada = contenedorPalabra.join("")
       console.log(palabraCorrecta);
       console.log(palabraGenerada);

       if (palabraCorrecta == palabraGenerada.toUpperCase()) {
         alert("Ganaste!");
        }else {
          console.log("Palabra incorrecta");

          // for (var i = 0; i < array.length; i++) {
          //   array[i]
          // }
     }
   }




   // MOSTRAR PISTA //
   mostrarHint = document.querySelector(".hint-button")
   mostrarHint.onclick = function (e) {
     e.preventDefault()
     ocultarMostrar("hint")
   }
   // MOSTRAR PISTA //


   function ocultarMostrar(id) {
     var x = document.querySelector("#" + id)
     x.hidden = !x.hidden;
   }


}
