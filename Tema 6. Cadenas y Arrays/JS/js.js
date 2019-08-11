/* 
Modulo: Programacion Avanzada
Tópico: Introduccion a JavaScript
Laboratorio Nacional de Informatica Avanzada
MRySI. Francisco Javier Bueno Vasquez
Correo. fbueno.mrysi18@lania.edu.mx
*/

//Tema. Arrays

var areasBBVA = ["Finanzas", "Ingenieria", "Capacitacion"];

console.log(areasBBVA[1]);
console.log(areasBBVA.length);	
console.log(typeof areasBBVA);

//Tema. Cadenas

var nombre = prompt("Introduce tu primer nombre");

function largodelnombre(nombre) {
  return "El nombre de  " +  nombre +  " contiene " + nombre.length + " caracteres";
}

function vocales(nombre) {
  var numeroVocales = 0;
  var nombremin = nombre.toLowerCase();
  for (var i=0; i < nombremin.length; i++) {
    if (nombremin[i] === "a" || nombremin[i] === "e"
      || nombremin[i] === "i" || nombremin[i] === "o"
      || nombremin[i] === "u") {
      numeroVocales += 1;
    }
  }
  return "El nombre de " + nombre + " contiene " + numeroVocales + " vocales";
}

console.log(largodelnombre(nombre));
console.log(vocales(nombre));