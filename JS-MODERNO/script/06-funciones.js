// Parametros por defecto

function saludo(persona){
    console.log("Hola, te mando un saludo "+persona); 
}
saludo(); // saldra undefined la variable ^ persona al no estar definida.


// Funciones Flecha
    // Expresion funcional
let saludo2 = function(nombre){
    return "Hola, te mando un saludo "+nombre;
}
console.log(saludo2("Manuel"));

    //funciones flecha
        // un parametro
let saludo3 = nombre => "Hola, te mando un saludo "+nombre;
console.log(saludo3("Manuel"));

        //varios parametros
let saludo4 = (nombre, pais) => "Hola, te mando un saludo "+nombre+" de "+pais;
console.log(saludo4("Manuel", "España"));

        //varios parametros + logica
let saludo5 = (nombre, pais) => { //pones corchetes
    let continente = "Europa";
    if(pais === "España"){
        continente += " Oeste";
    }else{
        continente = "otro que no sea europa.";
    }
    return "Hola, te mando un saludo "+nombre+" de "+pais+" y el continente es "+continente;
} // cerramos corchetes
console.log(saludo5("Manuel", "España"));

// JSON

let tienda = {
    nombre: "GAME",
    videojuegos: ["GTA", "WOW", "GOW"],
    mostrar1: function(){
        console.log(this.nombre);
    },
    mostrar2(){
        this.videojuegos.forEach(juego =>{
            if(juego === "GTA"){ //tampoco se puede usar this.
                console.log("De los mejores juegos");
            }
            console.log(juego);
        });
    },
    mostrar3: () => {
        console.log(tienda.nombre);
    }
};

tienda.mostrar2();