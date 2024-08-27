//* I denne oppgaven vil det være noe kode som er definert i forkant, ikke fjern noe av denne, men dere skal noen steder fylle dem ut videre slik at koden fungerer.

/* Oppgave 1:  

Fiks loopen for randomArray slik at man får 100 tall pushet inn i randomArray med tall mellom 1 og 1000 (sjekkes via konsoll loggen under)
Tips: For å teste at loopen tar med 1 og 1000, prøv ut først med et lavere maks tall (f.eks 5)
*/
const randomArray = [];


//! fiks denne:
for (let i = 0; i < 100; i++) {
  randomArray.push(Math.floor(Math.random() * 1000) + 1);
}

console.log(randomArray); // expected result: 1-1000


/* Oppgave 2

Under er en funksjon filterArray som bruker .filter metoden på odds og evens const'ene. Du skal fikse getOdds og getEvens arrow funksjonene for å hente ut de riktige dataene til de forskjellige const'ene.  
*/
function filterArray(arr) {
  const odds = arr.filter(getOdds);
  const evens = arr.filter(getEvens);

// returnerer et object som gjør det lettere å referere til const'ene fra funksjonen senere:
  return { odds, evens };
}

//! fiks disse:
const getOdds = (num) => num % 2 !== 0; // legg til noe mer her for å finne alle tall som er oddetall (PSEUDO KODE: MODULO DELT PÅ TO ER IKKE STRICT LIK NULL);
const getEvens = (num) => num % 2 === 0; // legg til noe mer her for å finne alle tall som er oddetall (PSEUDO KODE: MODULO DELT PÅ TO ER STRICT LIK NULL);


/* Oppgave 3

fiks sumOfOdds og sumOfEvens ved å bruke .reduce metodene. Les her for å se hvordan syntaxen er:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

eksmepel: odds.reduce(riktig syntax)

tips: accumulator kan forkortes til acc, currentValue kan forkortes til curr
tips2: syntaxen ligner noe på det som blir gjort i oppgave 2, men det er 2 parametere istedet + et tall.

*/

// Dette kalles deconstructing som gjør at man kan referere til variabler på innsiden av et scope (i dette tilfelle fra innsiden av en funksjon):
const { odds, evens } = filterArray(randomArray);

//! fiks disse:
const sumOfOdds = odds.reduce((acc, curr) => acc + curr, 0);
const sumOfEvens = evens.reduce((acc, curr) => acc + curr, 0);

/* Oppgave 3.1

Skriv konsoll logger for:
    - sumOfOdds
    - sumOfEvens
    - lengden av odds
    - lengden av evens

bruk denne syntaxen i konsoll loggene (+ en ekstra ting etter variabelName hvor du skal finne lengden):
console.log("description of console log:", variabelName)

*/

//! skriv oppgave 3.1 svar her

console.log(sumOfOdds);
console.log(sumOfEvens);
console.log("Length of Odds", sumOfOdds);
console.log("Length of Evens", sumOfEvens);




/* Oppgave 4 

Under skal du lage en if else logikk som skal endre result og difference til en ny verdi. Litt av logikken er med allerede som sjekker om sumOfOdds er større enn sumOfEvens. Bruk denne tankegangen videre for å lage tilsvarende logikk hvis sumOfOdds er mindre enn sumOfEvens:

    - hvordan skal du skrive difference i dette tilfelle?
    - Skriv en string som passer til dette tilfelle

Lag i tillegg en logikk som sjekker hvis verken den første eller andre contitionalen ikke stemmer. Logisk sett betyr det at den sjekker om sumOfEvens og sumOfOdds er like, men i realiteten kjøres denne koden bare fordi de to andre conditionalene ikke stemmer:

    - hvordan skal du skrive difference i dette tilfelle?
    - Skriv en string som passer til dette tilfelle

*/

// Conditional Logic
let result = "";
let valueDifference = 0;

if (sumOfOdds > sumOfEvens) {
  valueDifference = sumOfOdds - sumOfEvens;
  result = "Sum of Odds is greater than Sum of Evens.";

} else if (sumOfOdds < sumOfEvens) {
  valueDifference = sumOfOdds - sumOfEvens;
  result = "Sum of Odds is smaler than Sum of Evens.";

} else {
result = "Sum of Odds is the same as the sum of Evens.";
}/* skriv videre her */


