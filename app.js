// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para guardar los nombres

let amigos = [];
// Función para validar nombres propios
//function NombrePropio(nombre) {
    // Acepta letras con acentos y espacios (para nombres compuestos)
    //const regex = /^[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+(?:\s[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+)*$/;
    //return regex.test(nombre);
//   }
// Función para agregar amigos a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, escribe un nombre válido.");
        return;
   // if (esNombrePropio(nombre)) {
       // alert("Solo se permiten nombres propios (ejemplo: Juan, María, Ana Sofía).");
        //return;
       // }
    }
    
    amigos.push(nombre);
    mostrarLista();
    input.value = "";
}

// Mostrar lista en pantalla (sin botón de eliminar)

function mostrarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Sortear un amigo al azar
function sortearAmigo() {
    if (amigos.length < 3) {
        alert("Debe haber al menos 3 nombres para hacer el sorteo.");
        return;
    }
    
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 Tu amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}

