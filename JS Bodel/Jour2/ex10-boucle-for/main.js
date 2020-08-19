"use strict";

var prenoms = ['Xavier', 'Jean', 'Luc', 'Isabelle', 'Anne'];
// Nombre d'éléments dans le tableau
let imax = prenoms.length;

for (let i = 0; i < imax; i++) {
	console.log(prenoms[i]);
	document.write(`<p>Prénom ${i} = ${prenoms[i]}</p>`);
}