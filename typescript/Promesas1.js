"use strict";
(() => {
    const retirarDinero = (montoRetirar) => {
        let dineroActual = 10000;
        return new Promise((resolve, reject) => {
            if (montoRetirar > dineroActual) {
                reject('No hay suficientes recursos');
            }
            else {
                dineroActual -= montoRetirar;
                resolve(dineroActual);
            }
        });
    };
    retirarDinero(80000)
        .then(montoActual => console.log(`Me queda ${montoActual}`))
        .catch(err => console.warn(err));
})();
