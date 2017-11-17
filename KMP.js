//Knuth - Morris - Pratt

let string = 'abcd abcdab asg abcdad ccc';
let pattern = 'abcdad';

function getPatternNextArr(string) {
    let next = [0];
    let length = string.length;
    let i = 1;
    while (i < length) {
        let ch = string.charAt(i);
        let po = string.charAt(next[i - 1]);
        if (ch == po) {
            next.push(next[i - 1] + 1);
        } else {
            next.push(0);
        }
        i++;
    }
    return next;
}

function findPattern(str,p) {
    let i = 0;
    let j = 0;
    let sl = str.length;
    let pl = p.length;
    let success = false;
    //
    let next = getPatternNextArr(p);//[0,0,0,0,1,0];
    //
    while (i < sl) {
        let s_char = str.charAt(i);
        let p_char = p.charAt(j);
        console.log('s is ',s_char,' p char is ',p_char);
        if (s_char === p_char) {
            ++i;
            ++j;
            if (j === pl) {
                success = true;
                break;
            }
        } else {
            if (j == 0) {
                ++i;   
            } else {
                j = next[j - 1];
            }
            console.log('i is ',i,' j is ',j);
        }
    }

    if (success) {
        return console.log('find pattern string index is ',i - pl);
    } else {
        return console.log('not find !!!!');
    }
}

findPattern(string,pattern);