/* Oppgave 4.1

konsoll log valueDifference. Bruk samme syntax som i oppgave 3.1
*/
//! skriv oppgave 4.1 svar her
console.log('Value difference og Odds and evens', valueDifference);



/* Oppgave 5

Lag en ny conditional logikk under hvor man sjekker om man har flere av odds og evens som er lengst (syntax messig er det veldig likt som i oppgave 4, men man sjekker andre ting, ikke sumOfOdds og sumOfEvens). typeDifference skal endres til en template literal string med hensiktsmessig tekst for å forklare hva som skjer.

tips: Se tilbake hva du har skrevet i oppgave 3.1 for å finne lengdene du skal bruke i denne oppgaven.

eks: 

if (this > that) {
    typeDifference = `There are ${calcutate the difference here} more this than that`
}

*/

let typeDifference;

//! skriv conditional logikken her

if (odds.length > evens.length) {
  typeDifference = `There are ${odds.length - evens.length} more odds than evens`;
} else if (odds.length < evens.length) {
typeDifference = `There are ${odds.length - even-length} more even than odds`;
} else {
  typeDifference = "Length of Odds is the same as the length of Evens.";
}



/* Oppgave 6

- Finn gjennomsnittsverdien av oddetallene og partallene (burde være 2 nye variabler som returnerer gjennomsnittsverdien. Disse brukes i if/else du skal skrive som conditionals, men også for å vise fram riktig verdi i template literalen du skal lage)
- Lag en ny variabel for referanse til verdien du skal vise fram (tilsvarende slik typeDifference og valueDifference ble laget i de forrige oppgavene)
- Lag en ny conditional tilsvarende som i oppgave 4 og 5 for å få ut en template literal som vises på nettsiden.
- Lag en ny p tag i html filen med en id for referanse og skriv inn en ny document. getElementById for å få fanget den opp i javascript filen her:

eks: <p id="dinReferanseVerdi"></p>
eks: document.getElementByid("dinReferanseVerdiFraPtaggen").textContent = variabel


*/

//! definer en ny variabel for referanse til verdien du skal vise frem
// Beregn gjennomsnittsverdien av oddetallene og partallene
let averageOdd = odds.reduce((acc, curr) => acc + curr, 0) / odds.length;
let averageEven = evens.reduce((acc, curr) => acc + curr, 0) / evens.length;

//! skriv if else her
// Ny variabel for referanse til verdien som skal vises fram
let answer = "";

// Conditional for å sammenligne gjennomsnittsverdiene
if (averageOdd > averageEven) {
    answer = `Gjennomsnittet av oddetallene (${averageOdd.toFixed(2)}) er større enn gjennomsnittet av partallene (${averageEven.toFixed(2)}).`;
} else if (averageEven > averageOdd) {
    answer = `Gjennomsnittet av partallene (${averageEven.toFixed(2)}) er større enn gjennomsnittet av oddetallene (${averageOdd.toFixed(2)}).`;
} else {
    answer = `Gjennomsnittet av oddetallene og partallene er likt (${averageOdd.toFixed(2)}).`;
}

// Oppdater HTML-elementet med resultatet
document.getElementById("averageComparison").textContent = answer;

/* BONUS Oppgave 7 


Gjør noe tilsvarende oppgave 6, men som viser noe som ikke har blitt vist enda med odds og evens.

f.eks median, størst verdi, minst verdi, hvor mange verdier er over/under en viss verdi, er noen av verdiene enn viss verdi, er noen av verdiene fra odds og evens like.

*/


//! Koden under skal ikke røres. Den gjør at man får ut svaret på nettsiden:
document.getElementById("result-odds").textContent = `Sum of Odds: ${sumOfOdds}. There are ${odds.length} odds`;
document.getElementById("result-evens").textContent = `Sum of Evens: ${sumOfEvens}. There are ${evens.length} evens`;
document.getElementById("valueDifference").textContent = `Difference between sum of Odds and Evens: ${valueDifference}`
document.getElementById("typeDifference").textContent = typeDifference
// ny document.getElementById her for oppgave 6:

document.getElementById("result").textContent = result;
