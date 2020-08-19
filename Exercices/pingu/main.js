function change()
{
	console.log('Change');
	console.log(this);
	document.getElementsByName("principale")[0].src=this.attributes[0]['value'];
}

// Sélectionner toutes les éléments li
var vignette = document.querySelectorAll("#vignette li img");

/*nombre d'éléments*/
console.log(vignette.length);
for(element of vignette){
	element.addEventListener('mouseover', change);
}

/* OU UTILISER CECI*/

/*for(i = 0; i < vignettes.length; i++) {
  vignettes[i].addEventListener('mouseover', change);
}*/