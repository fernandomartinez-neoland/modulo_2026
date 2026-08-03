// las funciones nombradas deben ser llamadas desde el modulo escritas de la manera literal de como fueron declaradas
export function consola(){
    console.log("consola")
}

// solo puede existir 1 funcion por defecto en cada fichero
// no es lo recurente pero se usa cuando necesitamos crear 1 funcion con el mismo nombre en mas de 1 fichero por proyecto

export default function defecto(){
    console.log("funcion por defecto")
}

export function retorno(){
// esto se usa generalmente cuando al llamar a una funcion, necesitamos que esta RETORNE un valor
    return "retorno"
}

// las funciones pueden recibir entre 0 y X parametros
// los parametros son variables vacias hasta que en el llamado se envian valores
// los parametros reciben los valores que se le envian a la funcion durante el llamado en EXACTAMENTE  el mismo orden
// los parametros reciben CUALQUIER tipo de valor (string, int, boolean, etc)
export function suma(numA, numB){
    
    // una vez que los paramtros perciben un valor, estos pasan a ser usados segun como la funcion necesite (no hay regla especifica sobre esto)

    // toda variable y parametro que sea declarado dentro de la funcion SOLO EXISTE dentro de la funcion
    // no se puede declarar una variable dentro de la funcion para luego ser usada fuera de la funcion

    // se puede declarar una variable dentro de la funcion y luego fuera de la funcion, ante al ejecucion son 2 variables distintas

    // si declaras una variable fuera de la funcion, puedes usarla dentro de la funcion (simpre y cuando esta variable no fuese declarada previamente dentro de otra funcion)
    return numA+numB
}


export const flecha =()=>{
    console.log("funcion de flecha")
    funcseption()
}


function funcseption(){
    console.log("funcseption")
}

export function funcionTexto(texto){
    console.log("imprimir: ", texto.textContent)
}