
class Quick {
    static sort(elements) {
        if (elements.length < 2) {
            return elements;
        } else {
            let index = Math.floor(Math.random() * elements.length);
            var flag = elements[index];
            var left = elements.filter(function(item,idx) {
                return (item <= flag) && (idx != index);
            });
            let right = elements.filter(function(item,idx) {
               return (item > flag) && (idx !== index); 
            });
            return Quick.sort(left).concat(flag).concat(Quick.sort(right));
        }
    }
}

let array = [0,9,1,3,2,4,6,7,8,5,11,5,6,34,56,23,34,56,90];
console.log('quick sort result is ',Quick.sort(array));