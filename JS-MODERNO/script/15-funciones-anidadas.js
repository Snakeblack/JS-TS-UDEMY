let nombre = "Manuel";

function mostrarNombre(){
    let apellidos = "Retamozo";

    function mostrarApellido(){
        let profesion = "Desarrollador Web";

        function mostrarProfesion(){
            return nombre + " " + apellidos + " " + profesion;
        }
        return mostrarProfesion;
    }
    return mostrarApellido;
}
console.log(mostrarNombre()()());