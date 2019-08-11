/* 
Modulo: Programacion Avanzada
Tópico: Introduccion a JavaScript
Laboratorio Nacional de Informatica Avanzada
MRySI. Francisco Javier Bueno Vasquez
Correo. fbueno.mrysi18@lania.edu.mx
*/

//Tema. Objetos

var salesforce = {
	numeroempleados: 40,
	numerodeproyectos: 10,
  statusproyecto: true
};

console.log(salesforce.numeroempleados);
console.log(salesforce.numerodeproyectos);
console.log(salesforce["statusproyecto"]);

//Ej. 1 Cuenta

var cuenta = {
  titular: "Javier",
  saldo: 0,

  depositar: function(cantidad) {
    console.log("Has depositado " + cantidad + " pesos");
    return this.saldo += cantidad;
  },

  retirar: function(cantidad) {
    console.log("Has retirado " + cantidad + " pesos");
    return this.saldo -= cantidad;
  },

  informar: function() {
    return "Nombre del titular: " + this.titular + "\nEl saldo actual de la cuenta es: " + this.saldo + " pesos";
  }

}

console.log(cuenta.titular);
console.log(cuenta.saldo);
console.log(cuenta.depositar(8000));
console.log(cuenta.retirar(2000));
console.log(cuenta.informar());

//Ej 2. Comedor

var empleado = {
  init: function (nombre, empresa, status) {
    this.nombre = nombre;
    this.empresa = empresa;
    this.status = status;
  },

  cobrar: function() {
    var costo = 0;
    if (this.status == 'Interno') {
        costo =  15;
    } else if (this.status == 'Externo') {
        costo = 65;
    }
    return costo;
  }

}

var interno = Object.create(empleado);
interno.init("Ignacio", "BBVA", 'Interno');
console.log(interno.nombre + " es de la empresa " + interno.empresa + " y su condicion es " + interno.status);
console.log("Su total en el comedor es: " + interno.cobrar() + " pesos");

var externo = Object.create(empleado);
externo.init("Javier", "Indra", 'Externo');
console.log(externo.nombre + " es de la empresa " + externo.empresa + " y su condicion es " + externo.status);
console.log("Su total en el comedor es: " + externo.cobrar() + " pesos");