(function () {

    const nombre = 'Carlos Fajardo';
    const edad = 23;

    const PERSONAJE = { nombre, edad }

    //Cree una interfaz que sirva para validar el siguiente objeto
    interface Batman {
        nombre: string;
        artesMarciales: string[];
    }

    const batman: Batman = {
        nombre: 'Bruno Diaz',
        artesMarciales: ['Karate', 'Aikido', 'Wing Chun', 'Jiu-Jitsu']
    }

    //Convertir esta funcion a funcion de felcha
    const resultadoDoble = (a: number, b: number): number => {
        return (a + b) * 2
    }

    function getAvenger(nombre: string, poder?: string, arma: string = 'arco') {
        let mensaje;
        if (poder) {
            mensaje = nombre + ' tiene el poder de: ' + poder + ' y un arma ' + arma;
        } else {
            mensaje = nombre + ' tiene un  ' + poder
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

        constructor(public base: number,
            public altura: number) { }

        calcularArea = (): number => this.base * this.altura

    }
})();