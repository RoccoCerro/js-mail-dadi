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

    let giocatore = Math.floor(Math.random() * 6) + 1
    console.log ("Giocatore ", giocatore)
    let computer = Math.floor(Math.random() * 6) + 1
    console.log ("Computer ", computer)

    if (giocatore > computer){
        console.log("Hai vinto")
    }
    else if (giocatore === computer) {
        console.log("Pari")
    }
    else {
        console.log("Hai perso")
    }