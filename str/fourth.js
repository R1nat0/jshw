//Напишите функцию, которая возвращает строку, оставив в ней только уникальные символы, т.е. встречающиеся в строке один раз.
function unique(str){
    return Array.from(new Set(str)).join('')
}