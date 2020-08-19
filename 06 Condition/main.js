"use strict";

var nombre = Number(prompt('Entrez un nombre :'));

// Condition simple
if (nombre === 0) {
	document.write('<p>Le nombre est égal à zéro</p>');
}

// Structure if ... else
if (nombre > 0) {
	document.write('Le nombre '+nombre+' est positif');
}
else {
  document.write('Le nombre '+nombre+' est égal à zéro ou négatif');
}
// Structure if ... elseif ... else
if (nombre > 0) {
  document.write('Le nombre '+nombre+' est positif');
}
else if (nombre < 0) {
  document.write('Le nombre '+nombre+' est négatif');
} 
else {
  document.write('Le nombre est égal à zéro');
}

// Utilisation de conditions imbriquées
if (nombre > 0) {
  document.write('Le nombre '+nombre+' est positif');
} 
else {
  if (nombre < 0) {
    document.write('Le nombre '+nombre+' est négatif');
  } 
  else {
    document.write('Le nombre est égal à zéro');
  }
}