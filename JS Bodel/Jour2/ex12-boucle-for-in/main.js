"use strict";

var personne = new Object();
// Ajout de propriétés à l'objet
personne.nom = 'Durant';
personne.prenom = 'Paul';
personne.age = 29;

document.write('<h2>Personne</h2>');
for (let propriete in personne) {
	console.log(`personne.${propriete} = ${personne[propriete]}`);
  document.write(`${propriete} : ${personne[propriete]}<br>`);
}