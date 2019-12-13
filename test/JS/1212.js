let numba = 3;
let numActions = [
    (num) => { return num + 1 },
    (num) => { return num * num },
    (num) => { return num - 2 },
];

// console.log(numActions[0](3));

function summ(arr, num) {
    return arr.reduce(function (accum, item) {
        console.log(item(accum));
        return item(accum);
    }, num);
};



summ(numActions, numba);


// numActions[0];


// var css = [
//     { name: 'width', value: '300px', },
//     { name: 'color', value: 'red', },
//     { name: 'text-align', value: 'justify', },
//     { name: 'font-style', value: 'italic', },
// ];

// function transformListToStyle(arr) {
//     return arr.reduce(function (accum, item) {
//         return acum + `${item.name}: ${item.value};`
//     }, '')
// };

// let resuly = transformListToStyle(css);
// console.log(resuly);


// let mylife = 100;
// let damag = [4, 8, 12, 5];

// function newLife(life, damagList) {
//     let result = damagList.reduce(function (accum, item, index) {
//         // return accum - item;
//         return accum - item;
//     }, life);

//     return result;
// };

// console.log(newLife(mylife, damag));


// let list = [1, 2, 3];

// function getSumForEach(arr) {
//     let sum = 0;
//     arr.forEach(function (item, index) {
//         sum = sum + item;
//     });
//     return sum;
// };

// function getSumReduce(arr) {
//     let result = arr.reduce(function (sum, item, index) {
//         return sum + item;
//     }, 0);
//     return result;
// }



// var numbers = [1, 10, -8, 7, 8, 4, 3, -4];
// // numbers.sort(function (a, b) {
// //     // for (i = 0; i < numbers.length; i++)
// //     //     numbers[i]
// //     return a - b;
// // });

// var new_array = numbers.map(function (number, index) {
//     var result = number * number
//     console.log(number, index);
//     return result;
// });

// console.log(numbers);
// console.log(new_array);

// // function n2(a) {
// //     for (i = 0; i < a.length; i++)
// //         a[i] *= a[i];
// //     // numbers.sort(function (a, b) {
// //     return;
// //     // });
// //     return;
// // }




// var n2 = numbers.map(Math.pow(numbers, 2));
// console.log(n2);

// numbers.sort(function (a, b) {
//     // for (i = 0; i < numbers.length; i++)
//     //     numbers[i]
//     return b - a;
// });

// console.log(numbers);


// n2(numbers);

