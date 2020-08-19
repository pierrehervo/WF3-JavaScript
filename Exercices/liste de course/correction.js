var listeCourses = [];

function ajouter()
{
	console.log('Ajouter');
	let produit = document.getElementById("produit").value.toLowerCase();
	let index = listeCourses.indexOf(produit);
	if (produit !== '' && index === -1) {
		// Si le produit n'est pas vide et n'est pas dans la liste, on l'ajoute
		// Ajoute le produit à la liste de courses.
		listeCourses.push(produit);
		console.log(listeCourses);
		document.getElementById("debug").innerHTML = 'Produit ajouté';
		document.getElementById("produit").value = '';
		afficher();
	}
}

function trier() 
{
	console.log('Tri');
	if (listeCourses.length > 0) {
		listeCourses.sort();
		document.getElementById("debug").innerHTML = 'Liste triée';
		afficher();
	}
}

function afficher() {
	console.log('Afficher');
	console.log(listeCourses);
	let liste='';
	for( let i =0;i<produit.length; i++){
		console.log (produit[i])
		liste +='<input type="checkbox">' + produit[i]+ '<br>'
		document.getElementById('debug').innerHTML = liste;
	}
}

function supprimer() {
	console.log('Supprimer');
	// Tester si case est cochée
	let produits = document.getElementsByName('produit');
	for (let i = 0; i < produits.length; i++) {
	    if (produits[i].checked == true) {
	    	console.log('case cochée');
	    }
	}
}

function vider() {
	console.log('Vider');
	listeCourses = [];
	afficher()
}

document.addEventListener("DOMContentLoaded",function() {
	// Effacement du contenu de la console, au cas où.
	console.clear();
	// Définition des variables
	var btnAjout = document.getElementById('btnAjout');
	var btnTri = document.getElementById('btnTri');
	var btnSupprime = document.getElementById('btnSupprime');
	var btnVider = document.getElementById('btnVider');
	btnAjout.addEventListener('click', ajouter);
	btnTri.addEventListener('click', trier);
	btnSupprime.addEventListener('click', supprimer);
	btnVider.addEventListener('click', vider);
	
	// Trigger de ajout si entrée sur le champ produit
	var input = document.getElementById("produit");
	input.addEventListener("keyup", function(event) {
	  //event.preventDefault();
	  // Tester si la touche entrée a été activée
	  if (event.keyCode === 13) {
	    // Trigger the button element with a click
	    document.getElementById("btnAjout").click();
	  }
	});
});
