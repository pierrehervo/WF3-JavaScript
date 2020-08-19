"use strict";

let prenoms = ['Xavier', 'Jean', 'Luc', 'Isabelle', 'Anne'];
let imax = prenoms.length; // Nombre d'éléments dans le tableau
let i = 0;
while (i < imax ) 
{
	console.log(prenoms[i]);
	document.write(`<p>Prénom ${i} = ${prenoms[i]}</p>`);
	i++;
}