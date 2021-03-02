function mostrar()
{
	//tomo la edad  
	var edad;
	var estCivil;
	edad=txtIdEdad.value;
	edad=parseInt(edad);
	estCivil=estadoCivil.value;
	if(edad>18&&estCivil=="Soltero"){
		alert("Es soltero y no es menor");
	}
	


}//FIN DE LA FUNCIÓN