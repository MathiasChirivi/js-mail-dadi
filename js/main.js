//Chiedi all’utente la sua email.
//Controlla che sia nella lista di chi può accedere,
//Stampa un messaggio appropriato sull’esito del controllo. 
//Versione di base usando prompt e console.log/alert.


//Creazione Email (Array)
const email = ['chirivimathias@gmail.com', 'mathiaschirivi@gmail.com', 'luca@icloud.com', 'antoniogirolamo@email.com' ];

let tuaEmail = prompt("Inserisci qua la tua email per controllare se sei in lista.").value;
console.log(tuaEmail);

let identificazioneEmail = false;

for (let i = 0; i < email.length; i++) {
    var Mail = email[i];
    console.log(Mail)
    
    if (Mail == tuaEmail) {
        identificazioneEmail = true;
    }
}
    let identificazione = email;

    if(identificazione == true){
        alert('Benvenuto, sei libero di accedere')
    } else {
        alert('non sei registrato è pregato di aggiungere un email esistente')
    }