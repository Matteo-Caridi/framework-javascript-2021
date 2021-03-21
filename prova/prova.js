const numeri =[1,2,3,4,5,6];

// const XDUE = numeri.map(function(numero){
//     return numero*2;
// });

// console.log(XDUE);
console.log("Array numeri");
console.log(numeri);
const quadratiPari = numeri.map(n=> n*n).filter(n=>n%2===0);

console.log("Array dei quadrati pari");
console.log(quadrati);

const quadratiDispari