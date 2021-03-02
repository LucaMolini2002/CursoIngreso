/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var numeroDividendo;
	var numeroDivisor;
	var SacarResto
	numeroDividendo=txtIdNumeroDividendo.value;
	numeroDivisor=txtIdNumeroDivisor.value;
	numeroDividendoParseado=parseInt(numeroDividendo);
	numeroDivisorParseado=parseInt(numeroDivisor);
	SacarResto=numeroDividendoParseado%numeroDivisorParseado;
	alert("El resto entre el dividendo y el divisor es: "+SacarResto);
}
