class FiguraGeometrica {
    constructor( longitud ){
        this.longitud = longitud;
    
    }
    area() {
        /*-----Nomenclature-------*/
    }
    perimetro() {
        /*-----Nomenclature-------*/
    }
}
class Triangulo extends FiguraGeometrica{
    constructor(longitud, base , altura) {
        super(longitud)

        this.base = base
        this.altura = altura

    }

    area() {
        console.log("La Area es " + 0.5 * this.base * this.altura)
    }
    perimetro() {
        console.log("El perimetro es " +  (this.longitud + this.base + this.altura))
    }
}
class Cuadrado extends FiguraGeometrica{
    
    area() {
        console.log("La Area es " + this.longitud * this.longitud)
    }
    perimetro() {
        console.log("El perimetro es " +  4 * this.longitud)
    }
}
class Circulo extends FiguraGeometrica {
    area1() {
        console.log("La Área es " + Math.PI * this.longitud * this.longitud);
    }

    perimetro() {
        console.log("El perímetro es " + 2 * Math.PI * this.longitud);
    }
}

const triangulo = new Triangulo( 2 , 2 , 2)
const cuadrado = new Cuadrado( 2 )
const circulo = new Circulo( 2 )

cuadrado.area()