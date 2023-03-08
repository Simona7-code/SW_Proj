/*https://www.sitepoint.com/javascript-truthy-falsy/
// https://www.w3schools.com/js/default.asp

ome of the rules that determine how non-Boolean values are translated into true or false values are a little bizarre. Understanding the concepts and their effect on comparison helps when debugging JavaScript applications.


The following values are always falsy:

false
0 (zero)
-0 (minus zero)
0n (BigInt zero)
'', "", `` (empty string)
null
undefined
NaN


Everything else is truthy. That includes:

'0' (a string containing a single zero)
'false' (a string containing the text “false”)
[] (an empty array)
{} (an empty object)
function(){} (an “empty” function)



------USA SEMPRE TRE UGUALI PER EVITARE PROBLEMI COI TIPI/BUG*/
//https://www.w3schools.com/js/js_comparisons.asp

/*The Nullish Coalescing Operator (??)
The ?? operator returns the first argument if it is not nullish (null or undefined).

Otherwise it returns the second argument*/

let name = null;
let text = "missing";
let result = name ?? text;
document.getElementById("demo").innerHTML = "The name is " + result; 
//restituisce the name is missing, ma se metti null in text e ueeeeeeeeee in name restituisce ueeeeeeeeee (insomma se il primo elemento è null da il secondo)


//LOOOPS--------------------------------------


//FOR è problematico ma si può usare
//FOR IN per scandire oggetti (le singole proprietà) e array (indice numerico); IN-->OGGETTO CON INDICE, ITERA SUGLI ATTRIBUTI DEGLI OGGETTI
//FOR OF si estende a tutti gli oggetti "iterabili" che sono un genere di oggetti specifico; OF-->ITERI SU OGGETTI CONTENUTO IN ARRAY
//        Oggetti iterabili--- https://www.w3schools.com/js/js_iterables.asp

//BREAK PER INTERROMPERE LOOP IN MOMENTI SPECIFICI
//CONTINUE PER SALTARE L'ESECUZIONE DEL LOOP PER DETERMINATI CASI (ES: se i ==3 salta l iterazione e va a successivo)


//EVENTI-------------------------------------------
//https://www.w3schools.com/js/js_events.asp

//GESTISCI ERRORI CON TRY CATCH
//https://www.w3schools.com/js/js_errors.asp
//err è l'oggetto che contiene l'errore ed è molto complesso
//console.log(errore) ha il potere di far vedere nel log il messaggio di errore


//CONVERSIONI DI TIPO------------------------------
//https://www.w3schools.com/js/js_type_conversion.asp
document.getElementById("demo").innerHTML =
Number("3.14") + "<br>" +
Number(Math.PI) + "<br>" +
Number("    ") + "<br>" +
Number("") + "<br>" +
//NON PUO CONVERTIRE:
Number("99 88") + "<br>" +
Number("John") + "<br>";

/*PER CONVERTIRE IN STRINGHE
String(x)
x.toString()*/
//attenta alle conversioni automatiche e non volute di tipo:
//----------------> "5"*"3" restituisce 15

//VEDI ALTRI AL LINK SOPRA--------------------

/*SCOPE--------------------------------------
VAR--> GLOBALE, anche se dichiarato dentro blocco resta visibile globalmente
LET-->LOCALE (iN BLOCCO -->TRA GRAFFE);  se dichiarata fuori da ogni blocco è globale (come tutte: let, var e const)*/




// HOISTING DELLE VARIABILI---------------------------
//https://www.w3schools.com/js/js_hoisting.asp
/* var galleggia globalmente, let e const al'interno dei loro blocchi*/