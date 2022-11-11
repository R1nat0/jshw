//Напишите функцию, которая находит пересечение двух массивов.
function arraysIntersection(array1, array2){
    return array1.filter(x => array2.includes(x))
}