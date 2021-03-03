
function mostrar()
{
	var tipoProducto;
	var precioProducto;
	var cantidadUnidadesProducto;
	var marcaProducto;
	var fabricanteProducto;
	var unidadesAlcohol=0;
	var baratoAlcohol=0;
	var fabricanteAlcohol;
	var tipoMasUnidades;
	var promedioCommpra;
	var UnidadesJabonTotal;

	for(var i=0;i<3;i++){
		tipoProducto=prompt('Ingrese su producto: ("barbijo" , "jabón" o "alcohol")');
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

		if(tipoProducto=="alcohol"){
			precioProducto<baratoAlcohol;
			baratoAlcohol=precioProducto;
			unidadesAlcohol=cantidadUnidadesProducto;
			fabricanteAlcohol=fabricanteProducto;
		}
		if(cantidadUnidadesProducto>tipoMasUnidades){
			tipoMasUnidades=cantidadUnidadesProducto;
		}

	}

	promedioCommpra=precioProducto/tipoMasUnidades;

	document.write("<br>"+"Del alcohol mas barato, la cantidad de unidades es: "+unidadesAlcohol+" ,y el fabricante es: "+fabricanteAlcohol);
}
