// Reproduire le résultat suivant en créant trois variables (pour chaque personnage). 
// Faites une version avec concaténation et une version en template String.

// Salut ! Je suis Peter Parker, alias Spider-Man ! Vous n'auriez pas vu Mary-Jane par hasard ?

let crush = "Marry Janna";
let nom = "Peter Parker";
let aka = "Spider-Man";

let phraseConcat = "Salut ! Je suis" + nom + ", alias " + aka + " ! Vous n'auriez pas vu " + crush + " par hasard ?";
console.log(phraseConcat);


let phraseTemplate = `Salut ! Je suis ${nom}, alias ${aka} ! Vous n'auriez pas vu ${crush} par hasard ?`;
console.log(phraseTemplate);



const notes = [12, 17, 8,, 9, 11, 15, 14];
const [ francais, philo, lv1, lv2] = notes;
console.log(francais);

function melange(tab){
    for(let i = 0 ; i < tab.length ; i++){
        const random = Math.floor(Math.random() * tab.length);
        [tab[i], tab[random]] = [tab[random], tab[i]];
    }
    return tab;
}
console.log(melange([1,2,3,4,5,6]));


const groupe1 = ["Saja","Soda","Pop"];
const groupe2 = ["Kalista","Ezreal","Fizz"]

const liste = ["BestAdc", ...groupe1, ...groupe2];
const liste2 = liste;
liste2.push("Supp)");

console.log(liste);