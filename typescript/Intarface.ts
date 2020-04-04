(() => {

    interface Xmen {
        nombre: string;
        edad: number;
        poder?: string;
    }

    const enviarMision = (xmen: Xmen) => {
        console.log(`Enviando a ${xmen.nombre} a la misión y su poder es ${xmen.poder}`)
    }

    const wolverine: Xmen = {
        nombre: 'Logan',
        edad: 60,
        poder: 'Peliar'
    }

    enviarMision(wolverine);


})();