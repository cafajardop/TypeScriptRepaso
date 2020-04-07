"use strict";
(function () {
    const nombre = 'Carlos Fajardo';
    const edad = 23;
    const PERSONAJE = { nombre, edad };
    const batman = {
        nombre: 'Bruno Diaz',
        artesMarciales: ['Karate', 'Aikido', 'Wing Chun', 'Jiu-Jitsu']
    };
    //Convertir esta funcion a funcion de felcha
    const resultadoDoble = (a, b) => {
        return (a + b) * 2;
    };
    function getAvenger(nombre, poder, arma = 'arco') {
        let mensaje;
        if (poder) {
            mensaje = nombre + ' tiene el poder de: ' + poder + ' y un arma ' + arma;
        }
        else {
            mensaje = nombre + ' tiene un  ' + poder;
        }
    }
    //Crear una clase que permita manejar la siguiente estructura
    //La clase se debe llamar rectangulo,
    //Debe tener dos propiedades:
    // * base
    // * altura
    // También un método que calcule el área = base * altura
    // ese método debe de retornar un numero.
    class Rectangulo {
        constructor(base, altura) {
            this.base = base;
            this.altura = altura;
            this.calcularArea = () => this.base * this.altura;
        }
    }
})();
