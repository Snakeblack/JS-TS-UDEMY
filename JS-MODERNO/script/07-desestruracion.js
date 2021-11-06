/*
let frutas = ["manzana", "pera", "naranja", "sandia"];

// Clasico
// let manzana = frutas[0];
// let pera = frutas[1];

//Desestruturar array

let [manzana, pera, sandia] = frutas;

// Desestructurar objetos

let persona = {
    nombre: "Manuel",
    edad: 25,
    altura: 174,
    pais: "España"
};

let {nombre, edad, altura, pais} = persona;
*/
// Desestruturar string

let usuario = "Manuel Retamozo Garcia 55002229Y 08/01/1996 Madrid"
let [nombre, apellido1, apellido2, dni, fecha, ciudad] = usuario.split(" ");

// Crear varias variables
let lenguaje = "JS",
    framework = "Angular",
    editor = "VSC"

// Utilidad parametros funciones 
function mostrarUsuario({nombre, apellido = "Desconocido",ciudad = "Madrid"}){
    console.log(nombre, apellido, ciudad);
}

mostrarUsuario({nombre: "Manuel", ciudad: "Barcelona"});