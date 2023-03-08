/*Partite dall’esercizio precedente introducendo un array
contenente oggetti con autore e titolo e ricercando i titoli che
corrispondono ad una sequenza di caratteri. 

Se corrisponde solo un libro visualizzate autore e titolo (ad es. nella console),
altrimenti il numero di libri corrispondenti.

Come per l’esercizio precedente, impostate i valori in variabili.*/

let titolo_cerca = "Div";
let trovati = 0;


let libreria =  [{
    "autore": "Dante Alighieri",
    "titolo": "Divina Commedia"
},
{
    "autore": "Simona",
    "titolo": "divho"
},
{
    "autore": "Chiara",
    "titolo": "Mi manca la fantasia"
}]

libreria.forEach(function (libro, titolo_cerca) {
    const titolo_true = libro.titolo;
    
    console.log(titolo_true);
    console.log(titolo_cerca);
    console.log(titolo_true.toLowerCase().includes(titolo_cerca)? "trovato":"non trovato");

    if (titolo_true.toLowerCase().includes(titolo_cerca)) {
        trovati++;
    }
    }
    console.log(trovati);
    //console.log(titolo_true.toLowerCase().includes(titolo_cerc)? "trovato":"non trovato")
});
//let titolo_cerc="div"
/*function cerca_in_titolo(titolo_cerc) {
      return libreria.titolo.includes(titolo_cerc)? "trovato":"non trovato"   
}*/

document.getElementById("demo").innerHTML = trovati; 
