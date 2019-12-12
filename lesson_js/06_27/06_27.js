


let anchovies = {
    name: "анчоусы",
    amount: 10,
    required: 5,
    units: "grams",
    // needToBuy: (anchovies.amount - anchovies.required),
};

let needToBuy = 0;

// if  anchovies.amount == Number || (anchovies[amount] - anchovies[required]) > 0 {
//     anchovies.needToBuy = 0;
// } else { anchovies.needToBuy = anchovies[key] - anchovies[key] }




var fish = [[anchovies, { Amount: 5, Required: 10 }], "calamari", "crab", "prawn", "bream", "salmon", "mussels", "seafood", "lobster", "octopus", "cod", "tuna", "oysters", "trout", "hake"];

var meat = ["lamb", "steak", "beef", "turkey", "sausage", "chicken", "pork", "veal"];

var vegetables = ["artichoke", "peas", "mushroom", "cabbage", "potato", "onion", "carrot", "tomato", "beetroot", "celery", "asparagus", "beans", "garlic"];

var FruitBerriesAndNuts = ["apricot", "avocado", "pineapple", "orange", "peanut", "banana", "grape", "cherry", "melon", "strawberry", "сranberry", "coconut", "hazelnut", "lemon", "currant", "apple"];

var shopping = [fish, meat, vegetables, FruitBerriesAndNuts];

// function RequiredAmount(a) {
//     for (let requir of a) {
//         requir.push("Name", "Amount", "Required", "NeedToBuy");
//     }
// }

// RequiredAmount(fish);
console.log(shopping);
console.log(fish[0]);

  // if (requir.Amount - requir.Required) > 0 {
    //     alert(enough);
    // } else {
    //     alert("need to buy" + (Math.abs(Amount - Required)));
    // }