"use strict";

// programme appelant

/* ---------------- variables ---------------- */
let distance = 0; // Distance que le conducteaur souhaite effectuer avec le véhicule
let averageSpeed = 0; // Vitesse moyenne selon le type de trajet envisagé avec le véhicule.


/**
 * @description Véhicule témoin servant à controler le fonctionnement du programme.
 */
let car1 = new Voiture ("AZ-123-FE", "bleu", 950, 5, 50, 4);



/* ---------------- traitement ---------------- */

/**
 * @returns {boolean} Renvoie le statut d'assurance du véhicule après demande à l'utilisateur du programme.
 */
car1.setInsurance(testOuiNon(prompt("Le vehicule est-il assuré ? O/N")) == "O" ? true : false);

/**
 * @returns {string} Renvoie le nouveau coloris sohaité pour le véhicule, après appel de la methode repaint.
 */
car1.repaint(testColor(prompt("Quel coloris souhaitez-vous avoir ? \nNoir - Bleu - Rouge - Gris - Blanc")));


/**
 * @returns {number} Renvoie la quantité de carburant à ajouter au véhicule, apres appel de la methode refuel.
 */
car1.refuel(Math.round(estnombreAVirgule(parseFloat(prompt("Combien de carburant souhaitez-vous ajouter ?")))*100)/100);


distance = estnombreAVirgule(parseFloat(prompt("Indiquez la distance à parcourir : ")));
averageSpeed = testRoad(estNombre(parseInt(prompt("Indiquez le type de trajet : \nVille : 1 \nRoute : 2 \nAutoroute : 3 \nAutoroute en excès de vitesse : 4"))));

/**
 * @description appel de la méthode move pour calcul de la possibilité de faire le parcours désiré.
 */
car1.move(distance, averageSpeed);

// affichage  du traitement des données
console.log(car1.getDashboardMessage());
console.log(car1.toString());



/* ---------------- fonctions ---------------- */


/**
 * @function testOuiNon
 * @description Fonction qui attend que l'utilisateur reponde obligatoirement par Oui ou Non
 * @param {string} value - Réponse utilisateur testé.
 * @returns {string} Réponse utilisateur "Oui" ou "Non"
 */
function testOuiNon(value) {
    value = value.toUpperCase();
    while (value != "O" && value != "N") {
        value = prompt("Erreur. \nVeuillez répondre par Oui ou Non : O/N");
        value = value.toUpperCase();
    }
    return value;
}


/**
 * @function testColor
 * @description Fonction qui attend que l'utilisateur réponde obligatoirement l'une des couleurs proposées.
 * @param {string} value - Réponse utilisateur testée.
 * @returns {string} Réponse utilisateur de la couleur souhaitée pour le véhicule.
 */
function testColor(value) {
    value = value.toLowerCase();
    while (value != "noir" && value != "bleu" && value != "rouge" && value != "gris" && value != "blanc") {
        value = prompt("Erreur. \nVeuillez répondre par Noir - Bleu - Rouge - Gris - Blanc");
        value = value.toLowerCase();
    }
    return value;
}


/**
 * @function testRoad
 * @description Fonction qui attend que l'utilisateur réponde obligatoirement l'un des types de trajet proposés.
 * @param {number} value - Réponse utilisateur testée.
 * @returns {number} Réponse utilisateur du type de trajet envisagé avec le véhicule.
 */
function testRoad(value) {
    while (value != 1 && value != 2 && value != 3 && value != 4) {
        value = estNombre(parseInt(prompt("Erreur. \nVeuillez répondre par \nVille : 1 \nRoute : 2 \nAutoroute : 3 \nAutoroute en excès de vitesse : 4")));
    }
    return value;
}


/**
 * @function estNombre
 * @description Fonction qui attend que l'utilisateur réponde obligatoirement par un nombre.
 * @param {number} testNbre - Réponse utilisateur testée.
 * @returns Réponse utilisateur.
 */
function estNombre(testNbre) {
	while (isNaN(testNbre) || (testNbre < 0)) {
		testNbre = parseInt(prompt("Donnée invalide. Merci de taper un nombre entier positif."));
	}
	return testNbre;
}


/**
 * @function estnombreAVirgule
 * @description Fonction qui attend que l'utilisateur réponde obligatoirement par un nombre.
 * @param {number} testNbre - Réponse utilisateur testée.
 * @returns Réponse utilisateur.
 */
function estnombreAVirgule(testNbre) {
    while (isNaN(testNbre) || (testNbre < 0)) {
		testNbre = parseFloat(prompt("Donnée invalide. Merci de taper un nombre positif."));
	}
	return testNbre;
}
