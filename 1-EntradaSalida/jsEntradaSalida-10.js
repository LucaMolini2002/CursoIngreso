/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var mostrarAumento
	importe=txtIdImporte.value;
	importeParseado=parseInt(importe);
	mostrarAumento=importeParseado*0.75;
	txtIdResultado.value=mostrarAumento;
}
