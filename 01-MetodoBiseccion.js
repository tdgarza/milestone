function bisection(func, x1, x2, tol) {
    if (func(x1) * func(x2) >= 0) {
      console.log("No se puede encontrar una raíz en el intervalo dado");
      return;
    }
  
    let mid = x1;
    while ((x2 - x1) >= tol) {
      mid = (x1 + x2) / 2;
  
      if (func(mid) === 0.0) {
        break;
      }
  
      if (func(mid) * func(x1) < 0) {
        x2 = mid;
      } else {
        x1 = mid;
      }
    }
  
    console.log("La raíz se encuentra en x = " + mid);
    return mid;
  }
  
  // Ejemplo de uso: encontrar la raíz de la función x^3 - x^2 + 2
  const func = x => x**3 - x**2 + 2;
  const x1 = 1, x2 = 2, tol = 0.0001;
  bisection(func, x1, x2, tol);
  
  /*
La función bisection toma cuatro argumentos:

func: La función cuya raíz se desea encontrar
x1 y x2: intervalo inicial en el que se espera encontrar la raíz
tol: tolerancia deseada para el error de la solución
La función verifica si func(x1) * func(x2) >= 0, lo que indica que no hay raíz en el intervalo dado. Si es así, imprime un mensaje y devuelve.

De lo contrario, la función entra en un bucle while que se ejecuta mientras (x2 - x1) >= tol. En cada iteración, se calcula el punto medio mid y se verifica si func(mid) es igual a 0.0. Si es así, la función ha encontrado la raíz y se detiene.

Si func(mid) no es igual a 0.0, la función verifica si func(mid) * func(x1) < 0. Si es así, significa que la raíz está en el intervalo [x1, mid], por lo que x2 se actualiza a mid. Si no, significa que la raíz está en el intervalo [mid, x2], por lo que x1 se actualiza a mid.

Finalmente, la función imprime la raíz encontrada y la devuelve.

En el ejemplo de uso al final del código, se define una función func para encontrar la raíz de x^3 - x^2 + 2, y se llama a bisection con los valores x1 = 1, x2 = 2, y tol = 0.0001.

  */