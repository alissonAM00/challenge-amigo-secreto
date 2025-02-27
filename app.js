//creacion del codigo para sortear amigos
// declarar la variable amigos 
let amigos = [];
const limiteAmigos = 10;// usamos const para que no se modifique 

// creamos la funcion para agregar amigos 
function agregarAmigo() {
    // creamos una variable para agregar el amigo y trim para limpiar los espacios en blanco
    let nombreAmigo = document.getElementById("amigo").value.trim();
    //aqui verificamos que el campo no este vacio ni se repita  un nombre 
    if (nombreAmigo === "") {
        //verificamos si  el campo esta vacio  y se entrega un alert
        alert("Debes ingresar un nombre");
        return;
    }
    //aqui se validara  si el nombre ya esta en la lista , usaremos includes para saber si ya esta el nombre, si esta se dara el alert 
    if (amigos.includes(nombreAmigo)) {
        alert(" Tú amigo ya esta en la lista, agrega otro para el sorteo");
        return;
    }

    // agregamos un limite de amigos  con su alert 

    if (amigos.length >= limiteAmigos) {
        alert(`solo puedes agregar${limiteAmigos} amigos.`); // Mensaje si se alcanza el límite
        return;
    }
    // agregar el  nombre a la  lista y limpiar el campo de entrada
    amigos.push(nombreAmigo);
    document.getElementById("amigo").value = "";
    listaDeAmigos(); //mostrara la lista de amigos actualizada
    
    //verificar que tenga al menos 2 amigos  y eliminar el alert si se cumple la condicion
    if (amigos.length >= 2) {
        document.getElementById("menosDos").innerHTML = "";

    }
}
    function listaDeAmigos() {
        //crear la funcion para la lista de amigos 

        let lista = ""; // se inicia en un array vacio
        // se usa un bucle for para recorrer el array 
        for (let i = 0; i < amigos.length; i++) {
            lista += `<li>${amigos[i]}</li>`; // agregamos los amigos a la lista 
        }
        document.getElementById("listaAmigos").innerHTML = lista;
        //mostrar la lista en la pantalla 

    }

    //creamos la funcion para sortear amigo
    //agregamos un mensaje si la lista tiene un solo amigo
    function sortearAmigo() {
      if (amigos.length < 2) {
        document.getElementById("menosDos").innerHTML =
          "Debes tener mínimo 2 amigos en tu lista, agrega más amigos.";
        return;
      }

      // Usar Math.floor y Math.random para generar un número aleatorio
      let amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];
      document.getElementById(
        "resultadoSorteo"
      ).innerHTML = `Tu amigo secreto es: ${amigoSecreto}`; // Mostrar el amigo secreto

      // Eliminar al amigo secreto de la lista restante usando filter
      amigos = amigos.filter((nombreAmigo) => nombreAmigo !== amigoSecreto);
      listaDeAmigos(); // Actualizar la lista
      // Cambiar botón a "Reiniciar"
      let boton = document.getElementById("btnSorteo");
      boton.innerHTML = "Reiniciar";
      boton.onclick = reiniciar; // llama a la funcion reiniciar
    }
    //funcion para reiniciar el sorteo cuando ya tienes el resultado
    function reiniciar() {
        amigos = [];
        document.getElementById("listaAmigos").innerHTML = "";
        document.getElementById("resultadoSorteo").innerHTML = "";
        document.getElementById("menosDos").innerHTML = "";
        document.getElementById("amigo").value = "";
        // Restaurar botón a "Sortear amigo"
    let boton = document.getElementById("btnSorteo");
    boton.innerHTML = "Sortear amigo";
    boton.onclick = sortearAmigo; // Cambia la función de nuevo a sortear
    }

