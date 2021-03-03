
function mostrar()
{
	var tipoProducto;
	var precioProducto;
	var cantidadUnidadesProducto;
	var marcaProducto;
	var fabricanteProducto;
	var unidadesAlcohol=0;
	var baratoAlcohol;
	var flag=0;
	var fabricanteAlcohol;
	var tipoMasUnidades;
	var promedioCommpra;
	var UnidadesJabonTotal;
	var contadorAlcohol=0;
	var acumuladorAlcohol=0;
	var contadorBarbijo=0;
	var acumuladorBarbijo=0;
	var contadorJabon=0;
	var acumuladorJabon=0;

	for(var i=0;i<3;i++){
		tipoProducto=prompt('Ingrese su producto: ("barbijo" , "jabobarbijon" o "alcohol")');
		while(tipoProducto!="barbijo"&&tipoProducto!="jabon"&&tipoProducto!="alcohol"){
			tipoProducto=prompt('Error, Ingrese producto nuevo: "barbijo", "jabon" o "alcohol":');
		}
		precioProducto=parseInt(prompt("Ingresar precio del producto: (entre 100 y 300)"));
		while(precioProducto<100||precioProducto>300){
			precioProducto=parseInt(prompt("Error, Ingresar precio nuevo entre 100 y 300"));
		}
		cantidadUnidadesProducto=parseInt(prompt("Ingrese cantidad(maximo 1000)"));
		while(cantidadUnidadesProducto>=1000||cantidadUnidadesProducto<1){
			cantidadUnidadesProducto=parseInt(prompt("Error, Ingrese cantidad nueva: (maximo 1000)"));
		}
		marcaProducto=prompt("Ingrese marca del producto: ");
		fabricanteProducto=prompt("Ingrese fabricante del producto: ");

		switch(tipoProducto){
			case "alcohol":
				acumuladorAlcohol+=cantidadUnidadesProducto;
				contadorAlcohol++;
				if(flag=0||precioProducto<baratoAlcohol){
					baratoAlcohol=precioProducto;
					unidadesAlcohol=cantidadUnidadesProducto;
					fabricanteAlcohol=fabricanteProducto;
					flag=1
				}
			case "Barbijo":
				acumuladorBarbijo+=cantidadUnidadesProducto;
				contadorBarbijo++;
			case "jabon":
				acumuladorJabon+=cantidadUnidadesProducto;
				contadorJabon++;	
		}

	}
	if(acumuladoralcohol>acumuladorBarbijo&&acumuladorAlcohol>acumuladorJabon){
		tipoMasUnidades="alcohol";
		promedioCommpra=acumuladorAlcohol/contadorAlcohol;
	}else if(acumuladorBarbijo>acumuladorAlcohol&&acumuladorBarbijo>acumuladorJabon){
		tipoMasUnidades="barbijo";
		promedioCommpra=acumuladorBarbijo/contadorBarbijo;
	}else if(acumuladorJabon>acumuladorAlcohol&&acumuladorJabon>acumuladorBarbijo){
		tipoMasUnidades="jabon";
		promedioCommpra=acumuladorJabon/contadorJabon;
	}else{
		tipoMasUnidades="Todos";
	}
	UnidadesJabonTotal=acumuladorJabon;


	document.write("<br>"+"Del alcohol mas barato, la cantidad de unidades es: "+unidadesAlcohol+" ,y el fabricante es: "+fabricanteAlcohol);
	document.write("<br>"+"El con mas unidades es: "+tipoMasUnidades+", y su promedio por compra es: "+promedioCommpra);
	document.write("<br>"+"Hay un total de "+UnidadesJabonTotal+" unidades de jabon");
}
