const titre = document.querySelector('h1');
const boutons = document.querySelectorAll('button');
const image = document.querySelector('img');

boutons[0].addEventListener('click', function() {
    titre.classList.add("maCouleur");
    image.src = "../../../../image/trombinoscope dev ern 31 25 02/sajaBoys.png";
});

boutons[1].addEventListener('click', function() {
    titre.classList.remove("maCouleur");
    image.src = "../../../../image/trombinoscope dev ern 31 25 02/William.png";
});

boutons[2].addEventListener('click', function() {
    titre.classList.toggle("maCouleur");
    image.src = (image.src.includes("William.png")) ? "../../../../image/trombinoscope dev ern 31 25 02/sajaBoys.png" : "../../../../image/trombinoscope dev ern 31 25 02/William.png";
});