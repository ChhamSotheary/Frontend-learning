class Rectangle {
  constructor(width, height) {
    if (width <= 0 || height <= 0) throw new RangeError("ទំហំត្រូវវិជ្ជមាន");
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height;
  }
}

console.log(new Rectangle(4, 5).area);
