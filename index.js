// Import stylesheets
import './style.css';

/* come def fun*/
function toCelsius(f) {
  return (5/9) * (f-32);
}
document.getElementById("funzione").innerHTML = toCelsius(77);


/*fun arrow-- prendi come parametri a e b e restuisci a * b */
let ARROW = (a, b) => a * b;
document.getElementById("funzione").innerHTML = ARROW(2,5);


let hello = "";
//PRE ARROW
hello = function() {
  return "Hello World!";
}

//CON ARROW
hello = () => {
  return "Hello World!";
}

//THIS è importante e si comporta diversamente a seconda se la funzione è di tipo arrow o no


//ARRAYS are special kind of object
//Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays. esempio di oggetto: 
const person = {firstName:"John", lastName:"Doe", age:46};
//person.firstName returns John

//ARRAYS
//It is a common practice to declare arrays with the const keyword.
const cars = ["Saab", "Volvo", "BMW"];
let car = cars[0]; // RETURNA SAAB
//RIASSEGNAMENTO 
cars[0] = "Opel";
//ACCEDERE A TUTTI GLI ELEMENTI
document.getElementById("demo").innerHTML = cars;// RETURN Saab,Volvo,BMW

cars.length   // Returns the number of elements
cars.sort()   // Sorts the array


const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.length;
let fruit = fruits[fruits.length - 1];// RESTITUISCE ULTIMO NUMERO, PER OTTENERE IL PRIMO [0]

//LOOPING Array Elements

// One way to loop through an array, is using a for loop:-->NON FARLO NON CONSIGLIATO------MEGLIO USARE Array.forEach()

let text = "<ul>";
//PRODUCE ELENCO PUNTATO DI OGNI ELEMENTO IN FRUIT
//combinato a myfunction, che per ogni elemento ci mette il tag li tra l elemento,  poi in questa funzione va a capo (ul)
//applica all array fruit un foreach alla funzione myfunction che si applica al value (quindi elemento corrente del for each)
fruits.forEach(myFunction);
text += "</ul>";

function myFunction(value) {
  text += "<li>" + value + "</li>";
}

//DUE MODI PER APPENDERE ELEMENTI AD UN ARRAY
fruits.push("Lemon");  // Adds a new element (Lemon) to fruits
fruits[fruits.length] = "Lemon";  // Adds "Lemon" to fruits, NON USA IL PUSH
fruits[6] = "Lemon";  // Creates undefined "holes" in fruits, perchè lo aggiunge in posizione 6 e le precedenti potrebbero essere vuote


/*WARNING !!
If you use named indexes, JavaScript will redefine the array to an object.
UN ARRAY NON E' UN OGGETTO PURO QUINDI ATTENZIONE A NON USARE GLI INDICI LETTERALI MA SOLO POSIZIONALI
After that, some array methods and properties will produce incorrect results.*/
const person2 = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
person.length;     // Will return 0
person[0];         // Will return undefined