"use strict";
(() => {
    //Extraer 
    const avenger = {
        nombre: 'Steve',
        clave: 'Capitán America',
        poder: 'Droga'
    };
    // lo extraemos de esta manera {} y hacemos la destructuracion
    const { nombre, clave, poder } = avenger;
    console.log(`Su nombre es: ${nombre} su apodo es ${clave} y mete ${poder}`);
    //podemos crear una funcion extraer 
    const extraer = ({ nombre, poder }) => {
        console.log(nombre);
        console.log(poder);
    };
    //Solo extraemos lo que queremos
    extraer(avenger);
    const avengers = ['Thor', 'Ironman', 'Spiderman'];
    const [thor, ironman, spiderman] = avengers;
    console.log(thor);
    console.log(ironman);
    console.log(spiderman);
    //Funcionextraer con arreglos
    const extraerArr = ([thor, ironman, spiderman]) => {
        console.log(thor, ironman, spiderman);
    };
    extraerArr(avengers);
})();
