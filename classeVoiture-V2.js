class Voiture {
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

        /* mise en place des getter sur toutes les propriétés pour pouvoir les lire en dehors du constructor */
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


        /* mise en place des setter pour modifier certaines propriétés */

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
    repaint (newColorRequested) {
        if (newColorRequested == this.getColor()) {
            this.setDashboardMessage(this.getDashboardMessage() + "\nCouleur identique. Merci pour le rafraichissement");
        } else {
            this.setColor(newColorRequested);
            this.setDashboardMessage(this.getDashboardMessage() + "\nVotre choix de couleur : " + this.getColor() + ". Merci.");
        }
    }

    // methode exposée : Faire l'appoint d'essence
	refuel(newFuelQty) {
		// capacitéAjoutMaxi == tankCapacity - fuelLevel

		// savoir si on peut ajouter autant de carburant
		if (newFuelQty <= this.getTankCapacity() - this.getFuelLevel() && newFuelQty >= 0) {
            this.setFuelLevel(this.getFuelLevel() + newFuelQty); 
            this.setDashboardMessage(this.getDashboardMessage() + "\nNouveau niveau d'essence : " + this.getFuelLevel() + " litres. Merci.");
		} else {
            this.setDashboardMessage(this.getDashboardMessage() + "\nErreur : " + newFuelQty + " litres d'essence impossible.");
        }
	
    }	
    
    // Méthode exposée : Se déplacer
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

        if (fuelForTrip <= this.getFuelLevel()) {
            this.setDashboardMessage(this.getDashboardMessage() + "\nTrajet OK. Consommation prévue : " + fuelForTrip + " litres \nNiveau restant de carburant après trajet : " + (this.getFuelLevel() - fuelForTrip) + " litres.");
        } else {
            this.setDashboardMessage(this.getDashboardMessage() + "\nErreur : trajet impossible avec cette quantité de carburant.")
        }

    }

    // Méthode exposée redéfinie toString()
    toString() {
        let label = "Véhicule : " + this.getRegistration() + ", " + this.getPower() + " cv, coloris " + this.getColor();
        return label;
    }




}




/* test */
// creation d'un vehicule
let car1 = new Voiture ("AZ-123-FE", "bleu", 950, 5, 50, this.fuelLevel, 4, this.insurance, this.dashboardMessage);


// question sur l'assurance
car1.setInsurance(testOuiNon(prompt("Le vehicule est-il assuré ? O/N")) == "O" ? true : false);


// question sur la couleur
car1.repaint(testColor(prompt("Quel coloris souhaitez-vous avoir ? \nNoir - Bleu - Rouge - Gris - Blanc")));


// question sur la quantité de carburant à ajouter
car1.refuel(parseFloat(prompt("Combien de carburant souhaitez-vous ajouter ?")));


// question sur le déplacement
let distance = parseFloat(prompt("Indiquez la distance à parcourir : "));
let averageSpeed = testRoad(parseInt(prompt("Indiquez le type de trajet : \nVille : 1 \nRoute : 2 \nAutoroute : 3 \nAutoroute en excès de vitesse : 4")));
car1.move(distance, averageSpeed);




console.log(car1.getDashboardMessage());
console.log(car1.toString());

/* fonctions */
function testOuiNon(value) {
    value = value.toUpperCase();
    while (value != "O" && value != "N") {
        value = prompt("Erreur. \nVeuillez répondre par Oui ou Non : O/N");
        value = value.toUpperCase();
    }
    return value;
}

function testColor(value) {
    value = value.toLowerCase();
    while (value != "noir" && value != "bleu" && value != "rouge" && value != "gris" && value != "blanc") {
        value = prompt("Erreur. \nVeuillez répondre par Noir - Bleu - Rouge - Gris - Blanc");
        value = value.toLowerCase();
    }
    return value;
}

function testRoad(value) {
    while (value != 1 && value != 2 && value != 3 && value != 4) {
        value = parseInt(prompt("Erreur. \nVeuillez répondre par \nVille : 1 \nRoute : 2 \nAutoroute : 3 \nAutoroute en excès de vitesse : 4"));
    }
    return value;
}