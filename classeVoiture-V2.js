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
     * @param {string} immatriculation - Le numéro d'immatriculation du véhicule.
     * @param {string} couleur - Le coloris du véhicule du véhicule.
     * @param {number} poids - Le poids du véhicule.
     * @param {number} puissance  - La puissance fiscale du véhicule.
     * @param {number} capaciteReservoir - La capacité du réservoir du véhicule.
     * @param {number} nbrePlace - Le nombre de place dans le véhicule.
     */
    constructor (immatriculation, couleur, poids, puissance, capaciteReservoir, nbrePlace) {
        let registration = immatriculation;
        let color = couleur;
        let weight = poids;
        let power = puissance;
        let tankCapacity = capaciteReservoir;
        let fuelLevel = 5;
        let seatQty = nbrePlace;
        let insurance = false;
        let dashboardMessage = "Bonjour"; 

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
            this.setDashboardMessage(this.getDashboardMessage() + "\nErreur : " + newFuelQty + " litres d'essence impossible. En excès par rapport à la taille du réservoir.");
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


