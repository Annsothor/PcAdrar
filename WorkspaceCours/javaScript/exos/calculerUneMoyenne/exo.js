// créer deux variables noteA et noteB
// créer une fonction qui va calculer la moyenne et retourner le résultat

let noteA 
let noteB

function calculerMoyenne(noteA, noteB) {
    let moyenne = (noteA + noteB) / 2
    return moyenne
}

function calculerMoyenneBetter(notesArray) {
    let somme = 0
    for (let i = 0; i < notesArray.length; i++) {
        somme += notesArray[i]
    }
    let moyenne = somme / notesArray.length
    return moyenne
}

console.log (calculerMoyenne(15, 16));

let notes = [12, 14, 16, 18, 20]
console.log (calculerMoyenneBetter(notes));