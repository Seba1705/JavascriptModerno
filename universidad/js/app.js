// Eliminar de Local Storage
localStorage.clear();

let elemento;

elemento = document;
elemento = document.all;
elemento = document.all[10];
elemento = document.head;
elemento = document.body;
elemento = document.domain;
elemento = document.URL;
elemento = document.characterSet;
elemento = document.forms;
elemento = document.forms[0];
elemento = document.forms[0].id;
elemento = document.forms[0].className;
elemento = document.forms[0].classList;
elemento = document.forms[0].classList[0];
elemento = document.images;
elemento = document.images[2];
elemento = document.images[2].src;
elemento = document.images[2].getAttribute('src');
elemento = document.scripts;

// let imagenes = document.images;
// let imagenesArr = Array.from(imagenes);
// imagenesArr.forEach( imagen => console.log(imagen) );

elemento = document.querySelector('#header');
//console.log(elemento);

let encabezado;
encabezado = document.getElementById('encabezado').innerText;
encabezado = document.getElementById('encabezado').textContent;
encabezado = document.getElementById('encabezado');
encabezado.style.background = '#333';
encabezado.style.color = '#fff';
encabezado.style.padding = '20px';
encabezado.textContent = 'Los mejores cursos';


console.log(encabezado);
