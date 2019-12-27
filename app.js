'use strict'

console.log('Here\'s a hidden message');

let today = new Date()
let formatDate = today.toDateString()
let selectElement = document.getElementById('data')
selectElement.innerHTML = formatDate


var elemento_pai = document.body;
var titulo = document.createElement('titulo');
var texto = document.createTextNode("Barake Sistemas");
titulo.appendChild(texto);
elemento_pai.appendChild(titulo);
