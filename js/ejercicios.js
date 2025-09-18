document.addEventListener('DOMContentLoaded', () => {
    window.iniciarEjercicios = function() 
    {
        const resultadoDiv = document.getElementById("resultado");
        resultadoDiv.innerHTML = '<h2>Resultados de los Ejercicios:</h2>';
        
        //no dependen de que el usuario ingrese algo
        ejercicio3();
        ejercicio4();
        ejercicio5();
        ejercicio6();
    };

    window.ejercicio1 = function() 
    {
        const resultadoDiv = document.getElementById("resultado");
        const nombre = document.getElementById("nombre").value;
        const fechaN = document.getElementById("fechaNacimiento").value;

        if (nombre && fechaN) {
            const edad = CalcularEdad(fechaN);
            resultadoDiv.innerHTML += `<h3>Hola ${nombre}, tenes ${edad} años.</h3>`;
        } else {
            resultadoDiv.innerHTML += `<p>Por favor, ingresa tu nombre y fecha de nacimiento.</p>`;
        }
    };

    window.ejercicio2 = function()
    {
        const resultadoDiv = document.getElementById("resultado");
        const frutaUsuario = document.getElementById("frutaUsuario").value.toLowerCase();
        
        if (frutaUsuario) {
            const frutas = tirandoFruta();
            resultadoDiv.innerHTML += `<h3>Nuestras frutas disponibles son: ${frutas.join(', ')}</h3>`;
            
            if (frutas.includes(frutaUsuario)) {
                resultadoDiv.innerHTML += `<p>¡Sí, tenemos <b>${frutaUsuario}</b>! </p>`;
            } else {
                resultadoDiv.innerHTML += `<p>No, no tenemos <b>${frutaUsuario}</b>. </p>`;
            }
        } else {
            resultadoDiv.innerHTML += `<p>Por favor, ingresa el nombre de una fruta.</p>`;
        }
    };

    window.ejercicio3 = function()
    {
            resultadoDiv.innerHTML += `<h3>EJERCICIO 3:</h3>`;
            const comparar = comparando();
            resultadoDiv.innerHTML += `<h3>Resultados:</h3>`;
            resultadoDiv.innerHTML += `<p>10 == '10': ${comparar.uno}</p>`;
            resultadoDiv.innerHTML += `<p>10 === '10': ${comparar.dos}</p>`;
            resultadoDiv.innerHTML += `<p>10.6: ${comparar.tres}</p>`;
            resultadoDiv.innerHTML += `<p>true == 1: ${comparar.ver}</p>`;
    }

    window.ejercicio4 = function() 
    {
        resultadoDiv.innerHTML += `<h3>EJERCICIO 4:</h3>`;
        const ciudad = crearObj();
        resultadoDiv.innerHTML += `<ul>`; 
        Object.keys(ciudad).forEach(clave => {
        
            resultadoDiv.innerHTML += `<li><b>Clave:</b> ${clave}, <b>Valor:</b> ${ciudad[clave]}</li>`;
        });

        resultadoDiv.innerHTML += `</ul>`;
    }

    window.ejercicio5 = function()
    {
        resultadoDiv.innerHTML += `<h3>EJERCICIO 5:</h3>`;
        const numerosOG = [1, 2, 3, 4, 5];
        const numDupli = duplicarElementos(numerosOG);

        resultadoDiv.innerHTML += `<p>Array original: [${numerosOG.join(', ')}]</p>
        <p>Array duplicado: [${numDupli.join(', ')}]</p>`;

        /*CON MAP: 
        function duplicarElementos(numerosOG)
        {
            return numeros.map(numero => numero * 2);
        }*/
    }

    window.ejercicio6 = function()
    {
        resultadoDiv.innerHTML += `<h3>EJERCICIO 6 EN LA CONSOLA</h3>`;
        dibujarTrianguloA();
        dibujarTrianguloB();
    }

    window.ejercicio7 = function()
    {
        const resultadoDiv = document.getElementById("resultado");
            const listaNombres = document.getElementById("listaNombres").value;
            const lista = nombresA(listaNombres);
            
            resultadoDiv.innerHTML += `<h3>EJERCICIO 7:</h3>`;
            if (lista.length > 0) {
                resultadoDiv.innerHTML += `<h4>Nombres que comienzan con 'A':</h4>`;
                resultadoDiv.innerHTML += `<ul>`;
                lista.forEach(nombre => {
                    resultadoDiv.innerHTML += `<li>${nombre}</li>`;
                });
                resultadoDiv.innerHTML += `</ul>`;
            } else {
                resultadoDiv.innerHTML += `<p>No se encontraron nombres que comiencen con 'A'.</p>`;
            }
    };

    window.ejercicio8 = function()
    {
        const resultadoDiv = document.getElementById("resultado");
            const longString = document.getElementById("longString").value;
            const palabraAReemplazar = document.getElementById("palabraAReemplazar").value;
            const reemplazo = document.getElementById("reemplazo").value;

            resultadoDiv.innerHTML += `<h3>EJERCICIO 8:</h3>`;
            if (longString && palabraAReemplazar && reemplazo) {
                const resultado = CalcularReemplazo(longString, palabraAReemplazar, reemplazo);
                resultadoDiv.innerHTML += `<p>Resultado: ${resultado}</p>`;
            } else {
                resultadoDiv.innerHTML += `<p>Por favor, completa todos los campos.</p>`;
            }
    };

    window.ejercicio9 = function()
    {
        const resultadoDiv = document.getElementById("resultado");
            const longString = document.getElementById("longString9").value;
            const numero = document.getElementById("numero9").value;

            resultadoDiv.innerHTML += `<h3>EJERCICIO 9:</h3>`;
            if (longString && numero) {
                const nuevo = hacerCambio(longString, parseInt(numero));
                resultadoDiv.innerHTML += `<p>Resultado: ${nuevo}</p>`;
            } else {
                resultadoDiv.innerHTML += `<p>Por favor, completa todos los campos.</p>`;
            }
    };

    window.ejercicio10 = function()
    {
        const resultadoDiv = document.getElementById("resultado");
        const lista = document.getElementById("lista10").value;
        
        resultadoDiv.innerHTML += `<h3>EJERCICIO 10:</h3>`;
        if (lista) {
            const resultado = encontrarGuion(lista);
            resultadoDiv.innerHTML += `<p>Resultado: ${resultado}</p>`;
        } else {
            resultadoDiv.innerHTML += `<p>Por favor, ingresa una lista de elementos.</p>`;
        }
    };

    window.ejercicio11 = function()
    {
        const resultadoDiv = document.getElementById("resultado");
        const pedido = document.getElementById("pedidos11").value;
        
        resultadoDiv.innerHTML += `<h3>EJERCICIO 11:</h3>`;
        if (pedido) {
            const totalRecaudacion = calcularRecaudacionTotal(pedido);
            resultadoDiv.innerHTML += `<h4>Recaudación Total: $${totalRecaudacion}</h4>`;
        } else {
            resultadoDiv.innerHTML += `<p>No se ingresaron pedidos.</p>`;
        }
    };
});