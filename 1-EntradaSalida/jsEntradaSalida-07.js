/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno;
	var numeroDos;
	numeroUno=txtIdNumeroUno.value;
	numeroDos=txtIdNumeroDos.value;
	numeroUnoP=parseInt(numeroUno);
	numeroDosP=parseInt(numeroDos);
	suma=numeroUnoP+numeroDosP;
	alert("La suma es "+suma);	
}

function restar()
{
	var numeroUno;
	var numeroDos;
	var restar;
	numeroUno=txtIdNumeroUno.value;
	numeroDos=txtIdNumeroDos.value;
	numeroUnoP=parseInt(numeroUno);
	numeroDosP=parseInt(numeroDos);
	restar=numeroUnoP-numeroDosP;
	alert("La resta es "+restar);	
}

function multiplicar()
{ 
	var numeroUno;
	var numeroDos;
	var multiplicar;
	numeroUno=txtIdNumeroUno.value;
	numeroDos=txtIdNumeroDos.value;
	numeroUnoP=parseInt(numeroUno);
	numeroDosP=parseInt(numeroDos);
	multiplicar=numeroUnoP*numeroDosP;
	alert("La multiplicacion es "+multiplicar);	
}

function dividir()
{
	var numeroUno;
	var numeroDos;
	var dividir;
	numeroUno=txtIdNumeroUno.value;
	numeroDos=txtIdNumeroDos.value;
	numeroUnoP=parseInt(numeroUno);
	numeroDosP=parseInt(numeroDos);
	dividir=numeroUnoP/numeroDosP;
	alert("La division es "+dividir);
}

