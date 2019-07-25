var maps = ["images/fortniteMap.jpg", "images/treasureMap1.png", "images/treasureMap2.jpg"]

window.addEventListener("load", function() {
  // Genera un numero random para elegir el mapa
  var random = Math.floor(Math.random()*3)
  document.querySelector("img").setAttribute("src", maps[random])
})
// Genera un numero random entre 0 y el tamaño maximo de la imagen
var getRandomNumber = function (size) {
return Math.floor(Math.random() * size);
};
// Calcula la distancia entre el click y el objetivo
function getDistance(event, target) {
var diffX = event.offsetX - target.x;
var diffY = event.offsetY - target.y;
return Math.sqrt((diffX * diffX) + (diffY * diffY));
//Retorna la raiz cuadrada
};
// Representamos la distancia del click con un "hint"
function getDistanceHint(distance) {
if (distance < 50) {
return "Boiling hot!";
} else if (distance < 70) {
return "Really hot";
} else if (distance < 90) {
return "Hot";
} else if (distance < 120) {
return "Warm";
} else if (distance < 200) {
return "Cold";
} else if (distance < 440) {
return "Really cold";
} else {
return "Freezing!";
}
};
// Seteamos el rango donde se va a generar la locacion del tesoro
var width = 700;
var height = 700;
var clicks = 0;
//Crea la locacion random del objetivo
var target = {
x: getRandomNumber(width),
y: getRandomNumber(height)
};
// Agregamos un evento para manejar los clicks
document.querySelector("#map").addEventListener("click",function () {
clicks++;
// Sacamos la distancia entre el click y el objetivo
var distance = getDistance(event, target);
// Convertimos la distancia en un "hint"
var distanceHint = getDistanceHint(distance);
// Mostramos el nuevo "hint"
document.querySelector("#distance").innerHTML = distanceHint
// Si el click es muy cercano avisarle que ganó
if (distance < 20) {
alert("Found the treasure in " + clicks + " clicks!");
}
});
