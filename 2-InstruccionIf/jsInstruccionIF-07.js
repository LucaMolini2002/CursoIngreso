function mostrar()
{ 
	var edad;
	var estCivil;
	console.log(edad)
	edad=txtIdEdad.value;
	edad=parseInt(edad);
	estCivil=estadoCivil.value;
	if(isNaN(edad)){
		alert("Lo ingresado no es una edad valida.");
	}
	else
	{
		if(edad<18 && estCivil=="Casado" || estCivil=="Divorciado"){
			alert("Es muy pequeño para no ser soltero");
		}
	}
	
}//FIN DE LA FUNCIÓN