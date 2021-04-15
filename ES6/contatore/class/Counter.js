class Counter {

    constructor(iniziale, min, max) {
        this.value = parseInt(iniziale) || 0;
        this.min = parseInt(min) || null;
        this.max = parseInt(max) || null;

        if (this.min !== null && this.value < this.min) {
            this.value = this.min;
            throw new Error("initial è minore di min");
        }

        if (this.max !== null && this.value > this.max) {
            this.value = this.max;
            throw new Error("initial è maggiore di max");
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