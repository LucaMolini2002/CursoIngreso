/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("ingrese su sexo.");
	while(sexoIngresado!="f"&&sexoIngresado!="m"){
		alert("Respuesta incorrecta, vuelva a introducir su sexo.");
		sexoIngresado = prompt("ingrese su sexo.");
	}
	txtIdSexo.value=sexoIngresado;
}//FIN DE LA FUNCIÓN