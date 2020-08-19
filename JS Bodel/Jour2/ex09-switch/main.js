"use strict";

var codePays = window.prompt('Entrez votre code pays', 'FR');
var pays;

switch (codePays) {
	case 'FR':
		pays = 'France';
		break;
	case 'BE':
		pays = 'Belgique';
		break;
	case 'CH':
		pays = 'Suisse';
		break;	
	case 'DE':
		pays = 'Allemagne';
		break;
	case 'ES':
		pays = 'Espagne';
		break;	
	case 'IT':
		pays = 'Italie';
		break;
	case 'LU':
		pays = 'Luxembourg';
		break;	
	default:
		pays = 'Inconnu';
}

document.write(`<p>${codePays}-${pays}`);