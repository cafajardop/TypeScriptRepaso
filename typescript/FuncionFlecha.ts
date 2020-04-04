( () => {

    //Funcion tradicional
    function function2(a: string) {
        return a;
    }

    //Funcion a variable que se puede sobreescribir
    let miFuncion = function (a: string) {
        return a;
    }
    //Funcion variable que no se puede sobreescribir
    const miFuncionConst = function (a: String) {
        return a;
    }
    //Ahora vamos a hacer funcion de flecha => 
    const miFuncionFlecha = (a: string) => {
        return a.toUpperCase();
    }
    //Reducir aun mas la funcion de flecha =>
    const miFuncionConstReducida = (a: string) => a.toUpperCase();

    console.log(miFuncionFlecha('normal'));

    console.log(miFuncionConstReducida('Flecha'));

    //ejemplo con dos parametros funcion normal Sumar numeros
    const sumarN = function (a: number, b: number) {
        return a * b;

    }
    //ejemplo con dos parametros funcion normal Sumar numeros
    const sumarNFlecha = (a: number, b: number) => a * b;

    console.log(sumarN(1, 5));
    console.log(sumarNFlecha(5, 400));


    const hulk = {
        nombre: 'Bruce',
        smash() {
            setTimeout(() => {
                console.log(`${this.nombre} smash!!!! `);
            }, 1000);
        }
    }

    hulk.smash();

})();