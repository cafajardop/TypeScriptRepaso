(function () {

    const sumar = (a: number, b: number): number => a + b;

    const nombre = (): string => 'Hola Calichito El putas';

    const obtenerSalario = (): Promise<string> => {

        return new Promise((resolve, reject) => {
            resolve('Carlos Fajardo')

        });

    }

    obtenerSalario().then(a => console.log(a))

})();