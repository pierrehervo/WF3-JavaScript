'use strict';

// Définition des variables
let button;
let forme;
let nbrMouvements = 0;

//
// Enregistrer le compteur dans la sessionStorage
//
forme=document.querySelector('.forme');
function save()
{
nbrMouvements++;
sessionStorage.setItem("mouvements", nbrMouvements);
document.getElementById('debug').innerHTML = "Nombre de mouvements sur la forme:"+nbrMouvements;
}

//
// Afficher/cacher la forme
//

function buttonClick()
{
 forme.classList.toggle('hide');
 	if(forme.class =='hide'){}
}

//
// Actions à effectuer au survol de la souris
//

function formMouseOver()
{
	forme.classList.toggle('survol');
	this.innerHTML=("Mouse In");
	nbrMouvements++;
}

//
// Actions à effectuer quand on quitte le survol de la forme
//

function formMouseOut()
{
	if(this.classList.contains("dblclick")){
		this.classList.remove("dblclick");
	}
	this.classList.remove('survol');
	this.innerHTML="Mouse Out";
	save();

}

//
// Actions à effectuer au double click
//

function formDoubleClick()
{
	forme.classList.toggle("dblclick");
	this.innerHTML=("Double clique");
	save();
}

//
// CODE PRINCIPAL
//

document.addEventListener("DOMContentLoaded",function(){

	// Recherche des éléments dans l'arbre du DOM

	// Définition des écouteurs d'évènement
	document.querySelector('#toggle-forme').addEventListener('click',buttonClick);
	document.querySelector('.forme').addEventListener('dblclick',buttonClick);
	document.querySelector('.forme').addEventListener('mouseover',formMouseOver);
	document.querySelector('.forme').addEventListener('mouseleave',formMouseOut);
	// Récupération du compteur en session storage
nbrMouvements = sessionStorage.getItem("mouvements");
if (nbrMouvements == null) {
	nbrMouvements= 0;
}	
	// Affichage du compteur
document.getElementById('debug').innerHTML = 'Nombre de mouvements sur la forme:'+nbrMouvements;

});