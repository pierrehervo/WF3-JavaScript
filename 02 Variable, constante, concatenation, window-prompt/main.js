/*voir toutes les erreurs*/
"use strict";

/*===== VARIABLE =====*/
/*Déclaration et assignation de la variable*/
var prenom = "Jean";

/*ou on peut faire ainsi: Déclaration de la variable*/
var prenom;
/*Assignation de la variable*/
prenom = "Jean";


/*===== CONSTANTE =====*/

/*Déclaration d'une constante*/
const HELLO = "bonjour";

console.log (prenom);
document.write(HELLO);
document.write(prenom);

/*===== CONCATENATION =====*/

/*concaténation des informations*/
document.write("<p>" +HELLO+" <strong>"+prenom+"</strong></p>");

/*Utilisation des littéraux de gabarit*/
document.write(`<p>${HELLO} <em>${prenom}</em></p>`);


/*===== WINDOW.PROMPT =====*/

let signe = prompt("Est-ce que vous comprenez ?");
if (signe.toLowerCase() == "non") {
  document.write("arf moi non plus desole :(");

}
if (signe.toLowerCase() == "oui") {
	document.write("bravo t'es un genie");
} 
