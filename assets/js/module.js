// importacion nombrada
// se le dice asi porque lleva llaves y esta tiene que escribirse de manera literal como fue escrita la funcion
import { consola, retorno, suma, flecha } from "./scripts.js";

// importación por defecto
// cuando hacemos importacion por defecto, nosotros podemos renombrar en la importacion el nombre de la funcion por defecto del fichero
// esto generalmente se hace cuando existe mas de 1 funcion con el mismo nombre en distintos ficheros y deben ser importados en el modulo
import porDefecto from "./scripts.js";

consola();
porDefecto();

// cuando usamos una funcion que retorna valores, generalmente la tratamos como a una variable y la asignamos a otra, desde ese momento la nueva variable tendra como valor lo que retorna la funcion que le fue asignada
const valor_retorno = retorno();

console.log(valor_retorno);

// cuando llamamos a una funcion podemos (O NO) enviarle parametros, esto depende de la declaracion
// si la funcion espera valores, es recomendable mandarle la cantidad de valores(parametros) que esta necesite

// se le deben enviar la misma cantidad de parametros, mismo tipo de parametros y en el exacto orden en el que la funcion lo solicita

// los parametros deben estar separados por coma (,)

const sumar = suma(4, 5);
console.log("suma: ", sumar);


flecha();




// la cascada puede ser saltada con funciones y clases (luego veremos clases), esto quiere decir que si necesitas llamar a una funcion dentro del mismo fichero, puedes hacerlo antes de la linea de declaracion, ya que la cascada no lee funciones, solo lee el llamado de las mismas y es la variable o el mismo llamado quien se encarga de buscarlo