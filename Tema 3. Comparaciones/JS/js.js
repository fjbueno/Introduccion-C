/* 
Modulo: Programacion Avanzada
Tópico: Introduccion a JavaScript
Laboratorio Nacional de Informatica Avanzada
MRySI. Francisco Javier Bueno Vasquez
Correo. fbueno.mrysi18@lania.edu.mx
*/

//Tema. Condicional if

var numero1 = Number(prompt("Introduce el primer número:"));
var numero2 = Number(prompt("Introduce el segundo número:"));

if (numero1 < numero2) {
    console.log(numero1 + " es más pequeño que " + numero2);
} else if (numero1 > numero2) {
    console.log(numero1 + " es más grande que " + numero2);
} else {
    console.log(numero1 + " y " + numero2 + " son iguales");
}

//Tema. Condicional switch

var mes = Number(prompt("Introduce el número del mes:"));

if ((mes >= 1) && (mes <= 12)) {
  var numeroDias = 31;
  switch (mes) {
    case 4:
    case 6:
    case 9:
    case 11:
        numeroDias = 30;
        break;
    case 2:
        numeroDias = 28;
        break;
    }
    console.log("Este mes tiene " + numeroDias + " días.");
} else {
    console.log("No has elegido un mes del 1 al 12");
}

//Tema. Condicional for

for (var i=1; i<=10; i++) {
	console.log(9 + " x " +  + i + " = " + i * 9);
  }

//Tema. Condicional while

var numero = 0;

while (numero < 1 || numero > 10) {
  numero = Number(prompt("Elige una tabla de multiplicar entre 1 y 10"));
}

var i = 1;  
while (i <= 10) {
  console.log(numero + " * " + i + " = " + numero * i);
  i++;
}