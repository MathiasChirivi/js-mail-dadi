//Chiedi all’utente la sua email.
//Controlla che sia nella lista di chi può accedere,
//Stampa un messaggio appropriato sull’esito del controllo. 
//Versione di base usando prompt e console.log/alert.


//Creazione Email (Array)
const email = ['chirivimathias@gmail.com', 'mathiaschirivi@gmail.com', 'luca@icloud.com', 'antoniogirolamo@email.com' ];

let tuaEmail = document.getElementById('emailInserita').innerHTML;
console.log(tuaEmail);

let buttonLogin = document.getElementById('login');

let identificazioneEmail = false;

buttonLogin.addEventListener(`click`,
function(){

for (let i = 0; i < email.length; i++) {
    var Mail = email[i];
    console.log(Mail)
    
    if (Mail == tuaEmail) {
        identificazioneEmail = true;
    }
}
    if(identificazioneEmail == true){
       console.log('Benvenuto');
       document.getElementById('Identificato').innerHTML = (`Benvenuto : ${tuaEmail}`);
    } else{
        console.log('L email inserita non è corretta ')
        document.getElementById('nonIdentificato').innerHTML = (`Email non presente del DataBase`);
    }
  }
)