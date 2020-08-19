'use strict'



/**/
let produits = new Array();


function Afficher(){
    console.log('Afficher');
    let html = '';
    for (let i = 0; i < produits.length; i++){
    html += '<input type="checkbox">'+produits[i]+'</input>';
    }

    document.getElementById('listeProduit').innerHTML = html;
}



function Ajouter(){
   

    let element = document.getElementById('product').value;
    console.log(produits)

    if (produits.indexOf(element) === -1) {
        produits.push(element);
        document.getElementById('product').value = '';
        console.log('Le nouveau tableau est : ' + produits);
    } else {

        console.log(element + ' existe déjà dans le tableau.');

    }

    Afficher();

}

function Trier(){
   
    if (produits.length>0){// si des produits sont présents :
        produits.sort();
    } 
    Afficher();   
}

function Supprimer(){
    if (produits.length>0){
        produits.pop();
    }
   
        Afficher(); 
} 

function Vider(){
   
  
        produits = [];
    
            Afficher();
}




document.addEventListener("DOMContentLoaded",function() {
    console.clear();
    // Définition des variables bouton
    let btnAjouter = document.getElementById('btnAjouter');
    let btnTrier = document.getElementById('btnTrier');
    let btnSupprimer = document.getElementById('btnSupprimer');
    let btnVider = document.getElementById('btnVider');
    // Ajout des écouteurs d'événements sur les boutons
      btnAjouter.addEventListener('click', Ajouter);
    btnTrier.addEventListener('click', Trier);
    btnSupprimer.addEventListener('click', Supprimer);
    btnVider.addEventListener('click', Vider);
  });