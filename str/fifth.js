//Напишите функцию replaceAll(find, replace, str), которая заменяет в строке str все вхождение подстроки find на подстроку replace.
function replaceAll(find, replace, str) {
    return str.split(find).join(replace);
}