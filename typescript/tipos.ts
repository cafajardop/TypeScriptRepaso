(function () {

    function getEdad() {
        return 20 + 20 + 20;
    }

    //Template literals
    const nombre = 'Carlos';
    const apellido = 'Fajardo';
    const edad = 36;

    //Si quiero concatenar
    const salida =
        `Su nombre es ${nombre}
        y su apellido ${apellido} 
        tiene una edad de (${edad - 10} + y quisiera vivir ${getEdad()} años)`;

    console.log(salida);

})();