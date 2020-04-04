"use strict";
(() => {
    //Funcion tradicional
    function function2(a) {
        return a;
    }
    //Funcion a variable que se puede sobreescribir
    let miFuncion = function (a) {
        return a;
    };
    //Funcion variable que no se puede sobreescribir
    const miFuncionConst = function (a) {
        return a;
    };
    //Ahora vamos a hacer funcion de flecha => 
    const miFuncionFlecha = (a) => {
        return a.toUpperCase();
    };
    //Reducir aun mas la funcion de flecha =>
    const miFuncionConstReducida = (a) => a.toUpperCase();
    console.log(miFuncionFlecha('normal'));
    console.log(miFuncionConstReducida('Flecha'));
    //ejemplo con dos parametros funcion normal Sumar numeros
    const sumarN = function (a, b) {
        return a * b;
    };
    //ejemplo con dos parametros funcion normal Sumar numeros
    const sumarNFlecha = (a, b) => a * b;
    console.log(sumarN(1, 5));
    console.log(sumarNFlecha(5, 400));
    const hulk = {
        nombre: 'Bruce',
        smash() {
            setTimeout(() => {
                console.log(`${this.nombre} smash!!!! `);
            }, 1000);
        }
    };
    hulk.smash();
})();
