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
il nominativo dell'utente a cui è stato prestato*/


class Archivio {
  constructor() {
    const Arch = [];
  }
  add(loc, tit, aut, loan_client) {
    //const Arch = []; #TODO COME FACCIO A RENDERLO VISIBILE LASCIANDOLO NEL CONSTRUCTOR?
    this.tit = tit;
    this.aut = aut;
    this.loc = loc;
    this.loan_client = loan_client;
     //COSTRUTTORE DI OGGETTI CLASSE LIBRO 
    let New_doc= [this.tit,this.aut = aut,this.loc, this.loan_client];
    //NON PUSHAVA PERCHè LASCIANDOLO QUA OGNI VOLTA LO REINIZIALIZZI A ZERO
    Arch.push(New_doc)
  }

  /*cerca(titolo_cerca){

  }  */ 

}


//prova con div--> OUTPUT: 2 
//prova con Divh--> OUTPUT: diva, Scritto da Simona
let titolo_cerca = "TIT";

const Archivio_Pisa = new Archivio();
Archivio_Pisa.add("x568l",'Alice in Wonderland', "Lewis Carol", "G_G_6X");
Archivio_Pisa.add("x798l",'TIT1', "aUT1", "G_6_6X");
Archivio_Pisa.add("x398l",'TIT2', "aUT2", "G_9_6X");
Archivio_Pisa.add("x598l",'TIT', "aUT", "G_s_6X");
Archivio_Pisa.add("x298l",'TIT3', "aUT3", "G_0_6X");
//Archivio_Pisa.cerca(titolo_cerca);
console.log(Archivio_Pisa)
//console.log(libro5.tit)