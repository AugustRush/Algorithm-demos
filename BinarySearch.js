
function doSearchInSortedNumbers(numbers, p) {
    let min = 0;
    let max = numbers.length - 1;
    if (numbers[max] > numbers[min]) { // ascending
        if (numbers[min] > p || numbers[max] < p) {
            return -1;
        } else {
            return doSearchAscending(numbers,p);
        }
    } else { // descending
        if (numbers[min] < p || numbers[max] > p) {
            return -1;
        } else {
            return doSearchDescending(numbers,p);
        }
    }
}

function doSearchAscending(numbers,p) {
    let min = 0;
    let max = numbers.length - 1;
    let middle = 0;
    while (1) {
        middle = Math.floor((min + max) / 2.0);
        let curNumber = numbers[middle];
        console.log('middle is ', middle, ' cur number is ', curNumber);
        //
        if (curNumber === p) {
            break;
        } else {
            if (curNumber > p) {
                max = middle - 1;
            } else {
                min = middle + 1;
            }
        }
        //
        if (middle >= numbers.length - 1 || middle <= 0) {
            middle = -1;
            break;
        }
    }
    return middle;
}

function doSearchDescending(numbers, p) {
    let min = 0;
    let max = numbers.length - 1;
    let middle = 0;
    while (1) {
        middle = Math.floor((min + max) / 2.0);
        let curNumber = numbers[middle];
        console.log('middle is ', middle, ' cur number is ', curNumber);
        //
        if (curNumber === p) {
            break;
        } else {
            if (curNumber < p) {
                max = middle - 1;
            } else {
                min = middle + 1;
            }
        }
        //
        if (middle >= numbers.length - 1 || middle <= 0) {
            middle = -1;
            break;
        }
    }
    return middle;
}

let index = doSearchInSortedNumbers([30,26,25,24,23,21,10,8,5,3,2,1],25);
console.log('index is ',index);