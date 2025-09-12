const bar = document.querySelector('.bar');

// addEventListener("scroll", function(){
//     console.log(`
//         Hauteur page : ${this.document.body.scrollHeight}
//         Hauteur affichage : ${innerHeight}
//         Scroll Position : ${pageYOffset}`)
// })

addEventListener("scroll", function(){
    const scrollMax = document.body.scrollHeight - this.innerHeight;
    const onEstOu = pageYOffset / scrollMax * 100;
    bar.style.width = onEstOu + "%";
})