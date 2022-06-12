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

class Car extends Vehicle {

    constructor(public wheels: number, color: string) {
        super(color);
    }

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

const car = new Car(4, 'silver');
// car.startDrivingProcess();
// vehicle.stop();


export{}