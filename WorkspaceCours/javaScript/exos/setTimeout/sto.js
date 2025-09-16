// TODO 1: Dans une variable monTitre, récupérer le titre h1
// TODO 2: on execute le fonction setTimeout() qui prend 2 paramètres: une fonction et un nombre (les miliseconde)
// TODO 3: dans la fonction en param de setTimeout(),modifier dans le style de monTitre l'opacité  que l'on met à 1
// TODO 3-2: modifier dans le style de monTitre le background color  que l'on met à (couleur au choix)
// TODO: 3-3: assigner une chaine de caractères (au choix) au innerHTML de monTitre

const coucou = document.querySelector("h1")
const fond = document.querySelector("*")


setTimeout(() => {
    // console.log("on me voit");
    coucou.style.color = "chartreuse";
    coucou.style.opacity = "100%";
    fond.style.backgroundColor = "red";
}, 3000);

setTimeout(() => {
    coucou.style.textTransform = "uppercase";
    coucou.style.fontSize = "800%";
},5000);



// correction

// const titre = document.querySelector("h1");

// const txt = setTimeout(function(){
//     titre.textContent = "SALUT C'EST COOL";
//     titre.style.opacity = 1;
//     document.body.style.background = "royalblue";
// }, 2000);



