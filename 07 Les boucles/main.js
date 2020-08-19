"use strict";
/*===== BOUCLES FOR =====*/
// Déclaration du tableau
let prenoms = ['Juliette', 'Camille', 'Pierre 1', 'Pierre 2', 'Aurélien', 'Anthony', 'Constant', 'Cédric'];

var imax = prenoms.length;

for (let i = 0; i < imax; i++){
	document.write(prenoms [i]);
}

/*===== BOUCLES WHILE =====*/

let prenoms = ['Juliette', 'Camille', 'Pierre 1', 'Pierre 2', 'Aurélien', 'Anthony', 'Constant', 'Cédric'];
let imax = prenoms.length;
let i = 0;
while (i < imax )
{
	document.write (prenoms [i]);
	i++;
}

/*===== BOUCLES DO WHILE=====*/

let personnes = new Array ();
let prenom;
/*la boucle do while s'execute au minimum 1 fois*/
do{
	prenom=window.prompt ("Veuillez saisir un prénom (fin=terminé):");
		if (prenom != 'fin') {
			personnes.push(prenom);
		}
} 
while (prenom != 'fin');


