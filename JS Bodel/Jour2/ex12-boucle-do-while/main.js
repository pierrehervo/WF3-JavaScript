"use strict";

let personnes = new Array();
let prenom;
// La boucle do while doit s'exécuter au minimul 1 fois
do
{
    prenom = window.prompt('Veuillez saisir un prénom (fin = terminé) :');
		if (prenom != 'fin') {
			personnes.push(prenom);
			document.write(prenom+' ajouté à la liste<br>');
		}
		console.log(personnes);
}
while(prenom != 'fin');

let nombre;
do
{
    nombre = parseInt(window.prompt('Veuillez saisir un nombre entier :'));
}
while(isNaN(nombre) == true);
document.write('<p>Le nombre saisi est <strong>' + nombre + '</strong>.</p>');