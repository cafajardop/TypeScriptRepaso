"use strict";
(function () {
    const sumar = (a, b) => a + b;
    const nombre = () => 'Hola Calichito El putas';
    const obtenerSalario = () => {
        return new Promise((resolve, reject) => {
            resolve('Carlos Fajardo');
        });
    };
    obtenerSalario().then(a => console.log(a));
})();
