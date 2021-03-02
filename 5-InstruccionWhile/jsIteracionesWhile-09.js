/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var flag=true;
	var numero;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	//iniciar variables
	respuesta;
	do{
		numero=parseInt(prompt("Ingrese un numero: "));
		if(flag==true){
			numeroMaximo=numero;
			numeroMinimo=numero;
			flag=false;
		}
		else{

			if(numero>numeroMaximo){
				numeroMaximo=numero;
			}
			else if(numero<numeroMinimo){
				numeroMinimo=numero;
			}
		}	
		respuesta=confirm("Desea continuar ingresando numeros?");
		
	}while(respuesta==true);
	
	numero=parseInt(prompt("Ingrese nuevo numero: "));

	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;
}//FIN DE LA FUNCIÓN