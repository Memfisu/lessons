var number = 1; // number число
var string = 'слово'; // string строка
var array = [1, 2, 3, 'привет']; // Array массив
var bool = true; // boolean - булева, true или false

// Object объект
var object = {
    firstname: 'Иван',
    lastname: 'Иванович',
    subjects: [1, 2, 3]
};

/**
 * Простая работа с объектом
 */
console.log(object.firstname);  // обращение по ключу объекта

object.firstname = 'Пётр'; // изменение значения в объекте

var firstnameKey = 'firstname';
console.log(object[firstnameKey]);  // "динамичное" обращение к ключу объекта


/**
 * Функции
 */

// вызов функции которая объявлена не через var до её записи
console.log(getFullName(object.firstname, object.lastname));

// объявление функции
function getFullName(arg1, arg2) {
    return arg1 + ' ' + arg2;
}

// объявление функции через var, станет доступна только после объявления
var add = function(num1, num2) {
    var multiplayer = 4;
    return num1 + num2 * multiplayer;
}

var result = add(9, 12);    // вызов функции с записью результата в перменную
console.log(result);    // вывод результата функции

// Разные типы объявлений 
var number1 = 1; // var - простое объявление перменной
let number2 = 2; // let - объявление перменной которая не будет доступна извне
const number3 = 3;  // константа, не может быть изменена, но содержимое массивов и объектов изменяемое


/**
 * Циклы
 */
var arr1 = [1, 2, 3];

// Цикл по массиву
for(var i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}

// цикл while
while(arr1.length < 10) {
    arr1.push(1);   // push - добавление элемента в массив
}

// цикл do...while
do {
    arr1.push(2);
} while (arr1.length < 20);

// Метод для прохода по массиву
function forEach(array, callback) {
    for(var i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

// Вызов метода прохода по массиву
forEach(arr1, function(item) {
    console.log(item);
});


// метод стандарта ES5 для массивов для прохода по элементам
arr1.forEach(function(item) {
    console.log(item);
});