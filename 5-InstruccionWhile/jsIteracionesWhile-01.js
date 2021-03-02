/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar()
{
	/*var numero;
	var acumulador=0;
	var contador=0;
	while(contador<5){
		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);
		acumulador=acumulador+numero;
		contador=contador+1;
	}
	alert("La suma de los numeros da por resultado "+acumulador+".");*/
	var numero=1;
	var acumulador=0;
	var contador=0;
	while(contador<10){
		acumulador=contador+numero;
		contador=contador+1;
		alert(acumulador);
	}
	

}