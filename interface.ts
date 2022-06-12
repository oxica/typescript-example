// const oldCivic = {
//     name: 'civic',
//     year: 2000,
//     broken: true,
// };

// const printVehicle = (vehicle: {
//     name: string;
//     year: number;
//     broken: boolean;
// }): void => {
//     console.log(`Name: ${vehicle.name}`);
//     console.log(`Year: ${vehicle.year}`);
//     console.log(`Broken: ${vehicle.broken}`);
// }

// printVehicle(oldCivic);

//---------------------

// interface Vehicle {
//     name: string;
//     year: number;
//     broken: boolean;
// };

// const oldCivic = {
//     name: 'civic',
//     year: 2000,
//     broken: true,
// };

// const printVehicle = (vehicle: Vehicle): void => {
//     console.log(`Name: ${vehicle.name}`);
//     console.log(`Year: ${vehicle.year}`);
//     console.log(`Broken: ${vehicle.broken}`);
// }

// printVehicle(oldCivic);

//---------------------

// interface Vehicle {
//     name: string;
//     year: number;
//     broken: boolean;
//     summary(): string;
// };

// const oldCivic = {
//     name: 'civic',
//     year: 2000,
//     broken: true,
//     summary(): string {
//         return `Name: ${this.name}`;
//     }
// };

// const printVehicle = (vehicle: Vehicle): void => {
//     console.log(vehicle.summary());
// }

// printVehicle(oldCivic);

//---------------------

// interface Reportable {
//     summary(): string;
// };

// const oldCivic = {
//     name: 'civic',
//     year: 2000,
//     broken: true,
//     summary(): string {
//         return `Name: ${this.name}`;
//     }
// };

// const printSummary = (item: Reportable): void => {
//     console.log(item.summary());
// }

// printSummary(oldCivic);

//---------------------


interface Reportable {
    summary(): string;
};

const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true,
    summary(): string {
        return `Name: ${this.name}`;
    }
};

const cola = {
    color: "brown",
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `My drink has ${this.sugar} grams of sugar`;
    }
};

const printSummary = (item: Reportable): void => {
    console.log(item.summary());
}

printSummary(oldCivic);
printSummary(cola);


export{}