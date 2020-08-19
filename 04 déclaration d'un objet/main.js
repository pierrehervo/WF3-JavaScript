var personne = new Object();
personne.nom = 'Dupont';
personne.prenom = 'Aurélien';
personne.age = 19;
// Affichage des informations
document.write('<h2>Personne</h2>');
document.write('<p>Nom : '+personne.nom+'<br>Prénom : '+personne.prenom+'<br> Âge : '+personne.age+'</p>');

/*ajout d'un tableau à un objet*/
personne.parents = new Array();
personne.parents[0] ="Xavier";
personne.parents[1] ="Marie";

/*Affichage des informations*/
document.write("<h2>Parents</h2>");
document.write('<ol>');
document.write('<li>'+personne.parents[0] + '</li>');
document.write('<li>'+personne.parents[1] + '</li>');
document.write('</ol>');

