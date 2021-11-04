document.addEventListener('DOMContentLoaded', function () {
    // String Clasicos
    // let nombre = "Manuel";
    // let apellidos = "Retamozo";
    // let profesion = "Desarrollador web"
    // let nya = nombre + " " + apellidos + "\n" + profesion;

    // Template Strings
    // let plantilla = `${nombre} ${apellidos}
    // ${profesion}
    // `;

    // console.log(nya);
    // console.log(plantilla);

    function ficha(nombre, apellidos, profesion) {
        let fichaTecnica = `
        <div class="ficha">
            <h2>${nombre} ${apellidos}</h2>
            <h3>${profesion}</h3>
        </div>
        `;
        return fichaTecnica;
    }

    let cajaFicha = document.createElement("section");

    cajaFicha.innerHTML = ficha("Manuel", "Retamozo", "Desarrollador web");
    cajaFicha.innerHTML += ficha("Kelvin", "Guerrero", "RRHH");
    cajaFicha.innerHTML += ficha("Adrian", "Garzón", "Repartidor de Pizzas");

    document.querySelector("#contenedor").appendChild(cajaFicha);
}, false);