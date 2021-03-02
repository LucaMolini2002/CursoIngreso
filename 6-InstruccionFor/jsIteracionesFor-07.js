
function mostrar()
{
	var numero=parseInt(prompt("Ingrese un numero: "));
	var contadorDivisores;
	for(var i=0;i<numero/2;i++){
		if(numero%i==0){
			contadorDivisores++;
			document.write("<br>"=i);
		}
	}
	document.write("<br>"+"La cantidad de divisores es: "+contadorDivisores);
}