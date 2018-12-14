# Задание №2
Используя компоненты `input` и `button` сделать 4 набора полей, 
которые будут содержать в себе х2 input и одну кнопку которая будет производить 4 базовые операции: сложение, вычитание, умножение и деление.


Пример структуры в html:
```html
<div>
    <input type="text" class="num1"/>
    <span class="action">+</span>
    <input type="text" class="num2"/>
    <button onclick="add(this)">=<button/>
    <span class="result">0</span>
</div>
<div>
    <input type="text" class="num1"/>
    <span class="action">-</span>
    <input type="text" class="num2"/>
    <button onclick="substract(this)">=<button/>
    <span class="result">0</span>
</div>
<!-- и так далее -->
```

В целом каждый input можно обозначить уникальным id, но можно использовать передавамый `this`. 

У родителя вызываемой кнопки (`div` который хранит в себе все поля ввода и саму кнопку) можно найти элементы `input.num1`/`input.num2`.

---

Дополнительное задание: использовать один набор полей, где действие можно определять через `<select>`
[подробнее о select](https://developer.mozilla.org/ru/docs/Web/HTML/Element/select)

---
Супер задание: сделать простой калькулятор

# Задание №1

## Начало работы над списком дел
Используя пустой массив и метод реализовать добавление задач в массив.

- Метод должен принимать один аргумент (название задачи) и добавлять его в массив с помощью вызова метода `push()` у массива.
- Вызвать аргумент несколько раз добавив несколько задач.
- После добавления задач вывести массив с задачами используя метод `join()` с необходимым разделителем, например `'\n'` чтобы сделать перенос на следующую строку

---
Дополнительное задание:
Используя метод `.indexOf()` и `.splice()` у массива реализовать удаление задачи из массива по названию задачи

[Подробнее о indexOf](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
[Подробнее о splice](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
