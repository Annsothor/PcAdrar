// Le but de cet exercice est de simuler des combats entre des personnages
// Un personnage sera représenté par un nom, un nombre de points de vie, un nombre de points de mana, une force

// 1) Comment faire pour stocker toutes ces informations dans une seule variable ?
//Réponse : avec un tableau ou un objet(que je viens de découvrir)

// 2) Créer une variable firstPlayer et stocker dedans le personnage "Nico Minoru" qui a 50 points de vie, 100 points de mana, et 10 de force.
let firstPlayer = {
    nom : "Saja POP",
    vie : 50,
    mana : 100,
    force : 10,
}
// 3) Créer une variable secondPlayer et stocker dedans le personnage "Spiderman" qui a 120 points de vie, 0 point de mana, et 50 de force.
let secondPlayer = {
    nom : "Lady D-BUG",
    vie : 120,
    mana : 0,
    force : 50,
}
// 4) Donner 25 points de vie supplémentaires au premier personnage.
firstPlayer.vie += 25;
// 5) Créer une fonction displayInfo qui reçoit un personnage en entrée et qui affiche dans la console un message à propos de ce personnage (cf en dessous de la fonction).
function displayInfo(player) {
	console.log(player.nom + " a " + player.vie + " points de vie, " + player.mana + " points de mana et " + player.force + " points de force.")
}
// Par exemple, 
displayInfo(firstPlayer);
// devra afficher :
// Nico Minoru a 50 points de vie, 100 points de mana et 10 points de force.

// 6) Trouver l'erreur de français dans la fonction précédente (:innocent:) en la testant avec le second personnage.
displayInfo(secondPlayer); 
// erreur d'accord singulier/pluriel
// 7) Corriger la fonction pour faire disparaître cette erreur.
function displayInfo(player){
    let vie = " points de vie ";
    let mana = " points de mana ";
    let force = " points de force ";
    if(player.vie <=1) vie = " point de vie ";
    if(player.mana <=1) mana = " point de mana ";
    if(player.force <=1) force = " point de force ";
    console.log(player.nom + " a " + player.vie + vie + ", " + player.mana + mana + "et " + player.force + force + ".");
}
// https://legendary-digital-network-assets.s3.amazonaws.com/wp-content/uploads/2021/11/12201506/clean_259.jpg
// 8) Le deuxième personnage a perdu 3 de vie. Décrémenter la variable correspondante.
console.log(secondPlayer.nom + " se fait spidermaner et perd 3 points de vie ! ");
secondPlayer.vie -= 3;
console.log(secondPlayer.nom + " perd 3 points de vie ! ");
// 9) Vérifier que
displayInfo(secondPlayer);
// affiche bien : "Spiderman a 117 points de vie, 0 point de mana, et 50 de force."

// 10) Écrire une fonction directHit qui reçoit deux personnages en entrée et qui fait perdre des points de vie au second. Le nombre de points de vie perdus sera égal à la force du premier personnage.
function directHit(player1, player2) {
    console.log(player1.nom + " attaque " + player2.nom + " ! ");
	player2.vie -= player1.force;
    console.log(player2.nom + " perd " + player1.force + " points de vie !");
}

// 11) Utiliser la fonction précédente pour que le second personnage tape le premier personnage.
directHit(secondPlayer, firstPlayer);
// 12) Le second personnage boit une potion de soin ! Ajouter 3 points de vie à Spiderman.
secondPlayer.vie += 3;
console.log(secondPlayer.nom + " boit une potion de soin et gagne 3 points de vie !");
// 13) Le premier personnage va boire plusieurs potions.
let randomNumber = Math.floor(Math.random()*8)+2;
console.log(firstPlayer.nom + " s'apprête à boire " + randomNumber + " potions de vie !");
// TODO
displayInfo(firstPlayer);

// 14) Écrire une fonction qui reçoit deux personnages A et B en entrée et qui fait lancer un sort à A pour attaquer B
// Cette fonction doit :
// - vérifier que le personnage a au moins 10 points de mana ; si ce n'est pas le cas, la fonction est terminée
// - faire perdre 10 points de mana à A
// - faire perdre 25 points de vie à B
function castSpell(playerA, playerB) {
    if(playerA.mana < 10) {
        console.log(playerA.nom + " n'a pas assez de mana pour lancer un sort !");
        return;
    }
    playerA.mana -= 10;
    playerB.vie -= 25;
    console.log(playerA.nom + " lance un sort sur " + playerB.nom + " !");
    console.log(playerA.nom + " perd 10 points de mana !");
    console.log(playerB.nom + " perd 25 points de vie !");
}
castSpell(firstPlayer, secondPlayer);


while(firstPlayer.vie > 0 && secondPlayer.vie > 0) {
    directHit(secondPlayer, firstPlayer);
    displayInfo(firstPlayer);
    if(firstPlayer.vie > 0) {
        castSpell(firstPlayer, secondPlayer);
        displayInfo(secondPlayer);
    }
}
if(firstPlayer.vie > 0) {
    console.log(firstPlayer.nom + " est le gagnant !");
} else {
    console.log(secondPlayer.nom + " est le gagnant !");
}