// String
let nombre = "Manuel Retamozo";

// Number
let numero = 14;
let decimal = 3.2;

// Boolean / booleano
let mayor_edad = true;
let menor_edad = Boolean(0); // 1 es true, 0 es false.

// Array
let paises = ['España', 'Mexico', 'Colombia', 'Argentina'];

// Undefined

let no_definido = undefined;

// Null
let vacio = null;

/*
console.log(typeof nombre,
            typeof numero,
            typeof decimal,
            typeof mayor_edad,
            typeof menor_edad,
            typeof paises,
            typeof paises[1],
            typeof vacio,
            typeof no_definido
);
*/

// JSON - JavaScript Object Notation - Objetos Literales

let pelicula = {
    titulo: "Space Jam",
    genero: "Animacion",
    anio: 1996,
    director: "Tarantino",
    mostrar: function(){
        return `
            **** LA PELICULA DE LA SEMANA ****
            Titulo: ${this.titulo}
            Genero: ${this.genero}
            Año: ${this.anio}
            Director: ${this.director}
        `;
    }
};

pelicula
console.log(pelicula);

// Symbol