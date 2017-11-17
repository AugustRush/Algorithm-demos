class Shell {

    static sort(elements) {
        let N = elements.length;
        let h = 1;
        while (h < Math.floor(N / 3)) {
            h = 3*h + 1;
        }
        console.log('h is ',h);
        console.log(elements);
        while (h >= 1) {
            for (let i = h; i < N; i++){
                for (let j = i; j >= h && (elements[j] < elements[j - h]); j -= h) {    
                    this.exchange(elements,j,j-h);
                }
                console.log(elements);
            }
            h = Math.floor(h / 3);
        }
    }

    static exchange(numbers, i, j) {
        let num = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = num;
    }
}

let numbers = [12, 13, 1, 3, 2, 4, 5, 6, 7, 9, 8, 10, 11];
Shell.sort(numbers);
console.log('sorted numbers is ', numbers);