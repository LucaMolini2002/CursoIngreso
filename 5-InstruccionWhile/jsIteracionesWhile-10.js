/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{ 
	var respuesta;
	var numero;
	var sumaNegativos=0;
	var sumaPositivos=0;
	var cantNegativos=0;
	var cantPositivos=0;
	var cantCeros=0;
	var cantNumPares=0;
	var promedioPositivos=0;
	var promedioNegativos=0;
	var diferenciaPyN;
	do{
		numero=parseInt(prompt("Ingrese un numero"));
		if(numero<0){
				sumaNegativos=sumaNegativos+numero;
				cantNegativos++;
			}
			else if(numero>0){
				sumaPositivos=sumaPositivos+numero;
				cantPositivos++;
			}
			else {
				cantCeros++;
			}
			if(numero%2==0){
				cantNumPares++;
			}
	
		respuesta=confirm("Continue ingresando numeros: ");
	}
	while(respuesta==true);
	if(sumaPositivos>0){
	promedioPositivos=sumaPositivos/cantPositivos;
	}
	if(sumaNegativos>0){
	promedioNegativos=sumaNegativos/cantNegativos;
	}
	diferenciaPyN=cantPositivos-(cantNegativos);
	document.write("La suma de negativos es :"+sumaNegativos+"<br>");
	document.write("La suma de los positvos es: "+sumaPositivos+"<br>");
	document.write("La cantidad de negativos es: "+cantNegativos+"<br>");
	document.write("La cantidad de positvos es: "+cantPositivos+"<br>");
	document.write("La cantidad de ceros es: "+cantCeros+"<br>");
	document.write("El promedio de negativos es: "+promedioNegativos+"<br>");
	document.write("El promedio de positivos es: "+promedioPositivos+"<br>");
	document.write("La cantidad de numeros pares es: "+cantNumPares+"<br>");
	document.write("La diferencia de positivos y negativos es: "+diferenciaPyN+"<br>");
}//FIN DE LA FUNCIÓN