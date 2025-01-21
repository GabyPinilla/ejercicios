let listaAmigosAgregados = [];
// Agregando nombres a la lista de amigo
function agregarAmigo(){
    // Accediendo al id amigo y guardando su valor en nombreAmigo
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value;

    if (nombreAmigo === "") {
        // Pop up si se agrega un nombre vacio
        alert("Por favor, ingrese un nombre válido")
    } else {
        // Se guarda el nombre en listaAmigosAgregados
       listaAmigosAgregados.push(nombreAmigo);
       // Accediendo a la lista listaAmigos
       let listaAmigos = document.getElementById("listaAmigos");
       // Creando una lista tipo li
       let nuevoElemento = document.createElement("li");
       nuevoElemento.textContent = nombreAmigo;
       // Agrega un nodo al final de otro al html
       listaAmigos.appendChild(nuevoElemento);
       inputAmigo.value = "";
    }
}

function sortearAmigo(){
    // Sorteando los nombres
    let numeroSorteado = Math.floor(Math.random() * listaAmigosAgregados.length);
    let amigoSorteado = listaAmigosAgregados[numeroSorteado];
    // Mostrando los nombres en html
    const resultado = document.getElementById("resultado");
    resultado.textContent = `El amigo secreto es: ${amigoSorteado}`;
}



innerHTML