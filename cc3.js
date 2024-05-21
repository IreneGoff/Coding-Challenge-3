class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }
}

accelerate() {
    this.speed = this.speed + 10;
    console.log('New speed of ' + this.make + ': ' + this.speed + ' km/h');
}

brake() {
    this.speed = this.speed - 5;
    console.log('New speed of ' + this.make + ': ' + this.speed + ' km/h');
}
}
// Car 1: BMW starting at 120 km/h
let car1 = new Car('BMW', 120);
car1.accelerate();
car1.accelerate();
car1.brake();
car1.brake();
car1.brake();

// Car 2: Mercedes starting at 95 km/h
let car2 = new Car('Mercedes', 95);
car2.accelerate();
car2.brake();
car2.brake();
car2.accelerate();
car2.accelerate();
car2.brake();