/*1.Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».

let name = prompt("Enter your name");
document.write(`Hello, ${name}!`);*/

/*2.Запросите у пользователя год его рождения, посчитайте, сколько ему лет и
выведите результат. Текущий год укажите в коде как константу.

let yearOfBirth = +prompt("Enter your year of birth", 0);
const year = 2019;
let calc = year - yearOfBirth;

document.write(`You are ${calc} years old`);*/

/*3.Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.

let lengthOFsquare = +prompt("Enter length of square", 0);

let calc = lengthOFsquare*4;

document.write(`The length of square is ${calc}.`);*/

/*4.Запросите у пользователя радиус окружности и выведите площадь такой окружности.

const p = 3.1415;

let circleRadius = +prompt("Enter circle radius", 0);
let calc = p*(circleRadius*circleRadius);

document.write(`Area of ​​a circle is ${calc.toFixed(1)}`);*/

/*5.Запросите у пользователя расстояние в км между двумя городами и за
сколько часов он хочет добраться. Посчитайте скорость, с которой необходимо
 двигаться, чтобы успеть вовремя.

let distance = +prompt("Enter distance",0);
let time = +prompt("Enter hours of time",0);

let calc = distance/time;
document.write(`Speed of movement is ${calc} km/hour.`);*/

/*6.Реализуйте конвертор валют. Пользователь вводит доллары, программа
переводит в евро. Курс валюты храните в константе.

let dollar = +prompt("Enter dollars",0);
const dollarToEuro = 0.9;
let calc = dollarToEuro*dollar;

document.write(`You have ${calc} euro `);*/

/*7.Пользователь указывает объем флешки в Гб. Программа должна посчитать,
сколько файлов размером в 820 Мб помещается на флешку.

let flashDriveVolume = +prompt("Enter flash drive volume",0);
let convert = flashDriveVolume*1000;
const volume = 820;
let calc = convert/volume;

document.write(`You can put ${calc.toFixed(1)} files with 820 mb volume. `);*/

/*8.Пользователь вводит сумму денег в кошельке и цену одной шоколадки.
 Программа выводит, сколько шоколадок может купить пользователь, и сколько
  сдачи у него останется.

let amountMoney = +prompt("Enter money",0);
let price = +prompt("Enter price of chocolate",0);

let chocolate = amountMoney/price;
let change = amountMoney%price;

document.write(`You can buy ${Math.trunc(chocolate)} chocolates and your change 
of money is ${change.toFixed(1)} `);*/

/*9.Запросите у пользователя трехзначное число и выведите его задом наперед.
Для решения задачи вам понадобится оператор % (остаток от деления).

let str = +prompt("Enter any three numbers",0);

let first = String(str).substr(0, 1)
let third = str % 10;
let second = (str % 100 - str % 10)/10;

document.write(`You enter: ${str} <br>Look here: ${third}${second}${first}`);*/

/*10.Пользователь вводит сумму вклада в банк на 2 месяца, с процентной ставкой
депозита 5% годовых. Вывести сумму начисленных процентов.

const percent = 5;
const month = 2;
let money = +prompt("Enter deposit amount",0);

let calc = (money*percent/100)*month;

document.write(`Accrued interest is ${calc} dollars!`);*/
































