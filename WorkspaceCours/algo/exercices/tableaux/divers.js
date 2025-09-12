// Exercice divers_1 :	écrire une fonction qui retourne **la position** du plus grand élément d'un tableau.
// Exemple : positionBiggest([4,7,5,5,6]) retourne 1 car le plus grand est dans la case numéro 1
function returnBP(arr) {
    let max = arr[0];
    let position = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            position = i;
        }
    }
    return position;
}
console.log(returnBP([4,7,5,5,6]));
// Exercice divers_2 : écrire une fonction qui fait la somme de tous les éléments d'un tableau.
function sumArr(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(sumArr([4,7,5,5,6]));
// Exercice divers_3 : écrire une fonction qui retourne la somme des valeurs positives d'un tableau.
function sumPos(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }
    return sum;
}
console.log(sumPos([4,7,-5,5,-6]));
// Exercice divers_4 : En utilisant les deux fonctions précédentes, écrire une fonction qui retourne la somme des valeurs négatives d'un tableau.
function sumNeg(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            sum += arr[i];
        }
    }
    return sum;
}
console.log(sumNeg([4,7,-5,5,-6]));