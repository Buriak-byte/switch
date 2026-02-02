// //1

const kindOfDrink = "Сік";
switch (kindOfDrink) {
  case "Кава":
    console.log("мені не можна ще каву");
  case "Чай":
    console.log("я не це хочу");
  case "Сік":
    console.log("те що треба");
}
//2

const weekDay = "Понеділок";
switch (weekDay) {
case "Понеділок" || "Вівторок"  || "Середа" || "Четвер" || "П'ятниця":
  console.log("це робочий день")
  break
  case "Субота" || "Неділя":
  console.log("це вихідний")
  
}

//3
// Створіть змінну для зберігання номера місяця. За номером місяця визначайте пору року і виводьте відповідне повідомлення.
const MonthNummer = 7;
switch (true) {
  case 12 || 1 || 2:
    console.log("це зима");
   
  case 3 || 4 || 5:
    console.log("це весна");
     
  case 6 || 7 || 8:
    console.log("це літо");

  case 9 || 10 || 11:
    console.log("це осінь");
    
}
MonthNummer === 12;


//   // 4
//   // Створіть змінну для зберігання назви кольору. Виводьте повідомлення відповідно до вибраного кольору: якщо "червоний" — "стоп", "зелений" — "йти", "жовтий" — "чекати".

const color = "жовтий"
switch (color) {
    case "червоний":
        console.log("стоп!")
        break;
case "зелений":
    console.log("йти")
break;
case "жовтий":
    console.log("чекати")


}
//5
// // Створіть змінні для зберігання двох чисел та оператора (як у списку select). Виконайте відповідну операцію та виведіть результат. У випадку ділення на нуль — виведіть попередження.
const firstNumber = 13
const secondNumber = 0
const operator = "/"
// const result = `${firstNumber}` `${operator}` `${secondNumber}`
switch (operator) {
  case "-":
    console.log(firstNumber - secondNumber);
    break;
  case "+":
    console.log(firstNumber + secondNumber);
    break;
  case "*":
    console.log(firstNumber * secondNumber);
    break;
  case "/":
    console.log(firstNumber / secondNumber);
    break;
  case "operator = "/" && secondNumber = 0":
    
    break;
}
console.log(result)
