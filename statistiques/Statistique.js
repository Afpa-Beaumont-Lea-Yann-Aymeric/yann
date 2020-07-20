/*respecter la norme ECMA Script6 avec "use strict" */
"use strict";

/* variable et tableau : déclaration et initialisation */

let nbre = 0;
let monTableau = [];
let somme = 0;
let moyenne = 0;
let plusPetitNombre = 0;
let plusGrandNombre = 0;


/* traitement */

nbre = estNombre(parseInt(prompt("Entrez un nombre. \nSaisissez 0 (zéro) pour arrêter la saisie de valeurs.")));
plusPetitNombre = plusGrandNombre = nbre;

while (nbre != 0) {
	somme = somme + nbre;
	if (nbre > plusGrandNombre) {
		plusGrandNombre = nbre;
	}
	if (nbre < plusPetitNombre) {
		plusPetitNombre = nbre;
	}
	monTableau.push(nbre);
	nbre = estNombre(parseInt(prompt("Entrez un nombre. \nSaisissez 0 (zéro) pour arrêter la saisie de valeurs.")));
}
moyenne = somme / monTableau.length;
alert("Nombres saisis : " + monTableau.length + "\nCompris entre : " + plusPetitNombre + " et " + plusGrandNombre + "\nLa somme est : " + somme + "\nLa moyenne est : " + moyenne);






/* fonctions */
/* fonction pour verifier si c'est bien un nombre qui est entré par l'utilisateur 
et redemander de taper si jamais ce n'est pas le cas */
function estNombre(testNbre) {
	while (isNaN(testNbre)) {
		testNbre = parseInt(prompt("Ceci n'est pas un nombre. Merci de taper un nombre."));
	}
	return testNbre;
}
