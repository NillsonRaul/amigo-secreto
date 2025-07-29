// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombreAmigos =[];
let nombreAmigo = "";
let cantidadAmigos = 0;



//funcion para agregar amigos al array
function agregarAmigo() {
    nombreAmigo = document.getElementById('amigo').value;
    nombreAmigo.length === 0 ?   alert("Por favor, inserte un nombre") : nombreAmigos.push(nombreAmigo);

    limpiarInputNombre('amigo');
    mostrarAmigos(nombreAmigos);
  
}

//funcion para limpiar el input donde se ingresa nombre
function limpiarInputNombre(idElemento){

    idElemento == "listaAmigos" ? document.getElementById(idElemento).innerHTML  = '': document.getElementById(idElemento).value = '';

}
    


//funcion para actualizar valores en el DOM por ID
function asignarnombresLista(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

//Funcion para mostrar los amigos en la lista
function mostrarAmigos(amigos) {
  //aca limpiamos la lista.
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    //recorremos con for y agregamos por cada nombre en array
    for (let nombre of amigos) {
        lista.innerHTML += `<li>${nombre}</li>`;
    }
    asignarnombresLista('#listaAmigos', lista.innerHTML);
    cantidadAmigos = amigos.length;
  
}

function sortearAmigo(){
    let amigoSeleccionado = Math.floor(Math.random()*cantidadAmigos);
    if(nombreAmigos.length === 0 ){
        alert("No se puede hacer un sorteo sin nombres.") 
    }else{
        asignarnombresLista('#resultado', `el amigo secreto sorteado es: ${nombreAmigos[amigoSeleccionado]}`);
        limpiarInputNombre('listaAmigos');
        nombreAmigos = [];

    }
   
    
}