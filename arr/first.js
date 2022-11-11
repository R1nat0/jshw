//Напишите функцию, которая убирает повторяющиеся значения в массиве.
function removeDuplicate(arr) {
    return Array.from(new Set(arr));
}