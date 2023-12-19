class ArrayList {
    capacity = 2;
    length = 0
    arr = new Array(2).fill(0);

    pushback(n: number) {
        if (this.length == this.capacity) {
            this.resize();
        }

        this.arr[this.length] = n;
        this.length += 1;
    }

    resize() {
        // create arr of double capacity
        const arr1 = new Array(this.capacity).fill(0);
        this.arr = [...this.arr, ...arr1];

        this.capacity = 2 * this.capacity;
    }
}

const arr = new ArrayList();
arr.pushback(1)
console.log(arr)
arr.pushback(1)
console.log(arr)
arr.pushback(1)
console.log(arr)
arr.pushback(1)
console.log(arr)
arr.pushback(1)
console.log(arr)
arr.pushback(1)
console.log(arr)
arr.pushback(1)
console.log(arr)
arr.pushback(1)
console.log(arr)
