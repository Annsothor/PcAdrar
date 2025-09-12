const titre = document.getElementById("titre");
const txt = document.body.getElementsByTagName("p");

function ajoutTexte(pseudo, duTexte){
    const newTxt = document.createElement("p");
    newTxt.innerHTML = `<strong>${pseudo}</strong> : ${duTexte}`;
    document.body.appendChild(newTxt);
}

const lien = document.body.getElementsByTagName("a")[0];

lien.setAttribute("href", "https://www.google.com");

ajoutTexte("Saja", "Prime");
ajoutTexte("Soda", "Pop");
ajoutTexte("Lady", "Dbug");
ajoutTexte("Saja", "Boys");
ajoutTexte("Smirk", "Cat");

// const texteTab = Array.from(txt);
// texteTab.map(txt => txt.innerHTML = "LOL HACKED");

// console.log(texteTab);


// const texteTab = Array.from(txt);
// texteTab.map(txt => txt.innerText = "LOL HACKED");

// console.log(texteTab);