function mostrar()
{
	var numero=parseInt(prompt("Ingrese un numero: "));
	var contadorPares=0;
	for(var i=0;i<=numero;i++){
		if(i%2==0){
			contadorPares++;
			document.write("<br>"+i);
		}
	}
	document.write("<br>"+"La cantidad de numeros pares es: "+contadorPares);

}//FIN DE LA FUNCIÓN