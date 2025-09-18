function CalcularEdad(fechaN)
{
    const fechaNa = new Date (fechaN);
    const fechaH = new Date ();

    if (isNaN(fechaNa.getTime())) {
        return "Fecha de nacimiento inválida";
    }

    let edad = fechaH.getFullYear() - fechaNa.getFullYear();
    const mes = fechaH.getMonth() - fechaNa.getMonth();

    if(mes < 0 || mes === 0 && fechaH.getDate() < fechaNa.getDate())
    {
        edad--;
    }
    return edad;
}

function tirandoFruta() 
{
    const frutas = [
        "manzana",
        "banana",
        "naranja",
        "frutilla",
        "uva",
        "anana",
        "kiwi",
        "mango",
        "fruta del dragon",
        "melon"
    ];
    return frutas;
    
}

function comparando()
{
    let diez = 10;
    let otro = '10';
    let num = 10.6;
    const uno = (diez == otro);
    const dos = (diez === otro);
    const tres = (typeof num);
    const ver = (true == 1);

    return {uno, dos, tres, ver};
}

function crearObj() 
{
    const ciudad = 
    {
        nombre: "Barcelona",
        fechaFundacion: "17/09/2025",
        poblacion: 1620343,
        extension: "101.9 km"
    };

    return ciudad;
}

function duplicarElementos(numeros)
{
    const nuevo = [];
    for (let i = 0; i < numeros.length; i++) 
    {
        nuevo.push(numeros[i] * 2);
    }
    return nuevo;
}

function dibujarTrianguloA()
{
    let triangulo = "";
    for (let i = 1; i <= 5; i++) {
        let linea = "";
        for (let j = 0; j < i; j++) {
            linea += "*";
        }
        triangulo += linea + "\n";
    }
    console.log(triangulo);
}

function dibujarTrianguloB()
{
    const lineasPatron = [
        "----*-----",
        "---***---",
        "--*******--",
        "-*********-",
        "***********"
    ];

    let patronCompleto = "";
    lineasPatron.forEach(linea => {
        patronCompleto += linea + "\n";
    });

    console.log(patronCompleto);
    return patronCompleto;
}

function nombresA(listaNombres)
{
    const nombresLista = listaNombres.split(',').map(nombre => nombre.trim());
    const nombresConA = nombresLista.filter(nombre => nombre.startsWith('A') || nombre.startsWith('a'));
    return nombresConA;
}

function CalcularReemplazo(longString, palabraAReemplazar, reemplazo)
{
    const a = longString.replaceAll(palabraAReemplazar, reemplazo);
    return a;
}

function hacerCambio(longString, numero)
{
    const a = longString.slice(0, numero);
    return a;
}

function encontrarGuion(lista)
{
    const elementos = lista.split(',').map(elemento => elemento.trim());
    const stringFinal = elementos.join(' - ');
    return stringFinal;
}

function calcularRecaudacionTotal(listaPedidos)
{
    const pedidos = listaPedidos.split(',');
    let totalRecaudado = 0;

    pedidos.forEach(pedido => {
        const partes = pedido.split(':');
        const total = parseFloat(partes[1]);

        if (!isNaN(total)) {
            totalRecaudado += total;
        } 
    });

    return totalRecaudado.toFixed(2);
}