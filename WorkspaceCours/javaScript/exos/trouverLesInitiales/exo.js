// créer deux variables nom et prénom
// créer un tableau phrase et on y ajoute, le nom, le prénom, les initiales
// afficher lke tableau dans la console le nom le prénom et les initiales

let nom = "Sajaprime"
let prenom = "William"
let phrase = [nom, prenom, nom[0] + prenom[0]]
console.log(phrase);
// on peut aussi créer un variable initiales:
let initiales = nom[0] + prenom[0]
phrase.push(initiales);
console.log(phrase);