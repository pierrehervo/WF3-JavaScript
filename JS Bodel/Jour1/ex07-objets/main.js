'use strict';
// Déclaration d'un objet personne
var personne = new Object();
// Ajout de propriétés à l'objet
personne.nom = 'Durant';
personne.prenom = 'Paul';
personne.age = 29;
// Affichage des informations
document.write('<h2>Personne</h2>');
document.write('<p>Nom : '+personne.nom+'<br>Prénom : '+personne.prenom+'<br> Âge : '+personne.age+'</p>');

// Déclaration sous forme de tableau associatif
var conjoint = [];
conjoint['nom'] = 'Dupont';
conjoint['prenom'] = 'Marie';
conjoint['age'] = 25;
// Affichage des informations
document.write('<h2>Conjoint</h2>');
document.write('<p>Nom : '+conjoint.nom+'<br>Prénom : '+conjoint.prenom+'<br> Âge : '+conjoint.age+'</p>');

// Ajout d'un tableau à un objet
personne.enfants = new Array();
personne.enfants[0] = 'Xavier';
personne.enfants[1] = 'Charlotte';
personne.enfants[2] = 'Vanessa';
// Affichage des informations
document.write('<h2>Enfants</h2>');
document.write('<ol>');
document.write('<li>'+personne.enfants[0] + '</li>');
document.write('<li>'+personne.enfants[1] + '</li>');
document.write('<li>'+personne.enfants[2] + '</li>');
document.write('</ol>');