var numbers = [1, 10, -8, 7, 8, 4, 3, -4];
// numbers.sort(function (a, b) {
//     // for (i = 0; i < numbers.length; i++)
//     //     numbers[i]
//     return a - b;
// });

var new_array = numbers.map(function (number, index) {
    var result = number * number
    console.log(number, index);
    return result;
});

console.log(numbers);
console.log(new_array);

// function n2(a) {
//     for (i = 0; i < a.length; i++)
//         a[i] *= a[i];
//     // numbers.sort(function (a, b) {
//     return;
//     // });
//     return;
// }




// var n2 = numbers.map(Math.pow(numbers, 2));
// console.log(n2);

// numbers.sort(function (a, b) {
//     // for (i = 0; i < numbers.length; i++)
//     //     numbers[i]
//     return b - a;
// });

// console.log(numbers);


// n2(numbers);

