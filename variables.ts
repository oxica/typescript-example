let orange: number;
orange = 5;
let apple: number;
apple = 10;
let banana: number;
banana = 15;
let total: number = orange + apple;
console.log(total);

let speed: string = "fast";
let color: string = "red";
let cat: string = `I am a ${color} cat`;
console.log(cat);

let hasDog: boolean = true;
let hasCat: boolean = false;
let hasBird: boolean = true;
let hasFish: boolean = false;

let nothing: null = null;
let nothing2: undefined = undefined;

let now: Date = new Date();

let colors: string[] = ["red", "green", "blue"];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

//classes
class Car { }
let car: Car = new Car();

//object literal
let point: { x: number; y: number } = {
    x: 10,
    y: 20
};

//function
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
}

//when to use annotations
// 1) function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); // {x: 10, y: 20}

// 2) when we declare a variable on one line
// and initialize it later
let words = ["red", "green", "blue"];
//let foundWord = false;
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
    if (words[i] === "green") {
        foundWord = true;
    }
}

// 3) variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i];
    }
}

// 4) variable whose type is not obvious
//let numbers2 = [-10, -1, 12];
// let numberAboveZero2: number | boolean = false;

// let foundNumber: boolean = false;
// for (let i = 0; i < numbers2.length; i++) {
//     if (numbers2[i] > 0) {
//         numberAboveZero2 = numbers2[i];
//         foundNumber = true;
//     }
// }






