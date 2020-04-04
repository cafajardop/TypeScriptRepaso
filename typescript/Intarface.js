"use strict";
(() => {
    const enviarMision = (xmen) => {
        console.log(`Enviando a ${xmen.nombre} a la misión y su poder es ${xmen.poder}`);
    };
    const wolverine = {
        nombre: 'Logan',
        edad: 60,
        poder: 'Peliar'
    };
    enviarMision(wolverine);
})();
