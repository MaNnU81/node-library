


import { question } from 'readline-sync';
import Library from "./model/library.js";


const library = new Library('Berio')

console.log(`Benvenuti in Super Library Manager 4.2\n\n`);

while (true) {
    const introString = "Ecco le funzionalita:\n" +
                    "1)aggiungi utente\n" +
                    "2)aggiungi libro\n" +
                    "3)lista utenti\n" +
                    "4)lista dei libri\n" +
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
const id = question("inserisci il  numero di tessera ");
const name = question("inserisci il nome ed il cognome ");

const user = {id, name}
library.addUser(user);
console.log(`hai inserito correttamente l'utente ${name}`);
}
isbn, title, author
function addBook(){
     const  isbn = question("inserisci il codice isbn del libro ");
     const  title = question("inserisci il titolo del libro ");
     const  author = question("inserisci l'autore del libro ")

     const book = {isbn, title, author};
     console.log(`hai inserito correttamente il libro ${title}`);
}

function listUser(){
    
    console.log("Lista degli utenti:", library.listUsers());
   
}

function listBook(){
    
    console.log("Lista dei libri:", library.listBooks());
}

