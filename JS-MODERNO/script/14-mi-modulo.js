export function imprimirArray(datos){
    datos.forEach(element => {
        console.log(element);
    });
    return datos;
}

// export default imprimirArray;

/*
export default function(datos){
    datos.forEach(element => {
        console.log(element);
    });
    return datos;
}
*/

export function saludo(nombre){
    console.log("Hola "+nombre);
    return nombre;
}

/*
export default {
    imprimirArray,
    saludo
}
*/