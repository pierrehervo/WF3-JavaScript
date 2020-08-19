'use strict';

// 1ère étape : affichage du résultat dans la console
// Déclaration des variables et des constantes
let max;
let ligne;
let colonne;

do {
	max = window.prompt("entrer un chiffre");
}
while (isNaN(max) || max < 2 || max > 30);

for(ligne = 1; ligne <= max; ligne++) {
	for(colonne = 1; colonne <= max; colonne++) 
	{
		console.log(ligne * colonne);
	}
}


// 2ème étape : affichage dans un tableau HTML
// Déclaration des variables et des constantes

let classe;

document.write('<table>');
// Ligne d'entête
document.write('<tr>');
document.write('<th> </th>');
for (colonne = 1; colonne <= max; colonne++) 
{
	document.write('<th>' + colonne + '</th>');
}
document.write('</tr>');
for(ligne = 1; ligne <= max; ligne++) {
	document.write('<tr>');
	document.write('<th>' + (ligne) + '</th>');
	let result;
	for(colonne = 1; colonne <= max; colonne++) 
	{
		classe = '';
		if (ligne == colonne) {
			classe = 'same';
		}
		//console.log(ligne * colonne);
		result = ligne * colonne;
		document.write(`<td class="${classe}">${result}</td>`);
	}
	document.write('</tr>');
}
document.write('</table>');

