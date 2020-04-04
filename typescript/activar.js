"use strict";
(function () {
    //Quiere decir que puede venir opcioanl ? 
    function activar(quien, // => valor obligatorio
    momento, // => valor opcional
    objeto = 'batiseñal' // => Valor por defecto
    ) {
        if (momento) {
            console.log(`${quien} activo la ${objeto} en la ${momento}`);
        }
        else {
            console.log(`${quien} activo la ${objeto}`);
        }
    }
    //Tener en cuenta para futuros desarrollos siempre va primero los parametros obligatorios luego los opcionales y por ultimo el valor por defecto
    activar('Gordon', 'en la tarde');
})();
