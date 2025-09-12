// créer une fonction qui va recevoir en paramètre un tableau de 3 notes du bac (Français, Math, Philo).
// Cette fonction a pour but de nous renvoyer du texte en fonction de la moyenne des 3 notes qu'on lui passe:
// si la moyenne est supérieure ou égal à 15 on retourne "très bien"
// si la moyenne est supérieure ou égal à 10 on retourne "assez bien"
// sinon on retourne "refus"

function moyenneMention2(array){
    let moyenne = (array[0] + array[1] + array[2]) / array.length;
    if(moyenne >= 15){
        return "woaouh, la classe à Dallas!";
    } else if(moyenne >= 10){
        return "c'est juste mais ça passe";
    } else {
        return "trop nul, désolé";
    }
}

console.log(moyenneMention2([12, 8, 3]));
console.log(moyenneMention2([18, 16, 20]));
console.log(moyenneMention2([12, 14, 11]));
