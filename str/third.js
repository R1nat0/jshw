//Напишите функцию, которая проверяет является ли строка палиндромом или нет (возвращает true или false).
function palindrom(str){
    return str == str.split('').reverse().join('')
}
