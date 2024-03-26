
// const bubble = (array) => {

//     for (let i = 0; i < array.length - 1; i++) {
//         for (let z = 0; z < array.length - 1 - i; z++) {
//             if (array[z] > array[z + 1]) {

//                 [array[z], array[z + 1]] = [array[z + 1], array[z]]

//             }

//         }
//         console.log(array)
// //     }

// }

// function bubble(array) {
//     console.log(array.sort((a, b) => b - a))

// }

// bubble([56, 98, 2, 988, 568, 43, 3, 23, 1])

// function SelectionSort(array) {

//     for (let i = 0; i < array.length - 1; i++) {

//         let minIndex = i
//         for (let j = i + 1; j < array.length; j++) {
//             if (array[j] < array[minIndex]) {
//                 minIndex = j
//             }

//         }
//         [array[i], array[minIndex]] = [array[minIndex], array[i]]
//         console.log(array)

//     }

// }

// SelectionSort([456, 876, 98, 43, 2, 56, 8, 9, 23])



const quickSort = (array) => {

    if (array.length === 0) {
        return array;
    }
    const pivot = array[array.length - 1]

    let left = [];
    let right = [];

    for (let i = 0; i < array.length - 1; i++) {
        array[i] < pivot ? left.push(array[i]) : right.push(array[i])

    }
    if (left.length > 0 && right.length > 0) {


        return [...quickSort(left), pivot, ...quickSort(right)]


    } else if (left.length > 0) {

        return [...quickSort(left), pivot]
    } else {
        return [pivot, ...quickSort(right)]
    };


}


console.log(quickSort([7, 9, 87, 56, 43, 67, 89, 4567, 8769, 34, 84, 79, 46, 236]))