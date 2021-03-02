/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var numero;
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	var flag=0;
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';

	do{
		numero=parseInt(prompt("Ingrese un numero:"));
		if(numero>=0){
			sumaPositivos=sumaPositivos+numero;
		} 
		else{
			flag=1;
			multiplicacionNegativos=multiplicacionNegativos*numero;
		} 
		respuesta=prompt("Quiere ingresar otro numero?");
	} while(respuesta=='si');
		numero=parseInt(prompt("Ingrese otro numero:"));
		
		if(flag==0){
			multiplicacionNegativos=0;
		}
		txtIdProducto.value=multiplicacionNegativos;
		txtIdSuma.value=sumaPositivos;
	
}//FIN DE LA FUNCIÓN