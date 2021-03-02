/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta='si';
	contador=0;
	acumulador=0;
	do{
		numero=parseInt(prompt("Ingrese un numero"));
		acumulador=contador+numero;
		contador=contador+1;
		respuesta=confirm("Quiere ingresar otro numero");
	}while(respuesta==true);
		numero=parseInt(prompt("Ingrese otro numero"));
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;

}//FIN DE LA FUNCIÓN