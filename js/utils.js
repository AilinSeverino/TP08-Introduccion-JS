function CalcularEdad(fechaN)
{
    const fechaNa = new Date (fechaN);
    const fechaH = new Date ();

    let edad = fechaH.getFullYear() - fechaNa.getFullYear();
    const mes = fechaH.getMonth() - fechaNa.getMonth();

    if(mes > 0 || mes === 0 && hoy.getDate() < fechaNa.getDate())
    {
        edad--;
    }
    return edad;
}

function mostrarResultado(mensaje)
{
    const men = mensaje;

    const divResultado = document.getElementById("resultado");
    divResultado.innerHTML += mensaje;
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

function ejercicio4() 
{
    const ciudad = 
    {
        nombre: "Barcelona",
        fechaFundacion: "Siglo I a.C.",
        poblacion: 1620343,
        extension: "101.9 km²"
    };
}