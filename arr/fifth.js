//Напишите функцию, которая сортирует массив алгоритмом слияния.
function mergeSort(arr1, arr2) {
    let i = 0;
    let j = 0;
    let result = [];
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i += 1;
        } else {
            result.push(arr2[j]);
            j += 1;
        }
    }

    if (i < arr1.length) {
        result.push(...arr1.slice(i));
    } else if (j < arr2.length) {
        result.push(...arr2.slice(j));
    }

    return result;
}