class Counter {

    //costruttore, si chiama con questo nome
    constructor() {
        this.value = 0;
    }

    //metodo - non c'è bisogno della keyword function
    increment() {
        this.value++;
    }

    //metodo - non c'è bisogno di scrivere function
    decrement() {
        this.value--;
    }
}

export default Counter;