'use strict';

// Déclaration du tableau
let prenoms = ['Juliette', 'Camille', 'Pierre 1', 'Pierre 2', 'Aurélien', 'Anthony', 'Constant', 'Cédric'];
// Affichage du contenu du tableau
console.log(prenoms);
// Nombre d'éléments du tableau
let imax = prenoms.length;
console.log(imax);
console.log(prenoms[4]);
// Ajout d'un élément à la fin du tableau
prenoms.push('Salim');
// Ajout d'un élément au début du tableau
prenoms.unshift('Christiane');
// Affichage du nouveau contenu du tableau
console.log(prenoms);
// Suppression du 1er élément
prenoms.shift();
// Recherche du prénom Christiane
let pos = prenoms.indexOf('Christiane'); // Renvoie -1
// Recherche du prénom Constant
let pos2 = prenoms.indexOf('Constant');
// Supprimer Constant
let removed = prenoms.splice(pos2, 1);
console.log(prenoms);
console.log(removed);
// Tri du tableau
prenoms.sort();
console.log(prenoms);