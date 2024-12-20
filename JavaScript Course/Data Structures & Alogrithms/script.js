

// console.log(fibs(8))
// console.log(fibRec(8))
let testArray = [3, 2, 1, 13, 8, 5, 0, 1]
console.log(mergeSortRec(testArray))

function fibs (n) {
    let fibs = [0, 1];
    for (let i = 2; i <= n; i++) {
        fibs[i] = fibs[i - 1] + fibs[i - 2];
    }
    return fibs;
}


function fibRec(n) {
    if (n === 0) return [0]
    if (n === 1) return [0, 1]
    const arr = fibRec(n - 1)
    return [...arr, arr[n - 1] + arr[n - 2]]
}



function mergeSortRec (arr) {

    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);

    let rA = arr.slice(mid, arr.length);
    let lA = arr.slice(0, mid);

    mergeSortRec(lA);
    mergeSortRec(rA);

    return merge(lA,rA);
}


function merge(lA, rA) {
    let results = [];
    let i = 0, j = 0;

    // Merge elements from rA and lA while both have elements
    while (i < rA.length && j < lA.length) {
        if (rA[i] < lA[j]) {
            results.push(rA[i]);
            i++;
        } else {
            results.push(lA[j]);
            j++;
        }
    }

    // Add remaining elements from rA (if any)
    while (i < rA.length) {
        results.push(rA[i]);
        i++;
    }

    // Add remaining elements from lA (if any)
    while (j < lA.length) {
        results.push(lA[j]);
        j++;
    }

    return results;
}