/*class Libro {
  constructor(loc, tit, aut, loan_client) {
    this.tit = tit;
    this.aut = aut;
    this.loc = loc;
    this.loan_client = loan_client;
  }
}*/

class Archivio {
  constructor() {
  const Arch=[];
  }
  add_doc(loc, tit, aut, loan_client) {

    this.tit = tit;
    this.aut = aut;
    this.loc = loc;
    this.loan_client = loan_client;
     //COSTRUTTORE DI OGGETTI CLASSE LIBRO 
    let New_doc= [this.tit,this.aut = aut,this.loc, this.loan_client];
    Arch.push(New_doc)
    /*const libro1 = new Libro("x568l",'Alice in Wonderland', "Lewis Carol", "G_G_6X" );
    const libro2 = new Libro("x598l",'TIT', "aUT", "G_s_6X");
    const libro3 = new Libro("x798l",'TIT1', "aUT1", "G_6_6X");
    const libro4 = new Libro("x398l",'TIT2', "aUT2", "G_9_6X");
    const libro5 = new Libro("x298l",'TIT3', "aUT3", "G_0_6X");
    console.log(libro5.tit)*/
  }

  cerca(titolo_cerca){

    //creo nuovo array vuoto in cui salverà titolo e autore libro
    //let libri_trovati = []

 /*   //per ogni oggetto libro in array libreria
    for (let libro of libreria){


      // COME ITERARE SU ATTRIBUTO (TITOLO) DI TUTTI GLI OGGETTI DENTRO OGGETTO (LIBRI IN ARCHIVIO)???????????______________________________________________________________
    
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
    }*/

  }   

}



//prova con div--> OUTPUT: 2 
//prova con Divh--> OUTPUT: diva, Scritto da Simona
let titolo_cerca = "TIT";

const Archivio_Pisa = new Archivio();
Archivio_Pisa.add();
Archivio_Pisa.cerca(titolo_cerca);

//console.log(libro5.tit)