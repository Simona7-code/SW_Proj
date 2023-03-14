/*A partire dal codice realizzato nell’esercizio precedente realizzate
una classe "archivio" contenente un metodo che restituisce un
array di libri che corrispondono ad una certa stringa.

L’array in cui eseguire la ricerca è caricato in una variabile nella
stassa classe tramite il costruttore.

Il singolo libro può essere a sua volta rappresentato da una classe
Libro con i quattro attributi necessari, specificati nella consegna
del progetto.
------------------------------------------------------------------
L'intero archivio dei documenti è rappresentato come un array contenente i documenti conservati nella biblioteca.

Ogni libro è rappresentato da un oggetto con quattro attributi:

la sua posizione nella biblioteca, che serve anche come identificatore unico
l'autore
il titolo
il nominativo dell'utente a cui è stato prestato
-------------------------------------------------------------------------------------------------------------*/



//classe libro crea un oggetto libro e lo resituisce
class Libro {
  constructor(loc, tit, aut, loan_client) {
    this.tit = tit;
    this.aut = aut;
    this.loc = loc;
    this.loan_client = loan_client;
    let libro = {
      titolo : this.tit,
      autore : this.aut, 
      posizione : this.loc, 
      cliente_prestito : this.loan_client
    };
    return libro;
  }
}

//classe archivio è un array che conterrà oggetti libri e permette di fare azioni su essi
class Archivio {

  //costrutttore crea array vuoto
  constructor(archivio = []) {
    this.archivio = archivio;
  }

  //metodo add crea oggetto libro usando i suoi par e sfruttando classe Libro e lo pusha nell'array dell'archivio
  add(loc, tit, aut, loan_client) {
    let New_doc = new Libro(loc, tit, aut, loan_client);
    this.archivio.push(New_doc);
  }

  //metodo che permette di ricercare se una stringa voluta è contenuto nei titoli dei libri in archivio
  cerca(titolo) {

    //creo nuovo array vuoto in cui salverà titolo e autore libro
    let libri_trovati = [];
    let trovato=0;

    //per ogni oggetto libro in array libreria
    for (let libro of this.archivio){
      let titolo_corr = libro["titolo"];

      //Log di check per vedere se funzia e i valori nelle variabili sono i voluti
      console.log(titolo_corr)
      console.log( "titolo corrente->", titolo_corr)
      console.log( "vedi se lo trova->", titolo_corr.toLowerCase().includes(titolo_cerca.toLowerCase())? "trovato":"non trovato");

      //se la versione lowercase del titolo corrente include la versione lowercase del titolo cercato
      //incremento var trovato e faccio push del titolo, autore, posizione e stato prestito
      if (titolo_corr.toLowerCase().includes(titolo_cerca.toLowerCase())=== true) {
        trovato++
        libri_trovati.push([libro["titolo"] + ", Scritto da " + libro["autore"]+ ", in posizione "+ libro["posizione"], (libro["cliente_prestito"])? "attualmente in prestito":"attualmente NON in prestito"])

        //Log di check per vedere se funzia e i valori nelle variabili sono i voluti
        console.log("vedi se aggiorna conta-->",trovato)
        console.log("vedi se aggiunge libri trovati ad array->", libri_trovati)
      }
    }

    //se più di un libro corrisponde restituisco la somma dei libri che matchano
    if (trovato==0){
      return "Non ci sono libri corrispondenti alla ricerca"
    }

    //se ne corrisponde solo uno restituisco l'unico set libro_autore che ha matchato (valore di un array con un unico elemento)
    else {
      return libri_trovati
    }
  }
}

//prova con TIT--> 4 libri
//prova con al--> 1 libro
//prova con X--> stringa non corrispondenza ricerca
let titolo_cerca = "TIT";

const Archivio_Pisa = new Archivio();

Archivio_Pisa.add("x568l",'Alice in Wonderland', "Lewis Carol", "G_G_6X");
Archivio_Pisa.add("x798l",'TIT1', "aUT1", "G_6_6X");
Archivio_Pisa.add("x398l",'TIT2', "aUT2");
Archivio_Pisa.add("x598l",'TIT', "aUT", "G_s_6X");
Archivio_Pisa.add("x298l",'TIT3', "aUT3");

//Archivio_Pisa.cerca(titolo_cerca);

console.log(Archivio_Pisa);

document.getElementById("archivio").innerHTML = Archivio_Pisa.cerca(titolo_cerca);
