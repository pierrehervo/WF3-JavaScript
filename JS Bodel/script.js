'use strict';

//alert("Je suis un script externe.");

//Déclaration d'une variable
var nomDeLaVariable;
let nom_de_la_variable;//variable locale

var unEntier = 42;
var uneChaine = "Hello World";
var unjeSecondeChaine = "42";

//caractères alpha + numérique
//NE PEUT PAS commencer par un numérique
//PAS de caractères spéciaux -+%=!&
//OK avec: _ $

//Type de données:

//Nombre (pas de notion d'entier ou de décimal)
var a = 42;
var b = 21.5;

//Chaine
var c = "une chaine";

//Booleen
var d = true;
var e = false;

//Tableau (c'est une collection de données)
var f = []; //Forme raccourcie
var g = Array();
var h = Array (20); //crée un tableau avec deja 20lignes
var fruits = ["Pommes","Poires","Bananes"];
console.log(fruits[1]); // Du coup on appelle les "Poires" dans le tableau

//Objet
var i = {};
var j = Objet ();
var user = {
    'firstname':'Bruce';
    'lastname':"Wayne";
};
var user2 = Object ();
user2.firstname = "Bob";
user2.lastname = "Sponge";

console.log( user.firstname);

//Function
function NomDeLaFonction(){

}//fonction sans parametre d'entrée

function uneFonctionAvecEntree(param1, param2){

}
uneFonctionAvecEntree("valeur1","valeur2"); // param1 à la valeur1 et param2 à la valeur2

function uneFonctionAvecEntreeOptionelle(param1, param2 ="azerty"){

}
uneFonctionAvecEntreeOptionelle("valeur1","valeur2"); //param1 à la valeur 1 et param2 aura la valeur2
uneFonctionAvecEntreeOptionelle("valeur1"); //param1 à la valeur 1 et param2 aura la valeur azerty 

// Les Conditions:

//if
var condition = 1<42;
if ($condition){
    //code à éxecuter
}

//if/else
if(condition){
    //code à éxecuter
}
else{
    //code à éxecuter si "condition" est Faux
}

//if/else if
if (condition){
    //code à executer si "condition"est vrai
}
else if(condition 2){
    //code à executer si "condition2" est Vrai
}
else{
    //code à éxecuter si "condition" et "condition2" =Faux
}

//Commutateur
switch(condition){
    case "a":
        //code à exécuter si "condition" vaux "a"
        break;

    case "b":
        //code à exécuter si "condition" vaux "b"
        break;

    case "c":
        //code à exécuter si "condition" vaux "c"
        break;
    
    case "d":
        //code à exécuter si "condition" vaux "d"
        break;
    
    default:
        //code à exécuter si "condition"ne vaux ni "a" ni "b" ni "c" ni "d"
}

//Boucles:

//for
for (initialisation; condition; incrementation){

}
for(let i=0; i<10; i++){//i++ veut dire i=0+1
    console.log(i);// donc nous affiche 0 puis 1 et 2 etc..jusque 9 pour la boucle s'arrete parceque i=10
}

//while
var i=0;
while(1<10){
    i++;
}

//Do while
var i =10;
do{
    i++//executer du code
    console.log(i);
} while(i<10)//condition