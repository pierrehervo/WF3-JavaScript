'use strict';   // Mode strict du JavaScript

/***********************************************************************************/
/* ********************************* DONNEES CARROUSEL *****************************/
/***********************************************************************************/

// La liste des slides du carrousel.
var slides =
[
    { image: 'img/slides/soins-et-sens.jpg', legend: 'Bien-être et relaxation à Lille',desc:"Praticienne en massage bien-être, réflexologie et soins énergétiques, je vous fais voyager dans le pays du bien-être",btn:'Découvrez mes prestations',href:"soins.html"},
    { image: 'img/slides/relaxation.jpg', legend: 'Massage bien-être et réflexologie plantaire',desc:"Je vous propose des massage bien-être pour le corps, les pieds, le dos ainsi que le visage.",btn:'En savoir plus',href:"soins.html"},
    { image: 'img/slides/massage.jpg', legend: 'Vous souhaitez prendre un rendez-vous ?',desc:"Je vous reçois au cabinet et me déplace en entreprise ou à domicile",btn:'Contactez-moi',href:"contact.html"}
];
var carousel;


let i;
let elem = document.querySelector(".carousel-nav");
let span;
elem.innerHTML = '';
for (i = 1; i <= slides.length; i++) {
  //console.log('Boucle '+i);
  span = document.createElement("span");
  span.setAttribute('class', 'dot dot'+i);
  span.setAttribute('data-number', i);
  elem.appendChild(span);
}

// --------------------------
// LES FONCTIONS DU CARROUSEL 
// --------------------------

//
// Aller au slide suivant
//

function next()
{
    // Passage à la slide suivante.
    carousel.index++;

    // Si fin de la liste des slides
    if(carousel.index === slides.length)
    {
        // On revient au début
        carousel.index = 0;
    }

    // Mise à jour de l'affichage.
    refresh();
}

//
// Aller au slide précédent
//

function previous()
{
    // Passage à la slide précédente.
    carousel.index--;

    // Est-ce qu'on est revenu au début de la liste des slides ?
    if(carousel.index < 0)
    {
        // On revient à la fin
        carousel.index = slides.length - 1;
    }

    // Mise à jour de l'affichage.
    refresh();
}

//
// Interception des touches du clavier
//

function keyUp(event)
{
    switch(event.keyCode)
    {
      case TOUCHE_DROITE:
        // On passe à la slide suivante
        next();
        break;
      case TOUCHE_GAUCHE:
        // On passe à la slide précédente
        previous();
        break;
    }
}

//
// Se positionner sur le slide cliqué dans la navigation
//

function gotoSlide()
{
  //console.log(this);
  //console.log('dot clicked '+this.dataset.number);
  let index = this.dataset.number - 1;

  // Passage à la slide cliquée
  if (index !== carousel.index) {
    carousel.index = index;
    //console.log(carousel.index);
    // Mise à jour de l'affichage.
    refresh();
  }
}

//
// Démarrer le carrousel
//

function start()
{
  console.log('Start');
  carousel.timer = window.setInterval(next, 3000);
}

//
// Arrêter le carrousel
//

function stop()
{
  console.log('Stop');
  window.clearInterval(carousel.timer);
  carousel.timer = null;
}

//
// Affichage du carrousel
//

function refresh()
{
    let sliderImage;
    let sliderLegend;
    let sliderBtn;
    let sliderDesc;

    // Recherche des balises de contenu du carrousel.
    sliderImage  = document.querySelector('#carousel img');
    sliderLegend = document.querySelector('#carousel .carousel-caption h2');
    sliderBtn = document.querySelector ('#carousel .carousel-caption a.readmore');
    sliderDesc = document.querySelector ('#carousel .carousel-caption p');


    // Changement de la source de l'image et du texte de la légende du carrousel.
    sliderImage.src = slides[carousel.index].image;
    sliderLegend.textContent = slides[carousel.index].legend;
    sliderDesc.textContent = slides[carousel.index].desc;
    sliderBtn.textContent = slides[carousel.index].btn;
    sliderBtn.href = slides[carousel.index].href;


    // Ajouter/supprimer la classe active sur la navigation
    let indicators = document.querySelectorAll(".carousel-nav .dot");
    for (let i = 0; i < indicators.length; i++) {
      if (i === carousel.index) {
        indicators[i].classList.add("active");
      }
      else {
        if (indicators[i].classList.contains('active')) {
          indicators[i].classList.remove("active");
        }
      }
    }
}

//
// CODE PRINCIPAL
//

document.addEventListener('DOMContentLoaded', function()
{
    // Initialisation du carrousel.
    carousel = {};
    carousel.index = 0; // On commence à la première slide
    carousel.timer = null; // Initialisation du timer à null
    // Installation des gestionnaires d'évènement.
    document.getElementById('previous').addEventListener('click', previous);
    document.getElementById('next').addEventListener('click', next);
    document.querySelector('.carousel-item').addEventListener('mouseover', stop);
    document.querySelector('.carousel-item').addEventListener('mouseleave', start);
    document.addEventListener('keyup', keyUp);
    // Ajouter un écouteur d'événement sur chaque élément
    var dots = document.querySelectorAll(".carousel-nav .dot");
    for(i = 0; i < dots.length; i++) {
      dots[i].addEventListener('click', gotoSlide);
    }
    // Affichage initial.
    start();
    refresh();
});