// Напишите функцию, которая получает на входе строку и возвращает новую, в которой каждое слово начинается с заглавной буквы.
function upper(str) {
    return str.replace(/(^|\s)\S/g, function(str) {return str.toUpperCase()});
}