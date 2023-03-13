/*Partite dall’esercizio precedente introducendo un array
contenente oggetti con autore e titolo e ricercando i titoli che
corrispondono ad una sequenza di caratteri. 
Se corrisponde solo un libro visualizzate autore e titolo (ad es. nella console),
altrimenti il numero di libri corrispondenti.
Come per l’esercizio precedente, impostate i valori in variabili.*/


//definisco array di oggetti libreria
let libreria =  [{
  "autore": "Dante Alighieri",
  "titolo": "Divina Commedia"
},
{
  "autore": "Simona",
  "titolo": "Diva"
},
{
  "autore": "Chiara",
  "titolo": "Mi manca la fantasia"
}]

//setto var contatore a zero
let trovato=0;


//prova con div--> OUTPUT: 2 
//prova con Divh--> OUTPUT: diva, Scritto da Simona
let titolo_cerca = "Diva";


//funzione Cerca prende in input la libreria, il titolo da cercare e la var contatore
function Cerca(libreria, titolo_cerca, trovato) {

  //creo nuovo array vuoto in cui salverà titolo e autore libro
  let libri_trovati = []

  //per ogni oggetto libro in array libreria
  for (let libro of libreria){
    
    //in let titolo corrente ci salvo il titolo del libro corrente nel ciclo
    let titolo_corr = libro["titolo"]

    //Log di check per vedere se funzia e i valori nelle variabili sono i voluti
    console.log( "titolo corrente->", titolo_corr)
    console.log( "vedi se lo trova->", titolo_corr.toLowerCase().includes(titolo_cerca.toLowerCase())? "trovato":"non trovato");
  
    //se la versione lowercase del titolo corrente include la versione lowercase del titolo cercato
    //incremento var trovato e faccio push del titolo e autore 
    if (titolo_corr.toLowerCase().includes(titolo_cerca.toLowerCase())=== true) {
      trovato++
      libri_trovati.push([libro["titolo"] + ", Scritto da " + libro["autore"]])

      //Log di check per vedere se funzia e i valori nelle variabili sono i voluti
      console.log("vedi se aggiorna conta-->",trovato)
      console.log("vedi se aggiunge libri trovati ad array->", libri_trovati)
    }
  }
  //se più di un libro corrisponde restituisco la somma dei libri che matchano
  if (trovato>1){
    return trovato
  }
  //se ne corrisponde solo uno restituisco l'unico set libro_autore che ha matchato (valore di un array con un unico elemento)
  else {
    return libri_trovati
  }
}

document.getElementById("demo").innerHTML = Cerca(libreria, titolo_cerca, trovato); 
