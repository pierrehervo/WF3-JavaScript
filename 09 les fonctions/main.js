function addition (nbr1,nbr2){
	let total= nbr1 + nbr2;
	return total;
}
let nombre1 = 10;
let nombre2 = 20;
console.log( addition (nombre1, nombre2));
let total1 = addition (nombre1, nombre2);
console.log (addition (5,7));


function soustraction (nbr3,nbr4){
	let total= nbr3 - nbr4;
	return total;
}
let nombre3 = 30;
let nombre4 = 10;
console.log( soustraction (nombre3, nombre4));
let total2 = soustraction (nombre3, nombre4);


function multiplication (nbr5,nbr6){
	let total= nbr5 * nbr6;
	return total;
}
let nombre5 = 2;
let nombre6 = 8;
let total3 = multiplication (nombre5, nombre6);
console.log( multiplication (nombre5, nombre6));


function division (nbr7,nbr8){
	let total= nbr7 / nbr8
	return total;
}
let nombre7 = 30;
let nombre8 = 2;
let total4 = division (nombre7, nombre8);
console.log( division (nombre7, nombre8));

function saisie_nombre(question){
	let nbr
	do{
		nbr = parseInt(window.prompt(question));
}
	while(isNaN(nbr) == true);
	return nbr;
}
let nbr1 = saisie_nombre('Entrez un 1er nombre entier:');
let nbr2 = saisie_nombre('Entrez un 2ème nombre entier:');

// afficher addition dans le document
document.write(`<p>${nbr1} + ${nbr2} = ${addition(nbr1, nbr2)}</p>`);
// afficher soustraction dans le document
document.write(`<p>${nbr1} - ${nbr2} = ${soustraction(nbr1, nbr2)}</p>`);
// afficher multiplication dans le document
document.write(`<p>${nbr1} * ${nbr2} = ${multiplication(nbr1, nbr2)}</p>`);
// afficher division dans le document
document.write(`<p>${nbr1} / ${nbr2} = ${division(nbr1, nbr2)}</p>`);


/*fonction date*/
let ladate = new Date();
document.write(`<p>Nous sommes le : ${ladate.getDate()}/ ${parseInt([ladate.getMonth()]) + 1}/ ${ladate.getFullYear()}</p>`);

/*ecrit la date en lettre*/
let options = {weekday: 'long', year: 'numeric', month:'long', day:'numeric'};
let ladate1 = new Date();
document.write('<p>Nous somme le '+ladate1.toLocaleDateString('fr-FR', options)+'</p>');
let event = new Date();


/*méthode simplifiée*/
let event1 = new Date();
let option = {weekday: 'long', year: 'numeric', month:'long', day:'numeric'};
document.write(event1.toLocaleDateString ('fr-FR', option));

/*afficher la date et lheure en temps réel*/
