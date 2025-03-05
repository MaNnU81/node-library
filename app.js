


import { question } from 'readline-sync';
import Library from "./model/library.js";


const library = new Library('Berio')

console.log(`Benvenuti in Super Library Manager 4.2\n\n`);

while (true) {
    const introString = "Ecco le funzionalita:\n" +
                    "1)aggiungi utente\n" +
                    "2)aggiungi libro\n" +
                    "3)lista utenti\n" +
                    "4)aggiungi libri\n" +
                    "5)esci\n" +
                    "inserisci il numero della funzionalita desiderata\n"

    const answer = question(introString);
    console.log(`ecco la risposta ` + answer);

    switch (answer) {
        case '1':
        addUser();
            break;
        case '2':
            addBook();
            break;
        case '3':
            listUser();
            break;
        case '4':
            listBook();
            break;
        case '5':
            process.exit(0); 


            break;
        default:
            console.log('scelta non valida');

            break;
    }

}




function addUser(){
const id = question("Qual e' il tuo numero tessera?");
const name = question("Qual e' il tuo nome e cognome?");

const user = {id, name}
library.addUser(user);
console.log(`hai inserito correttamente l'utente ${name}`);

}

function addBook(){
    
}

function listUser(){
    
}

function listBook(){
    
}

