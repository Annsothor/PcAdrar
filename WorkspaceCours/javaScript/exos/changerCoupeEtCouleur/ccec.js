
const hair = document.getElementById("hair");
const leftClick = document.getElementById("changeHairLeft");
const rightClick = document.getElementById("changeHairRight");
const blackHair = document.getElementById("blackHair");
const blondHair = document.getElementById("blondHair");
const blueHair = document.getElementById("blueHair");

let hairColorBlack = ["asset/img/hair-black-1.png", "asset/img/hair-black-2.png", "asset/img/hair-black-3.png"];
let hairColorBlond = ["asset/img/hair-blond-1.png", "asset/img/hair-blond-2.png", "asset/img/hair-blond-3.png"];
let hairColorBlue = ["asset/img/hair-turquoise-1.png", "asset/img/hair-turquoise-2.png", "asset/img/hair-turquoise-3.png"];

let coupe = 0
let color = 0
let hairColor = [hairColorBlack, hairColorBlond, hairColorBlue];

blackHair.addEventListener("click", () => {
    color = 0;
    hair.setAttribute("src", hairColor[color][coupe])
});

blueHair.addEventListener("click", () => {
    color = 2;
    hair.setAttribute("src", hairColor[color][coupe])
});

blondHair.addEventListener("click",() => {
    color = 1;
    hair.setAttribute("src", hairColor[color][coupe])
});

leftClick.addEventListener("click", () => {
    if(coupe>0){
    hair.setAttribute("src", hairColor[color][coupe-=1]);
    }
})

rightClick.addEventListener("click", () => {
    if(coupe<2){
    hair.setAttribute("src", hairColor[color][coupe+=1]);
    }
});
    
rightClick.addEventListener("click", () => {
    if (coupe === 2) {
        rightClick.classList.add("dontClickAgain");
    }
    else {
        leftClick.classList.remove("dontClickAgain");
    }
});

leftClick.addEventListener("click", () => {
    if (coupe === 0) {
        leftClick.classList.add("dontClickAgain");
    }
    else {
        rightClick.classeList.remove("dontClickAgain");
    }
});
// const hair = document.getElementById("hair");
// const rightArrow = document.getElementById("rightArrow");
// const leftArrow = document.getElementById("leftArrow");
// const black = document.getElementById("black");
// const blond = document.getElementById("blond");
// const turquoise = document.getElementById("turquoise");

// let color = "black";
// let type = 1;
// leftArrow.style.opacity = 0.5;

// rightArrow.addEventListener("click", function() {
//     if (type < 3) {
//         type +=1;
//         leftArrow.style.opacity = 1;
//     } 
//     rightArrow.style.opacity = (type === 3) ? 0.5 : 1;

//     hair.setAttribute("src", `asset/img/hair-${color}-${type}.png`);
// });

// leftArrow.addEventListener("click", function() {
//     if (type > 1) {
//         type -=1;
//         rightArrow.style.opacity = 1;
//     } 
//     leftArrow.style.opacity = (type === 1) ? 0.5 : 1;

//     hair.setAttribute("src", `asset/img/hair-${color}-${type}.png`);
// });

// black.addEventListener("click", function() {
//     color = "black";
//     hair.setAttribute("src", `asset/img/hair-${color}-${type}.png`);
// });

// blond.addEventListener("click", function() {
//     color = "blond";
//     hair.setAttribute("src", `asset/img/hair-${color}-${type}.png`);
// });

// turquoise.addEventListener("click", function() {
//     color = "turquoise";
//     hair.setAttribute("src", `asset/img/hair-${color}-${type}.png`);
// });
