// Déclarer deux variables, carte1 qui a poiur valeur "Tortank" et carte2 qui a pour valeur "Typhlosion".
// Faites en sorte d'afficher ces variables en console, puis trouver une solution pour que carte1 obtienne la valeur "Typhlosion" et carte2 "Tortank".
let carte1 = "Tortank";
let carte2 = "Typlosion";

console.log("carte1 = " + carte1 + " , carte2 = " + carte2);

let temp=carte1;
carte1=carte2;
carte2=temp;

console.log("carte1 = " + carte1 + " , carte2 = " + carte2);
