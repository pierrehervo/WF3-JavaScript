'use strict';

let button;
let icon;



//
// ===============================================================
// ===============================================================
// ===============================================================
// ===============================================================


function dropdown_menu() {

    if ($('nav ul').hasClass('close')){
        $('nav ul').addClass('open');
        $('nav ul').removeClass('close');
        $('.btnHamburger i').addClass('fa-times');
        $('.btnHamburger i').removeClass('fa-bars');

    }
    else{
        $('nav ul').addClass('close');
        $('nav ul').removeClass('open');
        $('.btnHamburger i').addClass('fa-bars');
        $('.btnHamburger i').removeClass('fa-times');
    }

}
$(function(){
    $(".btnHamburger").on("click", dropdown_menu);
});











$("nav ul ul").hide();
   // On modifie l'évènement "click" sur les liens dans les items de liste
   // qui portent la classe "toggleSubMenu" :
   $(".deeper > a").click( function (event) {
    // Si le sous-menu était déjà ouvert, on le referme (:visible : sélectionne les éléments visibles)
       event.preventDefault();
       $('.deeper ul').slideUp();

       if ($(this).next("nav ul ul:visible").length != 0) {
           $(this).next("ul").slideUp();
           $(this).removeClass('open');
       }
       else {
           $(this).next("ul").slideDown();
           $(this).addClass('open');
       }
   });