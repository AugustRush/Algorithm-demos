class Insertion {

    static sort(elements){
        let N = elements.length;
        for (let i = 1; i < N; i++) {
            for (let j = i; j > 0 ; j--) {
                if (elements[j] < elements[j - 1]) {
                    this.exchange(elements,j,j-1);
                }
            }
            console.log(elements);
        }
    }
    //
    static exchange(numbers, i, j) {
        let num = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = num;
    }
}

let numbers = [12,11,1, 3, 2, 4, 5, 6, 7, 9, 8, 10];
Insertion.sort(numbers);
console.log('sorted numbers is ',numbers);