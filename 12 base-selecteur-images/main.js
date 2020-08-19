//
// Déclaration des variables globales
//

let selection;
function fct_select(){
	this.classList.toggle('selected');/*affiche le compteur d'images selectionnees*/

	/*recupere le nombre d'éléments ayant la classe selected sur les li*/
	let select = document.querySelectorAll('.selected')

	document.querySelector('#total span').textContent = select.length;
}

//
// CODE PRINCIPAL
//

document.addEventListener("DOMContentLoaded",function(){
  // Création dynamique des ul/li pour les photos
let li;
let img;
let elem = document.getElementById("photo-list"); /*elem est le ul*/
for (let i = 1; i <= 12; i++){
	li = document.createElement("li");
	elem.appendChild(li);
	img = document.createElement('img');
	img.setAttribute('src','img/chat'+i+'.jpg');
	img.setAttribute('alt','Photo chat'+i);
	img.setAttribute('height','150');
	img.setAttribute('width','150');
	li.appendChild(img);
}
  // Récupération de l'endroit où afficher le total
let total = document.querySelector('#total span');
  // Sélectionner tous les éléments li
let photos = document.querySelectorAll('#photo-list li');
  // Nombre d'éléments récupérés
let imax = photos.length;
/*boucles sur les li*/
for (var i = 0; i<imax; i++){
	photos[i].addEventListener('click',fct_select);
}	


});