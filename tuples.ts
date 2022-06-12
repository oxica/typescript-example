const drink = {
    color: "brown",
    carbonated: true,
    sugar: 40,
};

const cola: [string, boolean, number] = ["brown", true, 40];
const sprite: [string, boolean, number] = ["clear", true, 40];
const tea: [string, boolean, number] = ["brown", false, 0];
const soda: [string, boolean, number] = ["clear", false, 0];
const teaAndSoda: [string, boolean, number] = ["brown", false, 40];
const colaAndSprite: [string, boolean, number] = ["brown", true, 40];
const colaAndTea: [string, boolean, number] = ["brown", false, 40];
const colaAndSoda: [string, boolean, number] = ["brown", false, 40];
const spriteAndTea: [string, boolean, number] = ["clear", false, 40];

type Drink = [string, boolean, number];
const testDrink: Drink = ["brown", true, 40];
const sprite2: Drink = ["clear", true, 40];
const coffee: Drink = ["black", false, 0];
const tea2: Drink = ["brown", false, 0];

const carSpaces: [number, number] = [400, 3354];

const carSpaceObj = {
    horsepower: 400,
    weight: 3354,
};