class Counter {

    constructor(iniziale = 0, min = null, max = null) {
        this.value =  parseInt(iniziale);
        this.min = min;
        this.max = max;
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