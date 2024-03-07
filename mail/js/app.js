// ESERCIZIO MAIL
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// PSEUDO CODICE

// Per chiedere all'utente la sua email dovrò
    // Creare un input type email nel file html
        // Nel file js dovro creare una variabile per selezionare l'input che ho appena creato  
        // Creare un altra variabile per salvare il valore dell'input.
    // Creare un submit nel file html per inviare l'email inserita dall'utente al click
        // creo una variabile submitDomElement nel file js per selezionare il pulsante
        // nella funzione ascolta della variabile submitDomElement eseguirò il controllo 

// Per controllare che sia nella lista di chi puo accedere dovro
    // Crearmi una lista di email
        // inizializzo un array con delle email
    // Creo un ciclo per scorrere i valori dell'arrey all'interno della funzione di ascolto del pulsante
        // salvo l'elemento attuale dell'arrey in una nuova variabile
        // controllo se l'elemento attuale dell'arrey corrisponde al valore dell'input inserito dall'utente
            // IF...
            // Creo una nuova variabile fuori dal ciclo inizializzata con il valore false isEmailInArray 
            // la variabile appena creata la utilizzero nell'if per stampare il valore true al suo interno qualora l'email inserita -
            // dall'utente sia presente nell'array

// Stampo un messaggio 
    // sempre con l'istruzione condizionale if controllero la variabile isEmailInArray
        // SE nella variabile è scritto true stamperò "Sei abilitato all'accesso"
        // ALTRIMENTI "Accesso negato"

const inputDomElement = document.querySelector("input");
const submitDomElement = document.querySelector("button");

const emails = ["prova@gmail.it","info@prova.it","pippo@mail.it"];

submitDomElement.addEventListener("click", function(){
    let inputValue = inputDomElement.value;
    let email;
    let isUserEmailInArray = false;

    for (let i = 0; i < emails.length; i++){
        email = emails[i];

        if (inputValue === email){
            isUserEmailInArray = true;
        }
    }

    if(isUserEmailInArray === true){
        console.log("Accesso Consentito");
        submitDomElement.innerHTML = "Accesso Consentito"
    }
    else{
        console.log("Accesso Negato");
        submitDomElement.innerHTML = "Accesso Negato"
    }
})