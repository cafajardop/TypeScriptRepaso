(() => {
    console.log('Inicio');
    //Debo ir al tsconfig.json y subir el ecmascript de 5 a 6
    const promesa1 = new Promise( (resolve, reject) => {

        setTimeout(() => {
            resolve('Se terminó el timeout')
        }, 1000);

    });

    promesa1.then(mensaje => console.log(mensaje))
    
    console.log('Fin');

})();