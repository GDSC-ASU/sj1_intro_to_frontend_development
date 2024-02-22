import Garage, { getGarageState } from "./Garage.mjs";
console.log(getGarageState());

const car1 = new Garage(1234);
const car2 = new Garage(5555);
car1.enterGarage();
car2.enterGarage();
