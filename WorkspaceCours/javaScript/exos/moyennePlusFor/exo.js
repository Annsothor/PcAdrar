// Créer une fonction moyenne qui prend en paramètr un aray de plusieurs notes et retourne la moyenne calculée.
// dans cette fonction, on crée une boucle pour faciliter le calcul de la moyenne.
// Afficher en console un appel à la fonction moyenne en lui passant un tableau de plusieurs notes.Afficher

function moyenne(notes) {
    let somme = 0;
    for (let i = 0 ; i < notes.length ; i++) {
        somme += notes[i];
    }
    return somme / notes.length;
}

console.log(moyenne([12, 15, 14, 10, 18])); 

