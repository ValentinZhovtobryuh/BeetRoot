alert("Hello");

let username = prompt("Waht is your name?");
if (username === "вася") {
    alert("по жизни или так? шучу!) ");
    console.log("петросяна выключай");
}
else {
    alert("а че не вася?");
    console.log("странно )) а че не вася?");
}

let userold = Number(prompt("а годков тебе " + username + " сколько?"));

if (userold < 12) {
    console.log(old = "ребенок");
}
else if (userold < 18) {
    console.log(old = "подросток");
}
else if (userold < 60) {
    console.log(old = "взрослый");
}

else if (userold <= 100) {
    console.log(old = "О!! Пенсионер!");
}

else if (userold > 100) {
    console.log("Такого возраста не может быть!");
}

let users09 = Number(prompt('введите число от 0 до 9 !' + " такой как ты " + old + " знает эти цифры "));

switch (users09) {
    case 0:
        console.log(")")
    // break;
    case 1:
        console.log("!")
    // break;
    case 2:
        console.log(' " ')
    // break;
    case 3:
        console.log("#")
    // break;
    case 4:
        console.log("$")
    // break;
    case 5:
        console.log("%")
    // break;
    case 6:
        console.log("^")
    // break;
    case 7:
        console.log("&")
    // break;
    case 8:
        console.log("*")
    // break;
    case 9:
        console.log("(")
    // break;
    default:
        console.log("число должно быть от 0 до 9")
    // break;
}

let users999 = Number(prompt('введите техзначное число !' + " такой как ты " + old + " знает эти цифры "));

if (users999 >= 0 && users999 <= 99) {
    console.log("ребенок или пенсионер");
    alert("Вы ввели неверное число. Число должно быть трехзначным");
}
else if (users999 >= 1000) {
    alert("Вы ввели неверное число. Число должно быть трехзначным");
}
else if (((users999 / 100) % 10) == ((users999 / 10) % 10) || ((users999 / 10) % 10) == (users999 % 10) || ((users999 / 100) % 10) == (users999 % 10)) {
    alert("Среди цифр введенного трехзначного числа " + users999 + " есть одинаковые");
}
else {
    alert("Среди цифр введенного трехзначного числа " + users999 + " нет одинаковых");
}