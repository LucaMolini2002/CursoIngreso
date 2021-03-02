/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var temperatura;
    var FahrenheitCentigrados;
    temperatura=txtIdTemperatura.value;
    temperaturaParseada=parseInt(temperatura);
    fahrenheitCentigrados=(temperaturaParseada-32)*(5/9);
    alert(temperatura+" Fahrenheit son "+FahrenheitCentigrados+" centigrados");
}

function CentigradosFahrenheit () 
{
    var temperatura;
    var centigradosFahrenheit;
    var centigradosFahrenheit
    temperatura=txtIdTemperatura.value;
    temperaturaParseada=parseInt(temperatura);
    centigradosFahrenheit=temperaturaParseada*(9/5)+(32);
    alert(temperatura+" Centigrados son "+centigradosFahrenheit+" fahrenheit");
}
