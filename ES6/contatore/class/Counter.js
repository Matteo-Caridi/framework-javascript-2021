class Counter {

    constructor(iniziale = 0, min = null, max = null) {
        this.value = parseInt(iniziale);
        this.min = min;
        this.max = max;

        if (this.min !== null) {
            if (this.value < this.min) {
                throw new console.log("initial è minore di min");
            }
        }

        if (this.max !== null) {
            if (this.value > this.max) {
                throw new console.log("initial è maggiore di max")
            }
        }





    }

    increment() {

        if (this.max !== null) {
            if (this.value < this.max) {
                this.value++;
            }
        } else {
            this.value++;
        }
    }

    decrement() {
        if (this.min !== null) {
            if (this.value > this.min) {
                this.value--;
            }
        } else {
            this.value--;
        }
    }
}

export default Counter;