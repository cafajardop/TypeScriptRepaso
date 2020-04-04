(() => {
    //Esta de la manera larga
    class Avenger {
        nombre: string;
        equipo: string;
        nombreReal: string;
        puedePelear: boolean;
        peleasGanadas: number;

        constructor(nombre: string, equipo: string, nombreReal: string, puedePelear: boolean, peleasGanadas: number) {
            this.nombre = nombre;
            this.equipo = equipo;
            this.nombreReal = nombreReal;
            this.puedePelear = puedePelear;
            this.peleasGanadas = peleasGanadas;
        }
    }

    const antman = new Avenger('Charlies', 'Macandas', 'Fortaleza', true, 10);

    console.log(antman);

    //Manera corta
    class Avenger2 {
        constructor(
            public nombre: string,
            public equipo: string,
            public nombreReal: string,
            public puedePelear: boolean,
            public peleasGanadas: number) {}
        }

    const antman2 = new Avenger2('Charlie', 'Macanda', 'Fortaleza', true, 10);

    console.log(antman2);
    


    }) ();
