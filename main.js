//Este es el modulo, donde se van a "importar" funciones o variables de otros archivos java (respectivamente los que tengan el "export")
//El "import se encarga de cargar las funciones o variables de un archivo java especifico"
import { suma, resta, palabra } from "./prueba.js";

//Y aqui se utilizan las funciones y variables..
alert(palabra);

console.log(suma(5,3));

console.log(resta(5,3));