// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
    // creo una variabile giocatore
        // inizializzo la variabile con la funzione Math.floor(Math.random()) 
    // creo una variabile computer 
        // inizializzo la variabile con la funzione Math.floor(Math.random()*6)+1 

// Stabilire il vincitore, in base a chi fa il punteggio più alto.
    // IF (giocatore > computer){
        // console.log(Vince il giocatore)
    // } else if (giocatore = computer)
        // console.log(pari) 
    // else
    // {
        // console.log(vince il pc)
    // }

const displayDomElement = document.getElementById("display");
const buttonDomElement = document.querySelector("button");

buttonDomElement.addEventListener("click", function(){

    let giocatore = Math.floor(Math.random() * 6) + 1
    console.log ("Giocatore ", giocatore)
    let computer = Math.floor(Math.random() * 6) + 1
    console.log ("Computer ", computer)

    let num = "User " + giocatore + " - " + computer + " PC"
    let risultato = "Hai perso";

    if (giocatore > computer){
        risultato = "Hai vinto";
    }
    else if (giocatore === computer) {
        risultato = "Pari";
    }

    displayDomElement.innerHTML = num + " <br> " + risultato;
    })

// contare le partite vinte dal giocatore e quelle vinte dal pc
    // creo un contatore user e uno pc
    // incremento di uno il contatore user ogni volta che giocatore vince
    // incremento di uno quello di pc ogni volta che pc vince