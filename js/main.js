//Chiedi all’utente la sua email.
//Controlla che sia nella lista di chi può accedere,
//Stampa un messaggio appropriato sull’esito del controllo. 
//Versione di base usando prompt e console.log/alert.


//Creazione Email (Array)
const email = ['chirivimathias@gmail.com', 'mathiaschirivi@gmail.com', 'luca@icloud.com', 'antoniogirolamo@email.com' ];


let buttonLogin = document.getElementById('login');
let buttonClear = document.getElementById('clear');

buttonLogin.addEventListener(`click`,
function(){
    
    let tuaEmail = document.getElementById('emailInserita').value;
    console.log(tuaEmail);

    let identificazioneEmail = false;

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

buttonClear.addEventListener(`click`,
function(){
    document.getElementById('Identificato').innerHTML = '';
    document.getElementById('nonIdentificato').innerHTML = '';
    document.getElementById('emailInserita').value = '';
}

)