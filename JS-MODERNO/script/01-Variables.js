// EcmaScript 2021 / ES12 / ES.NEXT

// Variables: var, let, const
// Contenedor de informacion, caja para guardar un dato

// VAR: ambito global o funcional
var nombre = "Manuel Michael Retamozo García";

function mostrarNombre(){
    nombre = "Pepito"; // si no declaras con VAR se vuelve absolutamente global
    var apellidos = "Robles"
    console.log("Dentro: " + nombre);
    console.log("Dentro: " + apellidos);
}
mostrarNombre();
console.log("Fuera: " + nombre);
console.log("Fuera: " + apellidos);

// LET: ambito de bloque
