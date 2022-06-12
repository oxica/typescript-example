// class Vehicle {
//     drive(): void {
//         console.log('Driving...');
//     }
//     stop(): void {
//         console.log('Stopped...');
//     }
// };

// const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.stop();

//---------------------

// class Vehicle {
//     drive(): void {
//         console.log('Driving...');
//     }
//     stop(): void {
//         console.log('Stopped...');
//     }
// };

// class  Car extends Vehicle {
//     constructor(name: string) {
//         super();
//         this.name = name;
//     }
//     name: string;
//     drive(): void {
//         console.log('Driving a car...');
//     }
//     stop(): void {
//         console.log('Stopping a car...');
//     }
// }

// const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.stop();

// const car = new Car('BMW');
// vehicle.drive();
// vehicle.stop();

//---------------------

class Vehicle {
    // public drive(): void {
    //     console.log('Driving...');
    // }

    //color: string;
    // constructor(color: string) {
    //     this.color = color;
    // }

    constructor(public color: string) {}

    public stop(): void {
        console.log('Stopped...');
    }

    protected beep(): void {
        console.log('Beep...');
    }
};

class  Car extends Vehicle {
    private drive(): void {
        console.log('Driving a car...');
    }
    startDrivingProcess(): void {
        this.drive();
        this.beep();
    }
    
}

const vehicle = new Vehicle('black');
console.log(vehicle.color);
// vehicle.drive();
vehicle.stop();

// const car = new Car();
// car.startDrivingProcess();
// vehicle.stop();

export{}