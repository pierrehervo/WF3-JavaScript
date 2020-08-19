'use strict';   // Mode strict du JavaScript

// Déclaration des variables.
var currentDate = new Date();

document.write(`<p>Nous sommes le ${currentDate.getDate()}/ ${parseInt([currentDate.getMonth()]) + 1}/${currentDate.getFullYear()}</p>`);
document.write('<p>Nous sommes le '+currentDate.toLocaleDateString('fr-FR', options)+'</p>');

var event = new Date();
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

console.log(event.toLocaleDateString('de-DE', options));
console.log(event.toLocaleDateString('fr-FR', options));
