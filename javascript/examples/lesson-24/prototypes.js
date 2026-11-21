const vehicle = {
  describe() {
    return `${this.brand} ជាយានយន្ត`;
  },
};

const car = Object.create(vehicle);
car.brand = "Toyota";
console.log(car.describe());
console.log(Object.hasOwn(car, "describe"));
