const colors2 = ["red", "green", "blue"];

const dates = [new Date(), new Date()];

const fruitsByColor = [
    ['tomato'],
    ['apple'],
    ['banana'],
]

const fruitsByColor1: string[][] = [
    ['tomato'],
    ['apple'],
    ['banana'],
]


//Help with inference when extracting values
const myColor = colors2[0];
const color1 = colors2.pop();

//Prevent incompatible values
//colors.push(true);
//colors.push("orange");

//Help with 'map'
colors2.map((color:string):string => {
    return color.toUpperCase();
}   
);


//Flexible types
const importantDates: (Date | string)[] = [new Date(), "2030-10-10"];
importantDates.push("2030-10-10");
importantDates.push(new Date());

export{}