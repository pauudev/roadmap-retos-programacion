// https://developer.mozilla.org/es/docs/Web/JavaScript //

// Existen tres tipos de comentarios:

// Comentario de una línea

/* Comentario más largo
 * de varias líneas.
 */

/** 
 * Comentarios de documentación
 * Como su nombre, nos sirve para incluir
 * en nuestro código, información relevante
 * al respecto, tal como aclaraciones del mismo. */

/* JavaScript tiene maneras diferentes de declarar variables y constantes.
* Variables: En JavaScript podemos declarar una variable de dos formas:
             a) 'var' seguido del nombre de la variable (se encuentra en desuso).
             b) 'let' seguido del nombre de la variable. Local con ámbito de bloque. */

var $gato = 666;
let _gato = 'GiGi';

// Constantes: Declara un nombre de constante de solo lectura y ámbito de bloque, inmutables.

const miConst = 'Gigi';

// JavaScript tiene seis tipos de datos que son primitivos:

let booleano = true; // Representa un valor lógico, que puede ser verdadero o falso.
let number = 666; // Representa un número entero o un número con coma flotante.
let bigint = 9007199254740992n; // Representa un número entero con precisión arbitraria.
let string = "JavaScript"; // Representa una secuencia de caracteres que a su vez representan un valor de texto.
let symbol = Symbol('mi Symbol'); // Representa un tipo de dato cuyas instancias son únicas e inmutables.
let undefined; // Representa una propiedad de alto nivel cuyo valor no está definido.
/*null: una palabra clave especial que denota un valor nulo. (Dado que JavaScript distingue entre mayúsculas 
y minúsculas, null no es lo mismo que Null, NULL o cualquier otra variante, propio de cada Objetc).*/

console.log("!Hola, JavaScript!");
