/* ===== MENU HAMBURGER =====*/
'use strict';

let button;
let icon;

function dropdown_menu() {
  console.log('Dropdown');
  let mainmenu = document.getElementById("mainmenu");
  // Afficher / cacher le menu
  if (mainmenu.classList.contains('close')) {
    // On affiche le Menu
    mainmenu.classList.replace('close','open');
    // On remplace l'icône du hamburger
    icon.classList.replace('fa-bars', 'fa-times');
  }
  else {
    // On cache le Menu
    mainmenu.classList.replace('open','close');
    // On remet l'icône du hamburger
    icon.classList.replace('fa-times', 'fa-bars');
  }

}

/***********************************************************************************/
/* ******************************** CODE PRINCIPAL *********************************/
/***********************************************************************************/

document.addEventListener('DOMContentLoaded', function()
{
  // Définition des variables
  button = document.querySelector(".btnHamburger");
  icon = document.querySelector('.btnHamburger i');
  // Installation d'un gestionnaire d'évènement clic sur le bouton.
  button.addEventListener('click', dropdown_menu);
});


/* ==============CAROUSSEL ============*/

