import { v4 as uuidv4 } from "uuid";

class Vehicle {
  id: string;
  registerNumber: string;
  make: string;
  model: string;
  year: number;
  rentalPrice: number;
  constructor(
    registerNumber: string,
    make: string,
    model: string,
    year: number,
    rentalPrice: number
  ) {
    if (
      typeof registerNumber !== "string" ||
      typeof make !== "string" ||
      typeof model !== "string"
    ) {
      throw new Error("registerNumber, make and model must be strings");
    }

    if (typeof year !== "number" || typeof rentalPrice !== "number") {
      throw new Error("year and rentalPrice must be numbers");
    }
    
    this.id = uuidv4();
    this.registerNumber = registerNumber;
    this.make = make;
    this.model = model;
    this.year = year;
    this.rentalPrice = rentalPrice;
  }
}

export default Vehicle;
