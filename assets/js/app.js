//variables
const listaTweets = document.querySelector('#lista-tweets');



//EventListener 
eventListener();

function eventListener(){
    //Cuando se envia al formulario

    document.querySelector('#formulario').addEventListener('submit',agregarTweet);

    listaTweets.addEventListener('click',borrarTweet);

    //Contenido Cargado 

    document.addEventListener('DOMContentLoaded',localStorageListo);
}


//Funciones

//Añadir Tweet del formulario

function agregarTweet(e){
    e.preventDefault();
    const tweet = document.querySelector('#tweet').value;
    //crear boton eliminar
    const eliminar = document.createElement('a');
    eliminar.classList = 'borrar-tweet';
    eliminar.textContent = 'X';
    
    //creaer elemento y añadirle el valor a la lista 
    const li = document.createElement('li');
    li.innerText = tweet;
    //añade el boton borrar
    li.appendChild(eliminar);

    //añade el tweet a la lista
    listaTweets.appendChild(li);

    //agregar al localStorage

    //agregarAlLocalStorage(tweet);
}

//Elimina el tweet del DOM
function borrarTweet(e){
    e.preventDefault();

    if(e.target.className === 'borrar-tweet'){
        
        const elemento = e.target.parentElement.textContent;
        e.target.parentElement.remove();
        //borrarLocalStorage(elemento);
    }
}


//Mostrar datos del local storage

// function localStorageListo(){
//     let tweets;
//     tweets = obtenerTweetsLocalStorage(); 
//     tweets.forEach(function(tweet){
//         //crear boton eliminar
//         const eliminar = document.createElement('a');
//         eliminar.classList = 'borrar-tweet';
//         eliminar.textContent = 'X';
        
//         //creaer elemento y añadirle el valor a la lista 
//         const li = document.createElement('li');
//         li.innerText = tweet;
//         //añade el boton borrar
//         li.appendChild(eliminar);

//         //añade el tweet a la lista
//         listaTweets.appendChild(li);
        
//     });
//}
//Agrega al local storage;
// function agregarAlLocalStorage(tweet){
    
//     let tweets;

//     tweets = obtenerTweetsLocalStorage();
//     tweets.push(tweet);

//     //convertir de arreglo a string para local storage
//     localStorage.setItem('tweets',JSON.stringify(tweets));
// }

// function borrarLocalStorage(elemento){
//     let elem = elemento.substring(0,elemento.length-1);
//     let tweets = obtenerTweetsLocalStorage();
//     let contador = 0;
 
//     tweets.forEach(function(tweet,index){
//         if(tweet == elem){
//             tweets.splice(index,1);
//         }
//     });

//     localStorage.setItem('tweets',JSON.stringify(tweets));

// }

// //Compueba datos del local storage
// function obtenerTweetsLocalStorage(){
//     let tweets; 

//     //Revisamos los valores de local storage 

//     if(localStorage.getItem('tweets') === null){
//         tweets = [];
//     }
//     else{
        
//         tweets = JSON.parse(localStorage.getItem('tweets'));    
//         //console.log(tweets);
//     } 

//     return tweets;
// }
