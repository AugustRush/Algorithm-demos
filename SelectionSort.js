class Selection {
    static sort(numbers) {
        let N = numbers.length;
        for (let i = 0; i < N; i++) {
            let min = i;
            for (let j = i + 1; j < N; j++) {
                if (numbers[j] < numbers[min]) {
                    min = j;
                }
            }
            //exchange
            this.exchange(numbers,min,i);
            console.log(numbers);
        }
        return numbers;
    }

    static exchange(numbers,i,j){
        let num = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = num;
    }
}

console.log('soterd asceing numbers is ', Selection.sort([15,12,11,1, 3, 2, 4, 5, 6, 7, 9, 8, 10]));
console.log('soterd asceing numbers is ', Selection.sort(['s','o','r','t','e','x','a','m','p','l','e']));