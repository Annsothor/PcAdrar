// 1. Je créer un interval qui affiche un message toutes les secondes
// let monInterval = setInterval(function () {
//     console.log("Hello toutes les secondes !");
// }, 1000);

// // 2. Ici j'arrête l'interval après 5 secondes
// setTimeout(function () {
//     clearInterval(monInterval);
//     console.log("Interval arrêté !");
// }, 5000);



//Créer un compte à rebours qui se déclenche quand on clique sur un titre <h1> de la page.

//- Au clic sur le titre, un compte à rebours de 3 secondes commence
//- Le titre affiche successivement : "3", "2", "1", puis "GO GO GO"
//- Chaque changement se fait toutes les secondes
//pensez a arreter l'interval à la fin !

// mon essai merdique:
// const letsGo = document.querySelector("h1");
// let timer = ["3", "2", "1", "GO GO GO"];

//     letsGo.addEventListener("click",() => {
//         let i=0;
//         let monInterval = setInterval(() => {
//             i++;
//             console.log(timer[i]);
//         },1000);
//         console.log("coucou");
//         if(i=5) {  
//             clearInterval(monInterval);
//         }
//         });


// correction

const monTitre = document.querySelector("h1");
let timer = 3;

monTitre.addEventListener("click", function () {

    const countDown = setInterval(function () {

        if (timer > 0) {
            monTitre.textContent = timer; //Modifie tous les textes, même caché par le css
            // monTitre.innerText = timer; //Modifie que les textes visible
        }
        else {
            monTitre.textContent = "GO GO GO";
            console.log(timer);
            //Pour ne pas gaspiller des performances pour rien 
            clearInterval(countDown);
        }
        console.log(timer);
        timer--;
    }, 1000);
})

//  ou:

// monTitre.addEventListener("click", function () {

//     function countDown() {
//         if (timer > 0) {
//             monTitre.textContent = timer; //Modifie tous les textes, même caché par le css
//             // monTitre.innerText = timer; //Modifie que les textes visible
//             console.log(timer);
//             timer--;
//             // Programmer la prochaine exécution dans 1 seconde
//             setTimeout(countDown, 1000);
//         }
//         else {
//             monTitre.textContent = "GO GO GO";
//             console.log(timer);
//             // Pas besoin de clearTimeout car on n'appelle plus setTimeout
//         }
//     }
//     countDown();
// });