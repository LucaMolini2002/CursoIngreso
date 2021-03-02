/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largoTerreno;
    var anchoTerreno;
    var radioTerreno;
    largoTerreno=txtIdLargo.value;
    anchoTerreno=txtIdAncho.value;
    radioTerreno=txtIdRadio.value;
    largoTerrenoParseado=parseInt(largoTerreno);
    anchoTerrenoParseado=parseInt(anchoTerreno);
    radioTerrenoParseado=parseInt(radioTerreno);
    RectanguloAlambre=((largoTerrenoParseado*2)+(anchoTerrenoParseado*2))*(3);
    alert("Se necesita una cantidad de "+RectanguloAlambre+" cm de alambre.");
}
function Circulo () 
{
    var radioTerreno;
    var CirculoAlambre;
    var CirculoAlambreXTres;
    var pi=Math.PI;
    var cantAlambres=3;
    radioTerreno=txtIdRadio.value;
    radioTerrenoParseado=parseInt(radioTerreno);
    CirculoAlambre=radioTerrenoParseado*pi;
    CirculoAlambreXTres=CirculoAlambre*cantAlambres;
    alert("Se necesita una cantidad de "+CirculoAlambreXTres+" cm de alambre");
}
function Materiales () 
{
	var largoTerreno;
    var anchoTerreno;
    var bolsasCemento=2;
    var bolsasCal=3;
    var cantidadCemento;
    var cantidadCal;
    largoTerreno=txtIdLargo.value;
    anchoTerreno=txtIdAncho.value;
    largoTerrenoParseado=parseInt(largoTerreno);
    anchoTerrenoParseado=parseInt(anchoTerreno);
    cantidadCemento=(largoTerrenoParseado*anchoTerrenoParseado)*(bolsasCemento);
    cantidadCal=(largoTerrenoParseado*anchoTerrenoParseado)*(bolsasCal);
    alert("Se necesita una cantidad de "+cantidadCemento+" bolsas de cemento y "+cantidadCal+" bolsas de cal.");
}