"use strict";
let ajouter = document.getElementById('ajouter');
let trier = document.getElementById('trier');
let supprimer = document.getElementById('supprimer');
let vider = document.getElementById('vider');

let produit = new Array;
produit = ['eau', 'lait', 'viande',]
console.log (produit.length);


function afficher(){
	let liste='';
	for( let i =0;i<produit.length; i++){
		console.log (produit[i])
		liste +='<input type="checkbox">' + produit[i]+ '<br>'
		document.getElementById('zone').innerHTML = liste;
	}
}
afficher()

function ajout() {
  let item = document.getElementById("prod").value;
  item = item.toLowerCase();
  if(item != ""){
  	if(produit.indexOf(item) ===-1){
  		produit.push(item);
  		afficher();
  	}
  }
}
function tri(){
	
}

ajouter.addEventListener('click',ajout);