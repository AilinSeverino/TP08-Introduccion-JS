document.addEventListener('DOMContentLoaded', () => {
    window.iniciarEjercicios = function() 
    {
        const resultadoDiv = document.getElementById("resultado");
        resultadoDiv.innerHTML = '<h2>Resultados de los Ejercicios</h2>';
        
        ejercicio1();
        ejercicio2();
        ejercicio3();
    };
});

function ejercicio1()
{
    const nombre = prompt("Ingresa tu nombre: ");
    const fechaN = prompt ("Ingresa tu fecha de nacimiento: ");
    if (nombre && fechaNacimiento) 
    {
        const edad = CalcularEdad(fechaNacimiento);
        console.log(`Hola ${nombre}, tenes ${edad} años`);
        const result = mostrarResultado(`Hola ${nombre}, tenes ${edad} años`);
    }
}
   
function ejercicio2() 
{
    const frutaUsuario = prompt("Ingresa el nombre de una fruta para ver si la tenemos:");
    if(frutaUsuario)
    {
        const fruta = tirandoFruta();
        console.log("Nuestras frutas disponibles son:", frutas);
        const result = mostrarResultado("Nuestras frutas disponibles son:", frutas);
    }

    if (frutas.includes(frutaBusqueda)) {
        resultadoDiv.innerHTML += `<h3>2. Tirando fruta</h3><p>¡Si, tenemos <b>${frutaUsuario}</b>! </p>`;
    } else {
        resultadoDiv.innerHTML += `<h3>2. Tirando fruta</h3><p>No, no tenemos <b>${frutaUsuario}</b>. </p>`;
    }
}

function ejercicio3()
{
    const comparar = comparando();
    const result = mostrarResultado(`Resultados:`);
}

function ejercicio4() {//no termine
    

    // Preparar el encabezado del resultado en el DOM
    resultadoDiv.innerHTML += `<h3>4. Yo objeto</h3><p>Recorriendo las propiedades del objeto "ciudad":</p><ul>`;
    Object.keys(ciudad).forEach(clave => {
       
        resultadoDiv.innerHTML += `<li><b>Clave:</b> ${clave}, <b>Valor:</b> ${ciudad[clave]}</li>`;
    });

    resultadoDiv.innerHTML += `</ul>`;
}