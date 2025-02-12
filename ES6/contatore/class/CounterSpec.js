import Counter from './Counter.js'; // require 
// import CounterElement from './CounterElement.js';

let contatore = new Counter()
contatore.increment()
contatore.increment()

console.log("01 - dopo due incrementi senza argomenti nel costruttore", contatore.value == 2);


contatore = new Counter(10)
contatore.increment()
contatore.increment()

console.log("02 - partendo da 10 più due incrementi il valore dev'essere 12", contatore.value == 12); //true

/**
 * 1 arg partenza
 * 2 arg min
 * 3 arg max
 */

contatore = new Counter(10, 10, 15)
contatore.increment() //11
contatore.increment() // 12
contatore.increment() // 13

console.log("03 - partendo da 10 mi aspetto che il contatore vale 13", contatore.value == 13)

contatore.increment() // 14
contatore.increment() // 15
contatore.increment() // 15
contatore.increment() // 15

console.log("04 - il valore massimo del contatore dev'essere 15", contatore.value == 15)

contatore = new Counter(10, 10, 15, 10)
contatore.decrement() //ci aspettiamo che rimanga 10
contatore.decrement() //ci aspettiamo che rimanga 10
contatore.decrement() //ci aspettiamo che rimanga 10
console.log("05 - il valore minimo del contatore dev'essere 10", contatore.value == 10)



//new CounterElement('#counterA')
//new CounterElement('#counterB')


contatore = new Counter("0");
contatore.decrement();

console.log("06 - initial passato come stringa \"0\" decremento", contatore.value == -1, "actual ", contatore.value)


contatore = new Counter("0");
contatore.increment();
console.log("07 - initial passato come stringa \"0\" increment", contatore.value == 1, "actual ", contatore.value)


contatore = new Counter("9", "-10", "10")

contatore.increment();

console.log("08a - parametri passati come stringhe limite max e min increment", contatore.value == 10, "actual ", contatore.value);

console.log("08b - parametri passati come stringhe limite max e min increment", contatore.value == 10, "actual ", contatore.value);

contatore.decrement();

console.log("08c - parametri passati come stringhe limite max e min decrement", contatore.value == 9, "actual ", contatore.value);


// TEST 9
contatore = new Counter("-8", "-10", "10")

contatore.decrement();
console.log("9a - parametri passati come stringhe limite max e min decrement", contatore.value == -9, "actual ", contatore.value)
contatore.decrement();
console.log("9b - parametri passati come stringhe limite max e min decrement", contatore.value == -10, "actual ", contatore.value)
console.log("9c - parametri passati come stringhe limite max e min decrement", contatore.value == -10, "actual ", contatore.value)


try {
    contatore = new Counter(10, 11, 12)
    console.log("FAIL 10b Error - mi aspettavo un eccezione 'initial è minore di min' ",false)
} catch (error) {
    console.log("PASS 10a Error - trovato un errore atteso 'initial è minore di min' ", error.message === 'initial è minore di min')
}

try {
    contatore = new Counter("10", "11", "12")
    console.log("FAIL 10b Error - mi aspettavo un eccezione 'initial è minore di min' ",false)
} catch (error) {
    console.log("PASS 10a Error - trovato un errore atteso, 'initial è minore di min' ", error.message === 'initial è minore di min')
}


try {
    contatore = new Counter(13, 11, 12)
    console.log("FAIL 10c Error - mi aspettavo un eccezione initial è maggiore di max",false)
} catch (error) {
    console.log("PASS 10c Error - trovato un errore, atteso 'errore initial maggiore di max'", error.message === 'initial è maggiore di max')
}



try {
    contatore = new Counter("13", "11", "12")
    console.log("FAIL 10c Error - mi aspettavo un eccezione initial è maggiore di max",false)
} catch (error) {
    console.log("PASS 10c Error - trovato un errore, atteso 'errore initial maggiore di max'", error.message === 'initial è maggiore di max')
}