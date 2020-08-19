"use strict";

var nombre = Number(prompt('Entrez un nombre :'));

// Le if
if (nombre === 0) {
	document.write('<p>Le nombre est égal à zéro</p>');
}

// Structure if ... else
if (nombre > 0) {
	document.write('<p>Le nombre '+nombre+' est positif</p>');
}
else {
  document.write('<p>Le nombre '+nombre+' est égal à zéro ou négatif</p>');
}

// Structure if ... elseif ... else
if (nombre > 0) {
  document.write('<p>Le nombre '+nombre+' est positif</p>');
} 
else if (nombre < 0) {
  document.write('<p>Le nombre '+nombre+' est négatif</p>');
} 
else {
  document.write('<p>Le nombre est égal à zéro</p>');
}

// Utilisation de conditions imbriquées
if (nombre > 0) {
  document.write('<p>Le nombre '+nombre+' est positif</p>');
} 
else {
  if (nombre < 0) {
    document.write('<p>Le nombre '+nombre+' est négatif</p>');
  } 
  else {
    document.write('<p>Le nombre est égal à zéro</p>');
  }
}