'use strict';

// Déclaration d'un tableau
var prenoms = ['Xavier', 'Jean', 'Luc', 'Isabelle', 'Anne'];
// Nombre d'éléments dans le tableau
var imax = prenoms.length;
// Définition d'une variable pos
var pos;
// Affichage du contenu initial du tableau
console.log(prenoms);
// Afficher le nombre d'éléments du tableau
console.log(imax);
// Afficher le contenu du 2ème élément du tableau (!!! le 1er a l'indice 0 !!!)
console.log(prenoms[1]);
// Ajout d'éléments à la fin du tableau
prenoms.push('Kévin');
prenoms.push('Christiane');
// Ajout d'éléments au début du tableau
prenoms.unshift('Carole', 'Bernard');
// Affichage du contenu du tableau
console.log(prenoms);
// Tri du tableau
prenoms.sort();
//Suppression du dernier élément
prenoms.pop();
// Suppression du 1er élément
prenoms.shift();
// Affichage du nouveau contenu du tableau
console.log(prenoms);
// Recherche du prénom Eva
pos = prenoms.indexOf('Eva)');
console.log('Eva '+pos); // Renvoie -1
// Recherche du prénom Jean
pos = prenoms.indexOf('Jean');
console.log('Jean '+pos);