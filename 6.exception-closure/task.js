function parseCount(numberToParse) {
    
    if(isNaN(numberToParse)) {  
        throw new Error("Невалидное значение");
    }
    return Number.parseFloat(numberToParse);
}

function validateCount(numberToParse) {
    try {
        return parseCount(numberToParse);
    } catch (error) {
        return error; 
    }
}

class Triangle{
    constructor(a, b, c) {
        
        if((a + b) < c || (a + c) < b || (b + c) < a) {
            throw new Error("Треугольник с такими сторонами не существует");
        } 

        this.a = a;
        this.b = b;
        this.c = c;   
    }

    get perimeter() {
        return this.a + this.b+ this.c;
    }
   
    get area() {
        return Number(((1/4) * Math. sqrt((this.a**2 + this.b**2 + this.c**2)**2 - 2*(this.a**4 + this.b**4 + this.c**4))).toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return {
            get perimeter() {
                return "Ошибка! Треугольник не существует"
            },

            get area() {
                return "Ошибка! Треугольник не существует"
            }
        }
    }
}