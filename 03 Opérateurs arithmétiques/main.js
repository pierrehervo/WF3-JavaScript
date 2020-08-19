"use strict";
// Déclaration des variables
let nombre1 = parseInt(prompt('Entrez un 1er nombre : ', 30));
let nombre2 = parseInt(prompt('Entrez un 2ème nombre : ', 20));
let total;

// Addition
total = nombre1 + nombre2;
// Affichage du résultat
document.write(`<p>${nombre1} + ${nombre2} = ${total}</p>`);

// Soustration
total = nombre1 - nombre2;
// Affichage du résultat
document.write(`<p>${nombre1} - ${nombre2} = ${total}</p>`);

// Multiplication
total = nombre1 * nombre2;
// Affichage du résultat
document.write(`<p>${nombre1} * ${nombre2} = ${total}</p>`);

// Division (!!! la division par zéro renvoie Infinity !!!)
total = nombre1 / nombre2;
// Affichage du résultat
document.write(`<p>${nombre1} / ${nombre2} = ${total}</p>`);