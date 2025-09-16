const monTxt = document.querySelector("textarea");
const rendu = document.querySelector("div");

monTxt.addEventListener("keyup", function() {
    localStorage.setItem("duTexte", monTxt.value);
    rendu.innerHTML = marked(monTxt.value);
})