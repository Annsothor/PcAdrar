let player = {
    "nom" : "Saja",
    "charisme" : 50,
    "energie" : 2,
    "intellect" : 70,
    "kalista" : 3
}

console.log(player);
console.log("nom: " + player.nom)
console.log("charisme: " + player.charisme)

console.log(player.hasOwnProperty("intellect"))
console.log(player.hasOwnProperty("motivation"))

// exemple du cours
let voiture = {
    "nbChevaux" : 500,
    "vitesseMax" : 450,
    "faiblesse" : ["accélération","adhérence"]
}
 let afficher = "vitesseMax";

console.log(voiture.vitesseMax);
console.log(voiture["vitesseMax"]);
console.log(voiture [afficher]);
console.log(voiture.faiblesse[1]);


 voiture.marque = "BMW";
 delete voiture.marque;
 console.log(voiture.hasOwnProperty("vitesseMax"));

//  version const

const voiture2 = {
    "nbChevaux" : 500,
    "vitesseMax" : 450,
    "faiblesse" : ["accélération","adhérence"],
    "pilotes" : { 
        "pilote" : "Jack",
        "copilote" : "Jeannine"
      }
}

console.log(voiture.vitesseMax);
console.log(voiture["vitesseMax"]);
console.log(voiture [afficher]);
console.log(voiture.faiblesse[1]);
