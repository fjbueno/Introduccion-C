/* 
Modulo: Programacion Avanzada
Tópico: Introduccion a JavaScript
Laboratorio Nacional de Informatica Avanzada
MRySI. Francisco Javier Bueno Vasquez
Correo. fbueno.mrysi18@lania.edu.mx
*/

//Tema. Funciones

function primerFuncion() {
	return 21;
}

primerFuncion.banco = "BBVA";

console.log(typeof primerFuncion);			
console.log(typeof primerFuncion());
console.log(typeof primerFuncion.banco);

//Ej1. Dar Bienvenida

var nombre = prompt("Introduce tu nombre: ");
var apellido = prompt("Introduce tu apellido: ");

function darBienvenida(nombre, apellido) {
  var mensaje = "Bienvenido a BBVA, " + nombre + " " + apellido;
  return mensaje;
}

console.log(darBienvenida(nombre, apellido));

//Ej2. Perimetro y Radio de un Circulo

var radio = Number(prompt("Introduce el radio del círculo: "));

function perimetro(radio) {
    return 2 * radio * Math.PI;
}

function area(radio) {
    return Math.pow(radio, 2) * Math.PI;
}

console.log("El valor del perímetro es: " + perimetro(radio));
console.log("El valor del área es: " + area(radio));