// Vous devez créer un objet, ce dernier doit contenir un nouvel objet, 
// ce nouvel doit contenir un objet également 
// et dans ce dernier vous devez créer un tableau
// Le but, c'est d'afficher un élément de notre tableau via les différentes couches d'objet.

let player = {
    "nom" : "Saja",
    "charisme" : 50,
    "energie" : 2,
    "intellect" : 70,
    "poolChamp" : {
        "mainChamp" :{
            "best" : {
                "one" : "Aphélios",
                "two" : "Vayne",
                "skin" : ["légendaire", "générique", "promo"]
            }  
        },
        "stuckChamp" : {
            "best" : "kalista",
            "best2" : "FizzSup"
        }
    }
}
console.log("SajaPrime est " + player.poolChamp.mainChamp.best.skin[0]);

// (Bonus) Créer trois objets : 
// un objet bibliothèque avec ses propriétés avec un objet livre à l'intérieur avec ses propres propriétés
// un objet film (vide) et vous allez devoir ajouter 4 clés avec valeurs en dehors de l'objet film
// un objet de votre choix ou vous allez devoir créer et justifier 4 clés/valeurs (avec des commentaires).