// Déclaration d'une variable.
var prenom = prompt('Entrez votre prénom : ');
console.log(prenom);
var age = prompt('Entrez votre âge : ');
console.log(age);
age = parseInt(age);
console.log(age);
// Affichage du contenu de la variable directement dans la page HTML.
document.write('<p>Bonjour '+prenom);
document.write('<br>Vous avez '+age+' ans</p>');