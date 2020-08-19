var HT= parsefloat(prompt('entrez le prix hors-taxes :'));
var TVA = parsefloat(prompt("montant tva:"));
var TVA= HT * (TVA /100);
var TTC = HT + TVA;

document.write(`<p>${HT} + ${TVA} = ${TTC}</p>`);