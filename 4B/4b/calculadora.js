
 function Calcular(){
    const distancia = parseFloat(document.getElementById('distancia').value);
    const tiempo = parseFloat(document.getElementById('tiempo').value);

    //estas 3 variables son para poner las unidades metricas
        const distanciaUnidad = document.getElementById('distanciaUnidad').value;
        const tiempoUnidad = document.getElementById('tiempoUnidad').value;
        const velocidadUnidad = document.getElementById('velocidadUnidad').value;

        //Convertir unidades a Sistema Metrico Internacional (SI)
        let distanciaSI = 0; //<--modifico esta linea
        let tiempoSI = 0; //<--modifico esta linea

        //Dependiendo las unidades que seleccionaron, uso este IF
        if(distanciaUnidad === 'metros'){
          distanciaSI = distancia;
        } else if(distanciaUnidad === 'pies'){
          distanciaSI = distancia /3.281; //son 3 pies por cada metro, por eso la division de 3.281, para mas informacion, checar sus apuntes de fisica.
        }
        if (tiempoUnidad === 'segundos') {
          tiempoSI = tiempo;
        } else if(tiempoUnidad === 'horas'){
          tiempoSI = tiempo * 3600; //lo mismo que arriba, multiplico por 3600 para la cantidad de segundos en un minuto (60) por los 60 minutos en una hora (60) = 60 * 60=3600
        }

        console.log("El valor de la distancia " +distancia);
        console.log("El valor del tiempo " +tiempo);


        //Con el siguiente codigo, voy a calcular la velocidad, aceleracion y la rapidez (aunque no hay formula, por lo pronto para ella, solo dire que es igual a la velociad)
        
        let velocidad = 0;
        let aceleracion = 0;
        let rapidez = 0;
        
        if(velocidadUnidad === 'metros_por_segundo'){
          velocidad = distanciaSI / tiempoSI;
          rapidez = velocidad;
          aceleracion = velocidad / tiempoSI;
        }
        else if(velocidadUnidad === 'pies_por_segundo'){
          velocidad = (distanciaSI * 3.281) / tiempoSI;
          rapidez = velocidad;
          aceleracion = velocidad / tiempoSI;
        }
        else if(velocidadUnidad === 'kilometros_por_hora'){
          velocidad = (distanciaSI / 1000) / (tiempoSI / 3600);
          rapidez = velocidad;
          aceleracion = velocidad / (tiempoSI / 3600);
        }
        else if(velocidadUnidad === 'millas_por_hora'){
          velocidad = (distanciaSI / 1609) / (tiempoSI / 3600);
          rapidez = velocidad;
          aceleracion = velocidad / (tiempoSI / 3600);
        }
    //mostrar los resultados
        let resultado = '';

        document.getElementById('velocidad').textContent = velocidad.toFixed(2) + ' ' + velocidadUnidad; // el 2, son la cantidad despues del punto decimal cuando se haga la division, lo que dice velocidadUnidad, solo son las unidades que hice en el form, arriba.
        document.getElementById('aceleracion').textContent = aceleracion.toFixed(2) + 'm/s^2';
        document.getElementById('rapidez').textContent = rapidez.toFixed(2) + ' ' + velocidadUnidad;

        document.getElementById('resultado').innerHTML =resultado; //mas o menos esta linea le dice que acepte comandos de HTML en el javascript y acepte lo del resultado y lo mande para despues del script.
  }