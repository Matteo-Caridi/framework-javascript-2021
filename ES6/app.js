
// expression function
const trovaDispari = numero => numero % 2 !== 0

const numeri = [4, 7, 5, 4, 2, 8, 9, 9, 2, 1,]
console.log(numeri);

let dispari = numeri.filter(trovaDispari)
console.log("trova dispari function expression", dispari);

dispari = numeri.filter(numero => numero % 2 !== 0)
console.log("trova dispari ma come funzione anonima", dispari);

//Funzione di ordine superiore

const parole = ['latte', 'casa', 'mario', 'mela'];

const findWord = word => item => item === word;

function findWord (word){
    return function (item){
        return item === word;
    }
}

const result = parole.filter(findWord('mela'));
console.log("Parola trovata:");
console.log(result);


/**
numeri.filter(function(numero){
    return numero % 2 !== 0
})
*/