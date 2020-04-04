"use strict";
(() => {
    //Esta de la manera larga
    class Avenger {
        constructor(nombre, equipo, nombreReal, puedePelear, peleasGanadas) {
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
        constructor(nombre, equipo, nombreReal, puedePelear, peleasGanadas) {
            this.nombre = nombre;
            this.equipo = equipo;
            this.nombreReal = nombreReal;
            this.puedePelear = puedePelear;
            this.peleasGanadas = peleasGanadas;
        }
    }
    const antman2 = new Avenger2('Charlie', 'Macanda', 'Fortaleza', true, 10);
    console.log(antman2);
})();
