/*Запросите у пользователя число, возведите это число во 2-ю степень и выведите на экран.

const num = prompt("Enter number", 0);

const result = +num * +num;
alert("Answer" + " " + result);*/


/*Запросите у пользователя 2 числа и выведите среднее арифметическое этих чисел.

let one = prompt("First number", 0);
let second = prompt("Second number", 0);

let result = (+one + +second)/2;

alert("Answer" + " " + result);*/


/*Запросите у пользователя длину стороны квадрата и выведите площадь такого квадрата.

let side = +prompt("Enter data", 0);
let result = side * side;

alert("Answer" + " " + result);*/


/*Реализуйте конвертор из километров в мили (пользователь вводит километры, программа выводит мили).
1 км = 0,621371 миль. Это значение укажите в коде как константу.

const km = 0.621371;
let num = +prompt("Enter number", 0);
let result = num * km;

alert("Answer :" + result);*/


/*Реализуйте калькулятор. Пользователь вводит два числа, а программа выводит результаты действий + - * / между этими числами.

let num1 = +prompt("Enter first number", 0);
let num2 = +prompt("Enter second number", 0);

let result = num1 * num2;

alert("Answer :" + result);*/


/*Пользователь вводит значения a и b для формулы a * x + b = 0, а программа считает и выводит значение x.

let a = +prompt("Enter number a",0);
let b = +prompt("Enter number b",0);

let result = (-b)/a;
let form = a*result+b;
alert("Result: " + "x=" + result + " " + "Сheck answer: " + form);*/

/*Запросите у пользователя текущее время (часы и минуты) и выведите, сколько часов и минут осталось до следующего дня.
let hour = +prompt("Enter hour",0);
let min = +prompt("Enter minute",0);
let resultHour = 24 - hour;
let resultMinute = 60 - min;

alert(`Time to next day: ${resultHour} hours ${resultMinute} minutes`);*/

/*Запросите у пользователя трехзначное число и выведите вторую цифру этого числа. Для решения задачи используйте оператор
 % (остаток от деления).

let number = +prompt("Enter any three numbers",0);
let result = (number % 100 - number % 10)/10;
alert(`Second number is: ${result}`);*/

/*Запросите у пользователя пятизначное число и переместите последнюю цифру в начало
(из числа 12345 должно получиться число 51234).

let str = prompt("Enter 5 any numberst",0);

let extractFirst = String(str).substr(0, 4);

let extractNext = String(str).substr(4);
alert(`Look here: ${extractNext}${extractFirst}`);*/


/*Зарплата работника составляет $250 + 10% от продаж. Запросите общую сумму
продаж за месяц и посчитайте зарплату.

const salary = 250;
const percent = 10;
const sales = prompt("How much?", 0);
const salaryTotal = salary + +sales / 100 * percent;

alert('Your income is ' + salaryTotal);*/

