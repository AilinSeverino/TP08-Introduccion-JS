document.addEventListener('DOMContentLoaded', () => {
    window.iniciarEjercicios = function() 
    {
        const resultadoDiv = document.getElementById("resultado");
        resultadoDiv.innerHTML = '<h2>Resultados de los Ejercicios</h2>';
        
        ejercicio1(resultadoDiv);
        ejercicio2(resultadoDiv);
        ejercicio3(resultadoDiv);
        ejercicio4(resultadoDiv);
        ejercicio5(resultadoDiv);
        ejercicio6(resultadoDiv);
        ejercicio7(resultadoDiv);
    };
});

function ejercicio1(resultadoDiv)
{
    resultadoDiv.innerHTML += `<h3>EJERCICIO 1:</h3>`;
    const nombre = prompt("Ingresa tu nombre: ");
    const fechaN = prompt ("Ingresa tu fecha de nacimiento: ");
    if (nombre && fechaN) 
    {
        const edad = CalcularEdad(fechaN);
        console.log(`Hola ${nombre}, tenes ${edad} años`);
        resultadoDiv.innerHTML += `<h3>Hola ${nombre}, tenes ${edad} años</h3>`;
    }
}
   
function ejercicio2(resultadoDiv) 
{
    resultadoDiv.innerHTML += `<h3>EJERCICIO 2:</h3>`;
    const frutaUsuario = prompt("Ingresa el nombre de una fruta para ver si la tenemos:");
    if(frutaUsuario)
    {
        const fruta = tirandoFruta();
        console.log(`Nuestras frutas disponibles son: ${fruta}`);
        resultadoDiv.innerHTML += `<h3>Nuestras frutas disponibles son:", ${fruta}</h3>`;

        if (fruta.includes(frutaUsuario)) {
            resultadoDiv.innerHTML += `<p>¡Si, tenemos <b>${frutaUsuario}</b>! </p>`;
        } else 
        {
            resultadoDiv.innerHTML += `<p>No, no tenemos <b>${frutaUsuario}</b>. </p>`;
        }
    }
}

function ejercicio3(resultadoDiv)
{
    resultadoDiv.innerHTML += `<h3>EJERCICIO 3:</h3>`;
    const comparar = comparando();
    resultadoDiv.innerHTML += `<h3>Resultados: ${comparar}</h3>`;
}

function ejercicio4(resultadoDiv) {

    resultadoDiv.innerHTML += `<h3>EJERCICIO 4:</h3>`;
    const ciudad = crearObj();
    Object.keys(ciudad).forEach(clave => {
       
        resultadoDiv.innerHTML += `<li><b>Clave:</b> ${clave}, <b>Valor:</b> ${ciudad[clave]}</li>`;
    });

    resultadoDiv.innerHTML += `</ul>`;
}

function ejercicio5(resultadoDiv)
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

function ejercicio6(resultadoDiv)
{
    resultadoDiv.innerHTML += `<h3>EJERCICIO 6:</h3>`;
    dibujarTrianguloA();
    dibujarTrianguloB();
}

function ejercicio7(resultadoDiv)
{
    resultadoDiv.innerHTML += `<h3>EJERCICIO 7:</h3>`;
}