/* 
Para calcular la formula general en JavaScript, necesitarás utilizar la fórmula:
ax^2 + bx + c = 0
donde a, b y c son los coeficientes de la ecuación y x es la variable.
Para calcular la solución de la ecuación utilizando la fórmula general, puedes utilizar la siguiente función:
*/
function calcularFormulaGeneral(a, b, c) {
    // Calculamos el discriminante
    var discriminante = b*b - 4*a*c;
    
    // Si el discriminante es menor que cero, no hay solución real
    if (discriminante < 0) {
      return {
        x1: null,
        x2: null
      };
    }
    // Si el discriminante es igual a cero, hay una solución real
    if (discriminante === 0) {
      var x = -b / (2 * a);
      return {
        x1: x,
        x2: x
      };
    }
    // Si el discriminante es mayor que cero, hay dos soluciones reales
    var x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
    var x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
    return {
      x1: x1,x2: x2
    };
    
  }
 