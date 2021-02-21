// Variable para tener poder poner un id unico a cada elemento cuando se copia a la cesta de la compra
let contador = 0; 

// Función que se lanza cuando un elemento empieza a ser arrastrado
const start = (e) => {

    // Se define el efecto
    e.dataTransfer.effecAllowed = 'mover'; 
    // Se coge el elemento que se va a mover y se le define un nombre
    e.dataTransfer.setData("Elemento", e.target.id);
    // Se define la imagen que se va a ver mientras se arrastra y la posición del ratón mientras el elemento se arrastra
    e.dataTransfer.setDragImage(e.target, 0, 20); 
    // Opacidad del elemento al ser arrastrado
    e.target.style.opacity = '0.8'; 
}

// Función que se lanza cuando elemento termina de ser arrastrado
const end = (e) => {
    // Opacidad del elemento
    e.target.style.opacity = '1';  
    // Eliminar cualquier información asociada a un elemento
    e.dataTransfer.clearData("Elemento");
}

// Función que se lanzará cuando un elemento arrastrado este sobre el elemento (cesta de la compra)
const arrastrar = (e) => {

    // Elemento arrastrado
    let elemArrastrable = e.dataTransfer.getData("Elemento"); // Elemento arrastrado

    // Elemento sobre el que se arrastrará 
    let id = e.target.id; 
  
    // Si el elemento donde se quiere arrastrar coincide con el id (en HTML) del elemento, devuelve false 
    if (id == 'cesta' || id == 'papelera'){
        return false;
    }  
}

// Eliminar elemento arrastrado
const eliminar = (e) => {

    // Elemento arrastrado
    let elementoArrastrado = document.getElementById(e.dataTransfer.getData("Elemento")); 

    // Elemento contenedor del elemento arrastrado
    let contenedorElemento = elementoArrastrado.parentNode.id;

    // Elemento sobre el que se arrastrará 
    let id = e.target.id; 
  
    // Si el elemento está en la cesta, se puede eliminar
    if (contenedorElemento == 'cesta'){
        elementoArrastrado.parentNode.removeChild(elementoArrastrado);
        return false; 
    }
}

// Copiar elemento arrastrado
const copiar = (e) => {

    // Elemento arrastrado
    let elementoArrastrado = document.getElementById(e.dataTransfer.getData("Elemento")); 

    // Opacidad de elemento arrastrado
    elementoArrastrado.style.opacity = '1'; 

    // Se copia el elemento
    let elementoClonado = elementoArrastrado.cloneNode(true); 

    // Se cambiar el nombre y el id del elemento comprado para que sea único
    elementoClonado.id = "ElemementoComprado" + contador; 
    contador += 1;  

    elementoClonado.style.position = "static";  // Se posiciona de forma "normal" (Sino habria que cambiar las coordenadas de la posición)  
    
    e.target.appendChild(elementoClonado); 
    // e.target.style

}
