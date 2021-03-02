
function mostrar()
{
	var tipoProducto;
	var precioProducto;
	var cantidadUnidadesProducto;
	var marcaProducto;
	var fabricanteProducto;
	var cantidadJabonMaxUnidades;
	var maximoPrecioJabon;
	var contadorJabon=0;
	var contadorBarbijo=0;
	var contadorAlcohol=0;
	var maximoJabonFabricante;
	var cantMaxBarbijos;
	var promedioCompra=0;

	for(var i=0;i<5;i++){
		tipoProducto=prompt('Ingresar tipo "barbijo", "jabon" o "alcohol":');
		while(tipoProducto!="barbijo"&&tipoProducto!="jabon"&&tipoProducto!="alcohol"){
			tipoProducto=prompt('Error, Ingrese tipo"barbijo", "jabon" o "alcohol":');
		}
		precioProducto=parseInt(prompt("Ingresar precio entre 100 y 300"));
		while(precioProducto<100||precioProducto>300){
			precioProducto=parseInt(prompt("Error, Ingresar precio entre 100 y 300"));
		}
		cantidadUnidadesProducto=parseInt(prompt("Ingrese cantidad(maximo 1000)"));
		while(cantidadUnidadesProducto>=1000||cantidadUnidadesProducto<1){
			cantidadUnidadesProducto=parseInt(prompt("Error, Ingrese cantidad(maximo 1000)"));
		}
		marcaProducto=prompt("Ingrese marca");
		fabricanteProducto=prompt("Ingrese fabricante");
		switch (tipoProducto) {
			case "alcohol":
				contadorAlcohol++;
				cantAlcohol=contadorAlcohol;
				break;
			case "barbijo":
				cantMaxBarbijos=cantMaxBarbijos+contadorBarbijo;
				break;	
			case "jabon":
				contadorJabon++;
				if(contadorJabon==1||precioProducto>maximoJabon){
					maximoPrecioJabon=precioProducto;
					cantidadJabonMaxUnidades=cantidadUnidadesProducto;
					maximoJabonFabricante=fabricanteProducto;
				}
				break;
		}
		/*
		if(i==0){
			mayorcantporunidad=cantidadunidadesproducto;
			tipoconmayorcant=tipoproducto;
			preciodelmayor=precioproducto;
		}
		 */
	}
	if (contadorAlcohol>contadorJabon&&contadorAlcohol>contadorBarbijo) {
		tipoProducto="alcohol";
		promedioCompra=precioProducto/contadorAlcohol;
	}
	else if(contadorBarbijo>contadorAlcohol&&contadorBarbijo>contadorJabon){
		tipoProducto="barbijo";
		promedioCompra=precioProducto/contadorBarbijo;
	}else{
		tipoProducto="jabon";
		promedioCompra=precioProducto/contadorJabon;
	}
	document.write("<br>"+"El promedio por compra de producto con mas unidades de compra es: "+promedioCompra);
	document.write("<br>"+"Del jabon mas caro, la cantidad es: "+cantidadJabonMaxUnidades+" y el fabricante es: "+maximoJabonFabricante);
	document.write("<br>"+"La cantidad de barbijos total es: "+cantMaxBarbijos);
}
