function parseCount(numberToParse) {
    if (Number.isInteger(Number(numberToParse)) === true) {
        const numberToGet = Number.parseFloat(numberToParse);
    
        if(Number.isNaN(numberToGet) === true) {  
            throw error;
        }
    return numberToGet;
    }
}
const error = new Error("Невалидное значение");
function validateCount(numberToParse) {
    try {
        return parseCount(numberToParse);
    } catch (error) {
        return error; 
    }
}

class Triangle{
    constructor(a, b, c) {
        
        this.a = a;
        this.b = b;
        this.c = c;

        if((a + b) < c || (a + c) < b || (b + c) < a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        set perimeter(a, b, c) {
            this._perimeter = a + b + c;
        }
        get perimeter() {
            return this._perimeter;
        }
        set area(a, b, c) {
            this._area = Number(((1/4) * Math. sqrt((a**2 + b**2 + c**2)**2 - 2*(a**4 + b**4 + c**4))).toFixed(3));
        }
        get area() {
            return this._area;
        }
    }
}
function getTriangle(a, b, c) {
    try {
        return new Triangle;
    } catch (error) {
        console.log("Ошибка! Треугольник не существует");
        return [perimeter, area];
    }
}