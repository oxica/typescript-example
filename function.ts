const add = (a: number, b: number): number => {
    return a + b;
}
const subtract = (a: number, b: number): number => {
    return a - b;
}
const multiply = function(a: number, b: number): number {
    return a * b;
}
function divide (a: number, b: number): number {
    return a / b;
}

const logger = (message: string): void => {
    console.log(message);
}

const throwError = (message: string): never => {
    throw new Error(message);
}

const throwError2 = (message: string): string => {
    if (!message) {
        throw new Error(message);
    }  
    return message;
}

const throwError3 = (message: string): void => {
    if (!message) {
        throw new Error(message);
    }  
}

// const throwError4 = (message: string): string | never => {
//     if (!message) {
//         throw new Error(message);
//     }
//     return message;
// }
// this is the correct way to return a string or never


const todayWather = {
    date: new Date(),
    weather: "sunny"
}
// const logWeather = (forecast: { date: Date, weather: string }): void => {
//     console.log(forecast.date);
//     console.log(forecast.weather);
// }
const logWeather = ({ date, weather }: { date: Date, weather: string }): void => {
    console.log(date);
    console.log(weather);
}
logWeather(todayWather);