const colori = [];

colori.push('red');
colori.push('green');

console.log(colori);

let numeri =[1,2,3,4];
numeri = "uno due tre";

const  num = [1,2,3,4,5,6,7,8,9];
//vogliamo avere 2,4,6,8 ecc...
//in php abbiamo usato la funzione array_map
//in js c'è la stessa opportunità ma cambia la sintassi e la logica della sintassi
//possiamo avere un approccio funzionale

const perDueArray = num.map(function(numero){

    return numero*2;

});

//arrow function

const res = num.map((numero) =>  {
    return numero*2;
})

//arrow function con un solo argomento nella callback possiamo evitare
//le parentesi tonde
const res2 = num.map(numero =>  {
    return numero*2;
})

//arrow function con un solo argomento nella callback possiamo evitare
//le parentesi tonde
//se la funzione di callback contiene una sola riga di codice possiamo 
//omettere le parentesi graffe e il return

const res3 = num.map(numero => numero*2);

console.log(perDueArray);
console.log("res1 "+res);
console.log("res2 "+res2);
console.log("res3 "+res3);

//function expression

let sum = (a,b)=> a+b;

//function expression

let sum = function(a,b){
    return a+b;
}
