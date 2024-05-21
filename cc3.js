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

