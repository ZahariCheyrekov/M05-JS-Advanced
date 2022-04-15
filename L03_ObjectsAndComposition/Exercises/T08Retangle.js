function solve(width, height, color) {
    const rectangle = {
        width,
        height,
        color: color[0].toUpperCase() + color.slice(1, color.length ),
        calcArea() {
            return this.width * this.height;
        }
    }

    return rectangle;
}

let rect = solve(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
