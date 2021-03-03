
function mostrar()
{
	var tipoProducto;
	var precioProducto;
	var cantidad;
	var tipoInflamable;
	var marca;
	var acumuladorAlcohol=0;
	var acumuladorIAC=0;
	var acumuladorQUAT=0;
	var contadorAlcohol=0;
	var contadorIAC=0;
	var contadorQUAT=0;
	var acumuladorIgnifugo=0;
	var acumuladorExplosivo=0;
	var acumuladorCombustible=0;
	var contadorIgnifugo=0;
	var contadorExplosivo=0;
	var contadorCombustible=0;
	var tipoInflamableMasCant;
	var contadorUnidadesIACmenos200=0;
	var flag=0;
	var marcaMasCara;
	var tipoMasCaro;
	var precioMax;

	for(var i=0;i<=5;i++){

		tipoProducto=prompt('Ingrese el producto que quiere comprar: ("alcohol", "IAC" o "QUAT")');
		while(tipoProducto!="alcohol"&&tipoProducto!="IAC"&&tipoProducto!="QUAT"){
			tipoProducto=prompt('Error, Ingrese el producto que quiere comprar: ("alcohol", "IAC" o "QUAT")');
		}
		precioProducto=parseInt(prompt("Ingrese precio del producto: (entre 100 y 300)"));
		while(precioProducto<110||precioProducto>300){
			precioProducto=parseInt(prompt("Error. Ingrese precio del producto: (entre 100 y 300)"));
		}
		cantidad=parseInt(prompt("Ingrese cantidad: (maximo 1000)"));
		while(cantidad<0&&cantidad>1000){
			cantidad=parseInt(prompt("Error. Ingrese cantidad: (maximo 1000)"));
		}
		tipoInflamable=prompt('Ingrese tipo de inflamable: ("ignifugo", "combustible", "explosivo" )');
		while(tipoInflamable!="ignifugo"&&tipoInflamable!="combustible"&&tipoInflamable!="explosivo"){
			tipoInflamable=prompt('Error. Ingrese tipo de inflamable: ("ignifugo", "combustible", "explosivo" )');
		}
		marca=prompt("Ingrese la marca del producto: ");

		switch(tipoProducto){
			case "alcohol":
				acumuladorAlcohol+=cantidad;
				contadorAlcohol++;
				break;
			case "IAC":
				acumuladorIAC+=cantidad;
				contadorIAC++;
				break;
			case "QUAT":
				acumuladorQUAT+=cantidad;
				contadorQUAT++;
				break;		
		}
		switch(tipoInflamable){
			case "ignifugo":
				acumuladorIgnifugo+=cantidad;
				contadorIgnifugo++;
				break;
			case "combustible":
				acumuladorCombustible+=cantidad;
				contadorCombustible++;
				break;
			case "explosivo":
				acumuladorExplosivo+=cantidad;
				contadorExplosivo++;
				break;		
		}	

		if(tipoProducto=="IAC"&&precioProducto<200){
			contadorUnidadesIACmenos200+=cantidad;

			if(flag=0||precioProducto>precioMax){
				precioMax=precioProducto;
				marcaMasCara=marca;
				tipoMasCaro=tipoProducto;
				flag==1;
			}
		}
	}
	if(acumuladorIgnifugo>acumuladorExplosivo&&acumuladorIgnifugo>acumuladorCombustible){
		tipoInflamableMasCant="Tipo Ignifugo";
	}else if(acumuladorCombustible>acumuladorIgnifugo&&acumuladorCombustible>acumuladorExplosivo){
		tipoInflamableMasCant="Tipo Combustible";
	}else if(acumuladorExplosivo>acumuladorIgnifugo&&acumuladorExplosivo>acumuladorCombustible){
		tipoInflamableMasCant="Tipo Explosivo";
	}else{
		tipoInflamableMasCant="todos";
	}

document.write("<br>"+"El tipo alcohol tiene una cantidad de: "+acumuladorAlcohol);
document.write("<br>"+"El tipo IAC tiene una cantidad de: "+acumuladorIAC);
document.write("<br>"+"El tipo QUAT tiene una cantidad de: "+acumuladorQUAT);
document.write("<br>"+"El tipo inflamable con mas cantidad de unidades es: "+tipoInflamableMasCant);
document.write("<br>"+"Se compraron un total de "+contadorUnidadesIACmenos200+" unidades a menos de $200 pesos. ");
document.qwite("<br>"+"La marca mas cara es: "+marcaMasCara+", y el tipo de producto mas caro es: "+tipoMasCaro);
}
