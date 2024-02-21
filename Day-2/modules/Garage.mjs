class Garage {
    sensor;
    constructor(sensor) {
        this.sensor = sensor;
    }
    // Enter Garage methode
    enterGarage = () => {
        if (this.sensor === true) {
            // true === garage is full
            console.log("Garage is Full");
        } else {
            // false === garage is empty
            console.log("You can enter the garage");
            this.sensor = true;
        }
    };
    // Leave Garage method
    leaveGarage = () => {
        if (this.sensor === true) {
            console.log("Good Bye");
            this.sensor = false;
        } else {
            console.log("The Garage is Empty");
        }
    };
}
export default Garage;
