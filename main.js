const dolar = 0.0060;
const euro = 0.0058;
const pesos = 5.40;

function convertidorMoneda()
{
    let valor = parseInt(document.getElementById("montoCotizador").value);
    let resultado;

    if(document.getElementById("Euro").checked)
    {
        resultado = valor*euro
        alert(valor.toFixed(2) +" Pesos argentinos son: "+ resultado.toFixed(2)+" Euros");
    }
    else if(document.getElementById("Dolar").checked)
    {
        resultado = valor*dolar
        alert(valor.toFixed(2) +" Pesos argentinos son: "+ resultado.toFixed(2)+" Dolares");
    }
    else if(document.getElementById("Pesos").checked)
    {
        resultado = valor*pesos
        alert(valor.toFixed(2) +" Pesos argentinos son: "+ resultado.toFixed(2)+" Pesos chilenos");
    }
    else
    {
        alert("Ingrese los datos correspondientes");
    }

}

function calcularImporte()
{
    let monto = parseInt(document.getElementById("montoImportes").value);
    let cantidadMeses = parseInt(document.getElementById("meses").value);
    let porcentajeDeInteres = parseInt(document.getElementById("interes").value);
    let interes = (porcentajeDeInteres/100)+1;
    if(interes > 0 && cantidadMeses > 0 && monto > 0)
    {
        let total = monto*interes;

        for (let index = 0; index < cantidadMeses-1 ; index++) {
            total = total*interes; 
        }
        alert("El monto " + monto.toFixed(2) + " pasa a ser " + total.toFixed(2) + " luego de estar " + cantidadMeses + " meses a un interes del " + porcentajeDeInteres + " porciento.");
    }
    else
    {
        alert("Ingrese los datos correspondientes");
    }
}