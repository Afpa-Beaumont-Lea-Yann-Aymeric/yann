"use strict";

/**
 * @author Yann Boyer
 * @fileoverview Il s'agit ici de développer une classe représentant (de manière simplifiée !) une voiture du parc automobile de l'entreprise cliente.
 */

/**
 * @description création d'une classe Voiture
 */
class Voiture {

    /**
     * @param {string} immatriculation - Le numéro d'immatriculation
     * @param {string} couleur - Le coloris du véhicule
     * @param {number} poids - Le poids du véhicule
     * @param {number} puissance  - La puissance fiscale du véhicule
     * @param {number} capaciteReservoir - La capacité du réservoir du véhicule
     * @param {number} niveauEssence - Le niveau d'essence dans le reservoir du véhicule
     * @param {number} nbrePlace - Le nombre de place dans le véhicule
     * @param {boolean} assurance - Le statut d'assurance du véhicule
     * @param {string} messageTdB - Les messages apparaissant au tableau de bord
     */
    constructor (immatriculation, couleur, poids, puissance, capaciteReservoir, niveauEssence = 5, nbrePlace, assurance = false, messageTdB = "Bonjour") {
        let registration = immatriculation;
        let color = couleur;
        let weight = poids;
        let power = puissance;
        let tankCapacity = capaciteReservoir;
        let fuelLevel = niveauEssence;
        let seatQty = nbrePlace;
        let insurance = assurance;
        let dashboardMessage = messageTdB; 

    /**
     * @description mise en place des getter sur toutes les propriétés pour pouvoir les lire en dehors du constructor 
     */

        this.getRegistration = function() {
            return registration;
        }
        
        this.getColor = function() {
            return color;
        }

        this.getWeight = function() {
            return weight;
        }

        this.getPower = function() {
            return power;
        }

        this.getTankCapacity = function() {
            return tankCapacity;
        }

        this.getFuelLevel = function() {
            return fuelLevel;
        }

        this.getSeatQty = function() {
            return seatQty;
        }

        this.getInsurance = function() {
            return insurance;
        }

        this.getDashboardMessage = function () {
            return dashboardMessage;
        }


    /** 
     * @description mise en place des setter pour modifier certaines propriétés 
     */

        this.setInsurance = function (value) {
           insurance = value;
           dashboardMessage = (dashboardMessage + (insurance == true ? "\nAssurance OK" : "\n!!! Attention : Pas d'assurance !!!"));
        }

        this.setColor = function (value) {
            color = value;  
        }

        this.setDashboardMessage = function (value) {
            dashboardMessage = value;
        }

        this.setFuelLevel = function(value) {
            fuelLevel = value;
        }

    }

    // Méthode exposée : Repeindre la voiture
    /**
     * @method repaint
     * @param {string} newColorRequested - La nouvelle couleur demandée sur le véhicule.
     * @description Méthode exposée : Repeindre la voiture.
     */
    repaint (newColorRequested) {
        if (newColorRequested == this.getColor()) {
            this.setDashboardMessage(this.getDashboardMessage() + "\nCouleur identique. Merci pour le rafraichissement");
        } else {
            this.setColor(newColorRequested);
            this.setDashboardMessage(this.getDashboardMessage() + "\nVotre choix de couleur : " + this.getColor() + ". Merci.");
        }
    }

    // methode exposée : Faire l'appoint d'essence
    /**
     * @method refuel
     * @description Methode exposée : Faire l'appoint d'essence.
     * @param {number} newFuelQty - La quantité d'essence ajouté au réservoir du véhicule.
     */
	refuel(newFuelQty) {
		// capacitéAjoutMaxi == tankCapacity - fuelLevel

        /**
         * @description Pour savoir si on peut ajouter autant de carburant, et envoyer un message au tableau de bord.
         */
		if (newFuelQty <= this.getTankCapacity() - this.getFuelLevel() && newFuelQty >= 0) {
            this.setFuelLevel(this.getFuelLevel() + newFuelQty); 
            this.setDashboardMessage(this.getDashboardMessage() + "\nNouveau niveau d'essence : " + this.getFuelLevel() + " litres. Merci.");
		} else {
            this.setDashboardMessage(this.getDashboardMessage() + "\nErreur : " + newFuelQty + " litres d'essence impossible.");
        }
	
    }	
    
    // Méthode exposée : Se déplacer
    /**
     * @method move
     * @description Méthode exposée : Se déplacer.
     * @param {number} distanceToTest - La distance envisagée pour le déplacement avec le véhicule.
     * @param {number} averageSpeedToTest  - Le type de parcours prévu lors du déplacement avec le véhicule.
     */
    move(distanceToTest, averageSpeedToTest) {
        let fuelForTrip;
        
        if (averageSpeedToTest == 1) { 
            fuelForTrip = parseFloat(distanceToTest * 10 / 100); 
        } else if (averageSpeedToTest == 2) {
            fuelForTrip =  parseFloat(distanceToTest * 5 / 100);
        } else if (averageSpeedToTest == 3) {
            fuelForTrip = parseFloat(distanceToTest * 8 / 100) ;          
        } else {
            fuelForTrip = parseFloat(distanceToTest * 12 / 100);
        }

        /**
         * @description Evaluation de la possibilité de faire le déplacement prévu avec la quantité d'essence et le nombre de kilomeètres indiqués.
         */
        if (fuelForTrip <= this.getFuelLevel()) {
            this.setDashboardMessage(this.getDashboardMessage() + "\nTrajet OK. Consommation prévue : " + fuelForTrip + " litres \nNiveau restant de carburant après trajet : " + (this.getFuelLevel() - fuelForTrip) + " litres.");
        } else {
            this.setDashboardMessage(this.getDashboardMessage() + "\nErreur : trajet impossible avec cette quantité de carburant.")
        }

    }

    // Méthode exposée redéfinie toString()
    /**
     * @method toString
     * @description Méthode exposée redéfinie toString().
     * @returns {string} Message prévu en console pour identification du véhicule par 3 de ses caractéristiques.
     */
    toString() {
        let label = "Véhicule : " + this.getRegistration() + ", " + this.getPower() + " cv, coloris " + this.getColor();
        return label;
    }

}




/* test */
// creation d'un vehicule
/**
 * @description Véhicule témoin servant à controler le fonctionnement du programme.
 */
let car1 = new Voiture ("AZ-123-FE", "bleu", 950, 5, 50, this.fuelLevel, 4, this.insurance, this.dashboardMessage);


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
car1.refuel(estnombreAVirgule(parseFloat(prompt("Combien de carburant souhaitez-vous ajouter ?"))));


let distance = estnombreAVirgule(parseFloat(prompt("Indiquez la distance à parcourir : ")));
let averageSpeed = testRoad(estNombre(parseInt(prompt("Indiquez le type de trajet : \nVille : 1 \nRoute : 2 \nAutoroute : 3 \nAutoroute en excès de vitesse : 4"))));
/**
 * @description appel de la méthode move pour calcul de la possibilité de faire le parcours désiré.
 */
car1.move(distance, averageSpeed);




console.log(car1.getDashboardMessage());
console.log(car1.toString());

/* fonctions */
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
	while (isNaN(testNbre)) {
		testNbre = parseInt(prompt("Ceci n'est pas un nombre. Merci de taper un nombre."));
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
    while (isNaN(testNbre)) {
		testNbre = parseFloat(prompt("Ceci n'est pas un nombre. Merci de taper un nombre."));
	}
	return testNbre;
}