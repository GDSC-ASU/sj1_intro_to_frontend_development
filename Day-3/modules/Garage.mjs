// when true => garage is empty, when false => garage is not empty
let sensor = true; // by defualt the garage is empty
export const getGarageState = () => {
    return sensor ? "Garage is empty" : "Garage is not empty";
};

class Garage {
    platNum;
    constructor(platNum) {
        this.platNum = platNum;
    }
    enterGarage = () => {
        if (sensor) {
            console.log(`Car with ${this.platNum} is entering the garage`);
            sensor = false;
        } else {
            console.log("You can't park here");
        }
    };
    exitGarage = () => {
        if (sensor) {
            console.log("Garage is already empty");
        } else {
            console.log(`Car with ${this.platNum} is exiting the garage`);
            sensor = true;
        }
    };
}

export default Garage;
