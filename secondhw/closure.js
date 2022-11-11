// Сделайте функцию, которая считает и выводит количество своих вызовов.

function сallCounter(){
    let res = 0;
    return function(){
        return res++;
    }
}
let count = callCounter();

console.log(count());
console.log(count());

// Реализуйте функцию сложения элементов sum(x)(y)(z)

function sum(x){
    return function(y) {
        return function(z) {
            return x+y+z;
        }
    }
}
console.log(sum(1)(2)(3));

// Сделайте функцию, каждый вызов который будет генерировать случайные числа от 1 до 100.

function generateRandomize() {
    let arr = [];
    return function next(){
        let num = Math.floor(Math.random() * 100 + 1);
        while (arr.includes(num) === true){
            num = Math.floor(Math.random() * 100);
        }
        arr.push(num);
        return arr;
    }
}

let rand = generateRandomize();
for(let i = 0; i < 100; i++){
    console.log(rand())
}

// Как исправить код, чтобы вывелись индексы от 0 до 3 и соответствующие элементы массива?
const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
    let b = i;
    setTimeout(function() {
    console.log('Index: ' + b + ', element: ' + arr[b]);
    }, 3000);
}

