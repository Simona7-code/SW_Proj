// Import stylesheets
import './style.css';

// Write Javascript code!
let titolo = "Divina Commedia";  
let autore ="Dante Alighieri";
//let both = autore.concat(" ", titolo);
//let tolow = both.toLowerCase();
//let iscontained= (tolow.includes("ale"))? "lo contiene":"non lo contiene";
let iscontained= (autore.concat(" ", titolo).toLowerCase().includes("ale"))? "lo contiene":"non lo contiene";

document.getElementById("demo").innerHTML = iscontained;
