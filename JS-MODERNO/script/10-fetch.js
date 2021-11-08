// Peticion AJAX moderna
window.addEventListener("DOMContentLoaded", event => {
    let contenedor = document.querySelector("#contenedor");
    contenedor.innerHTML = "Cargando...";

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(items => {
            console.log(items);
            contenedor.innerHTML = "";
            mostrar(contenedor, items);
        })
        .catch(error => {
            console.log("La peticion AYAX a fallado");
        })
        ;

    // DOM

    function mostrar(contenedor, elementos) {

        elementos.forEach(elemento => {
            let muestrame = `
            <article>
                <h2>${elemento.title}</h2>
                <p>${elemento.body}</p>
            </article>
            <hr/>
        `;
            contenedor.innerHTML += muestrame;
        });
        return elementos;
    }
})
