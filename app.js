"use strict";
(function () {
    function saludar(nombre) {
        console.table('Hola,' + nombre); // Hola Logan
    }
    const wolverine = {
        nombre: 'carlos'
    };
    saludar(wolverine.nombre);
    //Donde utilice un var puedo utilizar un let mejor
    let mensaje = 'Hola';
    mensaje = '123';
    if (true) {
        let mensaje = 'mundo';
    }
    let mensaje2 = 'Hola';
    let numero = 123;
    let boolenano = true;
    let hoy = new Date();
    //Puedo especificarle mediante el pipe los tipos de datos que deseo
    let cualquiercosa;
    cualquiercosa = mensaje;
    cualquiercosa = numero;
    cualquiercosa = boolenano;
    cualquiercosa = hoy;
    let spiderman = {
        nombre: 'Peter',
        edad: 30,
        poder: 'Trepar paredes'
    };
    spiderman = {
        nombre: 'Carlos',
        edad: 40,
        poder: 'SuperDesarrollador FullStack'
    };
    console.log(mensaje);
})();
