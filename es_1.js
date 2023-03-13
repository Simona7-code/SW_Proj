// Import stylesheets
import './style.css';

// Write Javascript code!
let titolo = "Divina Commedia";  
let autore = "Dante Alighieri";


//let both = autore.concat(" ", titolo);
//let tolow = both.toLowerCase();
//let iscontained= (tolow.includes("ale"))? "lo contiene":"non lo contiene";

//concateno autore e titolo separati da spazio, li trasformo in lowercase e vedo se include la versione lowercase della parola cercata
let iscontained= (autore.concat(" ", titolo).toLowerCase().includes("alI".toLowerCase()))? "lo contiene":"non lo contiene";


document.getElementById("demo").innerHTML = iscontained;



