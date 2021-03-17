// abbiamo una serie di numeri e vogliamo tirare fuori
// solo i numeri dispari

//progettiamo una funzione e usiamo Expression Function

const trovaDispari = (function (numero) {
    return (numero % 2 !== 0);
})



const numeri = [4, 7, 5, 4, 2, 8, 9, 9, 2, 1]

console.log(numeri);

//in js per filtrare un array usiamo il metodo filter
//il metodo filter invoca la funzione anonima che si trova
//dentro la variabile trovaDispari
const dispari = numeri.filter(trovaDispari);
console.log(dispari);


//avremmo potuto sfruttare direttamente la arrow function
const trovaDispari2 = numero => numero % 2 !== 0;
const dispari2 = numeri.filter(trovaDispari2);

//per essere ancora più sintetici avremmo potuto scrivere

const dispari3 = numeri.filter(numero=> numero%2!==0);
console.log("trova dispari con funzione anonima ",dispari3);