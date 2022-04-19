
//Arros functions

const { rejects } = require("assert");
const { resolve } = require("path");

/* var arr = [1,2,3,4]

var nuevo = arr.map(function(n){ return n + 1})

var nuevo2 = arr.map(n => n + 1)

console.log(nuevo2)
 */

/* var fn = () => {
    var nombre = 'javier';
    console.log(nombre);
}
fn(); */

/* var bob = {
    name: 'Bob',
    friends: ['Jose', 'Luis', 'Pepe'],
    printFriends() {
        this.friends.forEach(f => 
            console.log(this.name + ' knows ' + f))
    }
}
bob.printFriends(); */

//Clases

/* class persona {
    constructor (nombre = 'Javier', apellido = 'Fioretti') {
        this.nombre = nombre;
        this.apellido = apellido;
    }
    getNombre() {
        return this.nombre + ' ' + this.apellido;
    }
}

class Empleado extends persona {                             //extends se usa para heredar la clase
    constructor(nombre, apellido, empleo, sueldo) {
        super (nombre, apellido)                             //super que propiedades va a heredar
        this.empleo = empleo;
        this.sueldo = sueldo;
    }
    getEmpleo() {
        return this.empleo + '($' + this.sueldo + ')';
    }
}

var person = new persona('Pepe', 'Aguirre');
var javi = new persona();
var emp = new Empleado('Roberto', 'Perez', 'Profesor', 1000)

console.log(person)
console.log(javi)
console.log(emp.getNombre()) */

//Template strings

/* var uds = 'ustedes';

var str = 'hola, como estan' + ' ' + uds + ' ' + '\n Me alegro mucho' 
var tstr = `hola, como estan ${uds} 
me alegro mucho.`

console.log(tstr); */

//Destructuracion

/* var arr = [a,b,c] = [1,2,3] //toma valores de dos arrays

console.log(a)
console.log(b)
console.log(c)

var obj = {

    nombre: 'Javier',
    apellido: 'Fioretti',
    edad: 50
}
var {nombre, apellido} = obj;   //uno o mas argumentos del objeto

console.log(nombre)
console.log(apellido)

//Default

function f(x, y=12){        //asignamos un valor por defecto(y=12).
    return x + y;
} */

//Rest

/* function f(cantidad, ...palabras) {     // cuando no sabemos la cantidad de argumentos.
    console.log(cantidad);
    console.log(palabras)               //lo devuelve en un array
}

f(4, 'hola', 'como', 'estan', 'ustedes') */

//otra opcion

/* var arr = [1,2,3]

function f(x, y,z) {
    console.log(x + y + z);
}

f(...arr); */

//Spread operator

/* var obj = {a:1}
var copia = obj

copia.b = 2;

console.log(obj)
console.log(copia) */

/***************************** */
//cambiamos elvalor de copia a un objeto con spread

/* var obj = {a:1}
var copia = {...obj}

copia.b = 2;

console.log(obj)
console.log(copia) */

/***************************** */

/* var obj = {a:1}
var copia = {...obj}

var arr = [1,2,3,4]
var copiaArr = [...arr]             //agregamos otro arreglo que no modifica los originales
var arr1 = [7,8,9]
var arr2 = [...arr, ...arr1]

copia.b = 2;

console.log(arr2) */
//console.log(copia)

//Promises
// Se trata como una promesa en la vida real, de algo que no sucedio, y no sabemos si lo hara.

/* function timeout(duration = 0) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, duration);
    })
}
var p = timeout (1000).then(() => {
    return timeout (2000);
    }).then (() => {                                            // si se cumple
        throw new Error('Hmmmm');
    }).catch(err => {                                           // si no se cumple
        return Promise.all([timeout(100), timeout(200)]);
    }) */

    

