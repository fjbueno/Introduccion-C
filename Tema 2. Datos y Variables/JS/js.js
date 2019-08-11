/* 
Modulo: Programacion Avanzada
Tópico: Introduccion a JavaScript
Laboratorio Nacional de Informatica Avanzada
MRySI. Francisco Javier Bueno Vasquez
Correo. fbueno.mrysi18@lania.edu.mx
*/

//Tema. Variables

var a;
console.log("Variable Undefined: " + typeof a);				// Variable "undefined"

b = "BBVA";
console.log("Variable String: " + typeof b);				// Variable "string"

c = 42;
console.log("Variable Number: " + typeof c);				// Variable "number"

d = true;
console.log("Variable Boolean: " + typeof d);				// Variable "boolean"

e = null;
console.log("Variable Object: " + typeof e);				// Variable "object"

f = undefined;
console.log("Variable Undefined: " + typeof f);				// Variable "undefined"

g = { banco: "BBVA" };
console.log("Variable Object: " + typeof g);				// Variable "object"

//Tema. Objetos

let obj = {
	banco :  "BBVA" ,
	sucursales :  42 ,
	division :  "Metro 1"
};

console.log(obj.banco);		// BBVA
console.log(obj.sucursales); //42 
console.log(obj.division);	   // Metro 1

console.log(obj [ "banco" ]);	// BBVA 
console.log(obj [ "sucursales" ]);	// 42 
console.log(obj [ "division" ]);	// Metro 1

//Tema. Arrays

var informacionBBVA = [ "BBVA", 42, "Metro 1"];

console.log(informacionBBVA[0]);			// BBVA
console.log(informacionBBVA[1]);			// 42
console.log(informacionBBVA[2]);			// Metro 1
console.log(informacionBBVA.length);		// 3

console.log(typeof informacionBBVA);		// Object

//Ejemplos 

//1. Programa de Transformacion de Grados Celsius a Grados Fahrenheit

var celsius = Number(prompt("Introduce una temperatura en Grados Celsius"));

var fahrenheit = celsius * 9/5 + 32;

console.log( celsius + " °C = " + fahrenheit + " °F");

//2. Programa de Recopilacion de Informacion del Usuario

var nombre = prompt("Introduce tu nombre");
var apellido = prompt("Introduce tu apellido");

console.log("Bienvenido: " + nombre + " " + apellido);