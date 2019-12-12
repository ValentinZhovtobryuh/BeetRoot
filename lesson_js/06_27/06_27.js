
var fish = ["anchovies", "calamari", "crab", "prawn", "bream", "salmon", "mussels", "seafood", "lobster", "octopus", "cod", "tuna", "oysters", "trout", "hake"];

var meat = ["lamb", "steak", "beef", "turkey", "sausage", "chicken", "pork", "veal"];

var vegetables = ["artichoke", "peas", "mushroom", "cabbage", "potato", "onion", "carrot", "tomato", "beetroot", "celery", "asparagus", "beans", "garlic"];

var FruitBerriesAndNuts = ["apricot", "avocado", "pineapple", "orange", "peanut", "banana", "grape", "cherry", "melon", "strawberry", "сranberry", "coconut", "hazelnut", "lemon", "currant", "apple"];

var shopping = [fish, meat, vegetables, FruitBerriesAndNuts];

function creatureMas(a, req, amo) {
  for (i = 0; i < a.length; i++)
    a[i] = {
      name: a[i],
      req: req,
      amo: amo,
      by: Boolean,
    };
  return;
};

function NeedToBay(name) {
  for (i = 0; i < name.length; i++)
    name[i].by = ((name[i].req - name[i].amo) > 0) ? true : false;
  return;
};


console.log(shopping);

creatureMas(fish, 4, 6);
NeedToBay(fish);

creatureMas(meat, 10, 5);
NeedToBay(meat);

creatureMas(vegetables, 3, 1);
creatureMas(FruitBerriesAndNuts, 2, 2);

console.log(fish[0]);
console.log(fish[0].name);
console.log(fish[0].req);
console.log(fish[0].amo);
console.log(fish[0].by);

