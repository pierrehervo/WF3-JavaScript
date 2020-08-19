
let ordinateur = ['pierre', 'feuille', 'ciseau'];
let choix = Math.floor(Math.random() * 3);

let joueur = window.prompt("Choisissez entre pierre, feuille ou ciseau");
joueur.toLowerCase();

let message = 'l\'ordinateur a gagné';

document.write('<p>Choix de l\'ordinateur : ' + ordinateur[choix] + '</p>');
document.write('<p>Choix du joueur : ' + joueur);


if (joueur==ordinateur[choix]){
	message ='Personne ne gagne';
}
if (joueur == "pierre" && ordinateur[choix] == "ciseau"){
	message ='Le joueur a gagné';
}
if (joueur == "ciseau" && ordinateur[choix] == "feuille"){
	message ='Le joueur a gagné';	
}
if (joueur == "feuille" && ordinateur[choix] == "pierre"){
	message ='Le joueur a gagné';
}

document.write('<p>' + message + '</p>');

