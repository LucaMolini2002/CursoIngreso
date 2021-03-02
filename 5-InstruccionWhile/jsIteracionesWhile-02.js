/*
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/
function mostrar()
{
	var acumulador=0;
	var contador=10;
	while(contador>=1){
		acumulador=contador;
		contador=contador-1;
		alert(acumulador);
	}
}//FIN DE LA FUNCIÓN