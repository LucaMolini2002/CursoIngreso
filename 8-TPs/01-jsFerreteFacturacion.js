/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var suma;
    precioUno=txtIdPrecioUno.value;
    precioDos=txtIdPrecioDos.value;
    precioTres=txtIdPrecioTres.value;
    var precioUnoParseado=parseInt(precioUno);
    var precioDosParseado=parseInt(precioDos);
    var precioTresParseado=parseInt(precioTres);
    suma=precioUnoParseado+precioDosParseado+precioTresParseado;
    alert("La suma es "+suma);
}
function Promedio () 
{
	var precioUno;
    var precioDos;
    var precioTres;
    var promedio;
    precioUno=txtIdPrecioUno.value;
    precioDos=txtIdPrecioDos.value;
    precioTres=txtIdPrecioTres.value;
    var precioUnoParseado=parseInt(precioUno);
    var precioDosParseado=parseInt(precioDos);
    var precioTresParseado=parseInt(precioTres);
    promedio=(precioUnoParseado+precioDosParseado+precioTresParseado)/(3);
    alert("El promedio es: "+promedio);
}
function PrecioFinal () 
{
	var precioUno;
    var precioDos;
    var precioTres;
    var promedio;
    var precioFinal;
    precioUno=txtIdPrecioUno.value;
    precioDos=txtIdPrecioDos.value;
    precioTres=txtIdPrecioTres.value;
    var precioUnoParseado=parseInt(precioUno);
    var precioDosParseado=parseInt(precioDos);
    var precioTresParseado=parseInt(precioTres);
    promedio=(precioUnoParseado+precioDosParseado+precioTresParseado)/(3);
    precioFinal=promedio*1.21;
    alert("El precio final con IVA agregado es: "+precioFinal);
}