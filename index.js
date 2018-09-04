let arr = [2, 3, 5, 9, 4, 6, 2, 8, 10, 1, 7];

console.log(arr);

function bubbleSort(a) {

    for (let i = 0, len = a.length; i < len; i++) {

        for (let i = 1, len = a.length; i < len; i++) {

            let current = i,
                prev = i - 1;

            if (a[prev] > a[current]) {

                let copyPrev = a[prev];

                a.splice(prev, 2, a[current]);

                a.splice(current, 0, copyPrev);
            }

        }
    }

}

bubbleSort(arr);

console.log(arr);