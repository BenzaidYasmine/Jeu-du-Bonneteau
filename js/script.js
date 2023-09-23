
/**La méthode suffle() permet de mélanger les cartes et d'élire une carte rouge parmis les trois cartes black */
shuffle()

var score = 0;

function flip(event) {

    let element = event.currentTarget;

    if (element.className === "card") {
        if (element.style.transform == "rotateY(180deg)") {
            element.style.transform = "rotateY(0deg)";
            element.style.transform = "rotateY(0deg)";
        } else {
            element.style.transform = "rotateY(180deg)";
        }

    }
    let test = element.getElementsByClassName("card-img")[0];
    let cartePioche = element.getElementsByClassName("card-img")[0].getAttribute('src')

    if (cartePioche === "images/red.png") {
        test.style.boxShadow = "0px 3px 30px 13px gold";
        test.classList.add("shine-card")
        score = score + 10;
    } else {
        score = score - 5;
    }
    document.getElementById("score").innerHTML = score;
}

function shuffle() {
    let allcards = document.getElementsByClassName("card-img");
    //On genère un numéro de 0 à 2 
    let random = Math.floor(Math.random() * allcards.length);
    //On récupère cette carte selon le numéro qu'on a redonné 
    let card = allcards[random];
    //modifier la carte piocher( les trois sont des carte noir) par la carte rouge
    card.setAttribute('src', "images/red.png")

}

function play() {
    let allcards = document.getElementsByClassName("card");
    for (let i = 0; i < allcards.length; i++) {
        allcards[i].style.transform = "rotateY(0deg)";
    }
    let allimg = document.getElementsByClassName("card-img");
    for (let i = 0; i < allimg.length; i++) {
        allimg[i].setAttribute('src', "images/black.png");
        allimg[i].style = null;
    }
    shuffle();
}






/* Changer le CSS du html a partir du js 
 Object.assign(test.style, {
        boxShadow: "0px 3px 30px 13px gold",
        borderRadius: "20px",
        animationName: clignoter,
        animationIterationCount: infinite,
        transition: none,
  
});*/